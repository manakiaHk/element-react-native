import React from 'react';
import {View,ScrollView,StyleSheet,SafeAreaView,StatusBar,Text,} from 'react-native';

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
            shopTrolleyData:{
                badge:0,   //角标
                shippingFee:'', //配送费
                total:0,   //总价格
                sendOutUp:0  ///起送价
            },
        };
        this.setTabHorizontalScrollRef = element => {
            this.tabHorizontalScroll = element;
        };

    }


    static navigationOptions =  ({ navigation }) => {
        ///*****导航栏透明 需要同时设置 headerTransparent:true 和 backgroundColor:'rgba(255,255,255,0)' 才有效
        let headerOpaque = navigation.getParam('headerOpaque');
        return {
            headerTransparent:true,
            headerTintColor: headerOpaque?'#333':'#fff',
            title:headerOpaque&&navigation.getParam('sellerName'),
            headerStyle:{
                backgroundColor:`rgba(255,255,255,0)`
            },
        };
    };
    render () {

        ///推荐商家栏高度
        this.RecommendsHeight = this.state.recommends&&this.state.recommends.length>0?170:0;
        ///商品列表栏高度
        this.FoodListHeight =  Device.ScreenHeight-Device.NavigationBarHeight-this.state.statusBarHeight-TabsBarHeight;


        this.HorizontalScrollHeight = Device.ScreenHeight-Device.NavigationBarHeight-this.state.statusBarHeight-TabsBarHeight + this.RecommendsHeight;

        if(Device.OS==='android'){
            this.HorizontalScrollHeight-=this.state.statusBarHeight;
            this.FoodListHeight-=this.state.statusBarHeight;
        }

        return (



            <View style={{flex: 1, backgroundColor:Colors.ScreenBackgroundColor}}>
                {/*状态栏*/}
                <StatusBar barStyle={this.state.statusBarStyle} />
                {/*加一个导航栏背景*/}
                {/*控制导航背景颜色，在这里加是有原因的,直接在navigationOptions控制背景色
                   会出现在透明与非透明交界处出现内容顶部偏移跳动,在这里加体验极佳*/}
                <View style={{zIndex:99,position:'absolute',top:0,left:0,right:0,height:Device.NavigationBarHeight+this.state.statusBarHeight,
                    backgroundColor:`rgba(255,255,255,${this.props.navigation.getParam('headerOpaque')?1:0})`}}/>

                {/*tabs吸顶*/}
                {
                    this.state.tabsBarFixed&&
                    <ShopTabs
                        style={{zIndex:999,height:TabsBarHeight,position:'absolute',left:0,top:this.state.statusBarHeight+Device.NavigationBarHeight,right:0}}
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
                        style={{flexDirection:'row',height:this.HorizontalScrollHeight}}
                        scrollEnabled={this.state.tabsScrollScrollEnabled}
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onMomentumScrollEnd={({nativeEvent:{contentOffset: { x, y },layoutMeasurement: { height, width }}})=>{
                            ///滚动动画结束，切换tabs


                            let index = parseInt(x/width+0.01) ; ///消除浮点误差
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
                {
                    /*工具栏*/
                    this.state.tabsIndex===0&&
                    <ShopTrolleyBar data={this.state.shopTrolleyData} style={{zIndex:1000,position:'absolute',left:0,bottom:0,height:55}}/>
                }
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


        ///更新状态
        this.setState((state,props)=>({
            shopTrolleyData:{
                total:state.shopTrolleyData.total-parseFloat(item.price),
                badge:state.shopTrolleyData.badge-1,
                shippingFee:parseFloat(state.sellerDetails.shippingFee),
                sendOutUp:parseFloat(state.sellerDetails.sendOutUp),
            },
            recommends:state.recommends
        }));



    }
    ///商家推荐-加点击
    _recommendsAddButtonOnPress(index){
        let item = this.state.recommends[index];

        if(!item.buyCount){
            item.buyCount=1;
        }else {
            item.buyCount++;
        }

        ///更新状态
        this.setState((state,props)=>({
            shopTrolleyData:{
                total:state.shopTrolleyData.total+parseFloat(item.price),
                badge:state.shopTrolleyData.badge+1,
                shippingFee:parseFloat(state.sellerDetails.shippingFee),
                sendOutUp:parseFloat(state.sellerDetails.sendOutUp),
            },
            recommends:state.recommends
        }));
    }
    /// food列表-减点击
    _foodListReduceButtonOnPress(index, section){

        let item = section.data[index];
        if(item.buyCount&&item.buyCount>0){
            item.buyCount-- ;
        }else {
            item.buyCount=0;
        }
        ///更新状态
        this.setState((state,props)=>({
            shopTrolleyData:{
                total:state.shopTrolleyData.total-parseFloat(item.price),
                badge:state.shopTrolleyData.badge-1,
                shippingFee:parseFloat(state.sellerDetails.shippingFee),
                sendOutUp:parseFloat(state.sellerDetails.sendOutUp),
            },
            foods:state.foods
        }));


    }
    ///food列表-加点击
    _foodListAddButtonOnPress(index, section){
        let item = section.data[index];
        if(!item.buyCount){
            item.buyCount=1;
        }else {
            item.buyCount++;
        }


        ///更新状态
        this.setState((state,props)=>({
            shopTrolleyData:{
                total:state.shopTrolleyData.total+parseFloat(item.price),
                badge:state.shopTrolleyData.badge+1,
                shippingFee:parseFloat(state.sellerDetails.shippingFee),
                sendOutUp:parseFloat(state.sellerDetails.sendOutUp),

            },
            foods:state.foods
        }));

    }


    ///tabs点击
    tabsPressed(index){
        ///更新状态
        this.setState({tabsIndex:index});
        //切换tab内容
        this.tabHorizontalScroll.scrollTo({x: index*Device.ScreenWidth, y: 0, animated: true});
    }
    ///主srcoll滑动监听
    mainOnScroll({ nativeEvent: { contentOffset: { x, y },contentSize: { height, width }}}){

        ///导航头部不透明
        let  headerOpaque = y>Device.NavigationBarHeight+this.state.statusBarHeight;

        this.props.navigation.setParams({
            headerOpaque:headerOpaque
        });

        let  distance =  height-Device.ScreenHeight-1;

        if (global.Device.OS==='android'){
            distance =  height-(Device.ScreenHeight -this.state.statusBarHeight)-1;
        }

        this.setState({
            statusBarStyle:headerOpaque?'dark-content':'light-content'
        });
        
        /// 有浮点小数误差用1补偿
        
        ///bool 量
        let  foodListScrollEnabled =  y>=distance;
        let  tabsBarFixed =  y>=distance-this.RecommendsHeight;
        console.log(this.state.statusBarHeight);
        console.log(distance+'----->'+y);
        ///主srcoll 滑到底部时 允许foodList滑动 反之不允许
        this.setState({foodListScrollEnabled:foodListScrollEnabled});
        ///tabs 吸顶固定
        this.setState({tabsBarFixed:tabsBarFixed});
        /// 主srcoll 滑到底部时 foodList 让滚动到顶部
        // foodListScrollEnabled&&this.foodList.scrollToLocation({animated: true,itemIndex:0,sectionIndex:0,viewOffset:0,viewPosition:0});

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
        ///初始数据  实际开发中json数据使用网络请求实际数据
        this.setState({
            sellerDetails:this.props.navigation.state.params,
            recommends:queryRecommends(),
            foods:queryFoods(),
            shopTrolleyData:{
                total:0,
                badge:0,
                shippingFee:parseFloat(this.props.navigation.getParam('shippingFee')),
                sendOutUp:0
            }

        });

        console.log('---->'+ Device.NavigationBarHeight);

    }
    ///移除订阅
    componentWillUnmount() {
        this.didFocusSubscription.remove();
        this.didBlurSubscription.remove();
    }
};