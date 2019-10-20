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
import {queryRecommends,queryFoods} from '../../jsonDemo/SellerFoodsJSON'
export  default class ShopScreen extends React.Component{
    constructor(props) {
        super(props);
        this.ref_tabHorizontalScroll = React.createRef();
        this.state = {
            statusBarHeight: 20,
            statusBarStyle: 'light-content',
            sellerDetails: null,
            tabsIndex : 0,
            foodListScrollEnabled:false,
            ///数据源
            recommends:[],
            foods:[]


        }
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

        return (
            <View style={styles.container}>
                {/*加一个导航栏背景*/}
                {/*控制导航背景颜色，在这里加是有原因的,直接在navigationOptions控制背景色
                   会出现在透明与非透明交界处出现内容顶部偏移跳动,在这里加体验极佳*/}
                <View style={{zIndex:99,position:'absolute',top:0,left:0,right:0,height:global.NavigationHeight+this.state.statusBarHeight,
                    backgroundColor:`rgba(255,255,255,${this.props.navigation.getParam('headerAlpha')})`}}/>
                {/*状态栏*/}
                <StatusBar barStyle={this.state.statusBarStyle} />
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
                    <ShopTabs
                        items={['点餐','评价','商家']}
                        currentIndex={this.state.tabsIndex}
                        tabsPressed={(index)=>{this.tabsPressed(index)}}
                    />

                    {/*ShopTabs下的内容:水平-scroll*/}
                    <ScrollView
                        ref={this.ref_tabHorizontalScroll}
                        style={{flexDirection:'row',height:Device.ScreenHeight-NavigationHeight-this.state.statusBarHeight-35}}
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onMomentumScrollEnd={({nativeEvent:{contentOffset: { x, y },layoutMeasurement: { height, width }}})=>{
                            ///滚动动画结束，切换tabs
                            this.setState({tabsIndex:x/width})
                        }}
                    >
                        {/*点餐*/}
                        <TabFoodsView
                            style={{width:Device.ScreenWidth}}
                            foodListScrollEnabled={this.state.foodListScrollEnabled}
                            foodListOnScroll={({nativeEvent:{contentOffset: { x, y }}})=>{
                                ///滑到顶部禁止滚动
                                this.setState({foodListScrollEnabled:y>0});
                            }}
                            recommends={this.state.recommends}
                        >

                        </TabFoodsView>
                        {/*评价*/}
                        <TabEvaluateView style={{ backgroundColor:'#761',width:Device.ScreenWidth}}>

                        </TabEvaluateView>
                        {/*商家*/}
                        <TabSellerInfoView style={{ backgroundColor:'#877',width:Device.ScreenWidth}}>

                        </TabSellerInfoView>
                    </ScrollView>


                </ScrollView>
            </View>
        );
    }
    ///tabs点击
    tabsPressed(index){
        this.setState({tabsIndex:index});
        //切换内容
        this.ref_tabHorizontalScroll.current.scrollTo({x: index*Device.ScreenWidth, y: 0, animated: true});
    }
    ///主srcoll滑动监听
    mainOnScroll({ nativeEvent: { contentOffset: { x, y },contentSize: { height, width }}}){
        this.props.navigation.setParams({
            headerAlpha:y>global.NavigationHeight+this.state.statusBarHeight ?1:0,
        });

        ///主srcoll 滑到底部时 允许foodList滑动 反之不允许
        this.setState({foodListScrollEnabled:y>=height-Device.ScreenHeight})
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

const  styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.ScreenBackgroundColor
    },



});