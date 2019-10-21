import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    StatusBar,
    Text,
} from 'react-native';

import ShopHeaderView from './view/ShopHeaderView';
import ShopIndexView from './view/ShopIndexView';
import ShopTabs from './view/ShopTabs';
import TabSellerInfoView from './view/TabSellerInfoView';
import TabFoodsView from './view/TabFoodsView';
import TabEvaluateView from './view/TabEvaluateView';
import ShopTrolleyBar from './view/ShopTrolleyBar';

import {queryRecommends,queryFoods} from '../../jsonDemo/SellerFoodsJSON'


const  TabsBarHeight =  35;
export  default class ShopScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            statusBarHeight: 20,
            statusBarStyle: 'light-content',
            sellerDetails: null,
            tabsIndex : 0,
            tabsBarFixed:false,
            foodListScrollEnabled:false,
            recommends:[],
            foods:[],
            shopTrolleyFoods:[],
            shopTrolleyData:null,

        };
        this.setTabHorizontalScrollRef = element => {
            this.tabHorizontalScroll = element;
        };

    }

    static navigationOptions =  ({ navigation }) => {
        ///*****导航栏透明 需要同时设置 headerTransparent:true 和 backgroundColor:'rgba(255,255,255,0)' 才有效
        let alpha = navigation.getParam('headerAlpha')?navigation.getParam('headerAlpha'):0;
        return {
            headerTransparent:true,
            headerTintColor: alpha===0?'#fff':'#333',
            title:alpha===1&&navigation.getParam('sellerName'),
            headerStyle:{
                backgroundColor:`rgba(255,255,255,0)`
            },
        };
    };
    render () {
        ///推荐商家栏高度
        this.RecommendsHeight = this.state.recommends&&this.state.recommends.length>0?170:0;
        ///商品列表栏高度
        this.FoodListHeight =  Device.ScreenHeight-global.NavigationHeight-this.state.statusBarHeight-TabsBarHeight;
        return (

            <View style={{flex: 1, backgroundColor:Colors.ScreenBackgroundColor,position:''}}>
                {/*状态栏*/}
                <StatusBar barStyle={this.state.statusBarStyle} />
                {/*加一个导航栏背景*/}
                {/*控制导航背景颜色，在这里加是有原因的,直接在navigationOptions控制背景色
                   会出现在透明与非透明交界处出现内容顶部偏移跳动,在这里加体验极佳*/}
                <View style={{zIndex:99,position:'absolute',top:0,left:0,right:0,height:global.NavigationHeight+this.state.statusBarHeight,
                    backgroundColor:`rgba(255,255,255,${this.props.navigation.getParam('headerAlpha')})`}}/>

                {/*tabs吸顶*/}
                {
                    this.state.tabsBarFixed&&
                    <ShopTabs
                        style={{zIndex:999,height:TabsBarHeight,position:'absolute',left:0,top:this.state.statusBarHeight+NavigationHeight,right:0}}
                        items={['点餐','评价','商家']}
                        currentIndex={this.state.tabsIndex}
                        tabsPressed={(index)=>{this.tabsPressed(index)}}
                    />
                }
                {/*垂直-scroll*/}
                <ScrollView style={{flex:1}}
                            onScroll={(e)=>{this.mainOnScroll(e)}} scrollEventThrottle={10}
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                >
                    <ShopHeaderView
                        backgroundImage={this.state.sellerDetails&&this.state.sellerDetails.backgroundImage}
                        image={this.state.sellerDetails&&this.state.sellerDetails.image}
                    />
                    <ShopIndexView sellerDetails={this.state.sellerDetails}/>
                    {

                        <View style={{height:TabsBarHeight,marginTop:5,backgroundColor:'#fff'}}>
                            {
                                !this.state.tabsBarFixed&&
                                <ShopTabs
                                    style={{height:TabsBarHeight}}
                                    items={['点餐','评价','商家']}
                                    currentIndex={this.state.tabsIndex}
                                    tabsPressed={(index)=>{this.tabsPressed(index)}}
                                />
                            }
                        </View>
                    }

                    {/*ShopTabs下的内容:水平-scroll*/}
                    <ScrollView
                        ref={this.setTabHorizontalScrollRef}
                        style={{flexDirection:'row',height:Device.ScreenHeight-NavigationHeight-this.state.statusBarHeight-TabsBarHeight + this.RecommendsHeight}}
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onMomentumScrollEnd={({nativeEvent:{contentOffset: { x, y },layoutMeasurement: { height, width }}})=>{
                            ///滚动动画结束，切换tabs
                            let index = x/width;
                            this.setState({tabsIndex:index});
                        }}
                    >
                        {/*点餐*/}
                        <TabFoodsView
                            RecommendsHeight={this.RecommendsHeight}
                            ListHeight={this.FoodListHeight}
                            style={{width:Device.ScreenWidth}}
                            foodListScrollEnabled={this.state.foodListScrollEnabled}
                            foodListOnScroll={({nativeEvent:{contentOffset: { x, y }}})=>{
                                ///滑到顶部禁止滚动
                                this.setState({foodListScrollEnabled:y>0});
                            }}
                            recommends={this.state.recommends}
                            foods={this.state.foods}
                            ///获取foodList的引用
                            forwardFoodListRef={(elenment)=>{
                                this.foodList =  elenment;
                            }}
                            ///点击事件
                            ///商家推荐-减点击
                            recommendsReduceButtonOnPress={(index)=>{this._recommendsReduceButtonOnPress(index)}}
                            ///商家推荐-加点击
                            recommendsAddButtonOnPress={(index)=>{this._recommendsAddButtonOnPress(index)}}
                            ///food列表-减点击
                            foodListReduceButtonOnPress={(index, section)=>{this._foodListReduceButtonOnPress(index, section)}}
                            ///food列表-加点击
                            foodListAddButtonOnPress={(index, section)=>{this._foodListAddButtonOnPress(index, section)}}

                        />
                        {/*评价*/}
                        <TabEvaluateView style={{ backgroundColor:'#761',width:Device.ScreenWidth}}/>
                        {/*商家*/}
                        <TabSellerInfoView style={{ backgroundColor:'#877',width:Device.ScreenWidth}}/>

                    </ScrollView>
                </ScrollView>
                {/*都不工具栏*/}
                {this.state.tabsIndex===0&&<ShopTrolleyBar data={this.state.shopTrolleyData} style={{zIndex:1000,position:'absolute',left:0,bottom:0,height:55}}/>}
            </View>
        );
    }

    ///加入购物车操作
    ///商家推荐-减点击
    _recommendsReduceButtonOnPress(index){

       let item = this.state.recommends[index];
        if(item.buyCount&&item.buyCount>0){
            item.buyCount-- ;
        }else {
            item.buyCount=0;
        }

        this.setState((state,props)=>({
            recommends:state.recommends
        }))
    }
    ///商家推荐-加点击
    _recommendsAddButtonOnPress(index){
        let item = this.state.recommends[index];
        if(!item.buyCount){
            item.buyCount=1;
        }else {
            item.buyCount++;
        }

        this.setState((state,props)=>({
            recommends:state.recommends
        }))
    }
    /// food列表-减点击
    _foodListReduceButtonOnPress(index, section){

        let item = section.data[index];
        if(item.buyCount&&item.buyCount>0){
            item.buyCount-- ;
        }else {
            item.buyCount=0;
        }

        this.setState((state,props)=>({
            foods:state.foods
        }))


    }
    ///food列表-加点击
    _foodListAddButtonOnPress(index, section){
        let item = section.data[index];
        if(!item.buyCount){
            item.buyCount=1;
        }else {
            item.buyCount++;
        }

        this.setState((state,props)=>({
            foods:state.foods
        }))


    }

    processShopTrolley() {
        

    }

    ///tabs点击
    tabsPressed(index){
        this.setState({tabsIndex:index});
        //切换内容
        this.tabHorizontalScroll.scrollTo({x: index*Device.ScreenWidth, y: 0, animated: true});
    }
    ///主srcoll滑动监听
    mainOnScroll({ nativeEvent: { contentOffset: { x, y },contentSize: { height, width }}}){
        this.props.navigation.setParams({
            headerAlpha:y>global.NavigationHeight+this.state.statusBarHeight ?1:0,
        });
        ///主srcoll 滑到底部时 允许foodList滑动 反之不允许 有浮点小数误差用1补偿

        let distance =  height-Device.ScreenHeight-1;

        this.setState({foodListScrollEnabled:y>=distance});

        this.setState({tabsBarFixed:y>=distance-this.RecommendsHeight});

        y>=distance&&this.foodList.scrollToLocation({animated: true,itemIndex:0,sectionIndex:0,viewOffset:0,viewPosition:0});

    }
    componentDidMount() {
        ///订阅监听导航生命周期，设置状态栏
        this.didFocusSubscription = this.props.navigation.addListener(
            'didFocus', ()=>{this.setState({statusBarStyle:'light-content'})}
        );
        this.didBlurSubscription = this.props.navigation.addListener(
            'didBlur', ()=>{this.setState({statusBarStyle:'dark-content'})}
        );
        ///获取状态栏高度
        global.statusBarManager.statusHeight((height)=>{
            this.setState({
                statusBarHeight:height
            });
        });
        ///商家信息
        this.setState({
            sellerDetails:this.props.navigation.state.params,
        });
        ///获取点餐
        this.setState({
            recommends:queryRecommends(),
            foods:queryFoods()
        });

    }
    ///移除订阅
    componentWillUnmount() {
        this.didFocusSubscription.remove();
        this.didBlurSubscription.remove();
    }
};