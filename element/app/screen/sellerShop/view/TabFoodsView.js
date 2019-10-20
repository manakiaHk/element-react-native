import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import  ShopRecommendItem from './ShopRecommendItem'

export  default class TabFoodsView extends React.Component {
    constructor(props) {
        super(props);
        this.ref_foodList = React.createRef();
        this.state = {
            statusBarHeight: 20,
            menus: ['买过','收藏门店超值专享','热销','优惠','美味盖饭','凑单神器','千万销量','团体订餐','满减专区','单品售卖'],
            foods:['','','','','','','','','','','','','','','','','','','',''],
        }
    }
    render() {

        let RecommendHeight = this.props.recommends&&this.props.recommends.length>0?160:0;
        let ListHeight =  Device.ScreenHeight-RecommendHeight-NavigationHeight-this.state.statusBarHeight-35;
        console.log(this.state.statusBarHeight);
        return (
            <View style={[this.props.style]}>
                {/*推荐s*/}
                {this.renderRecommends(RecommendHeight)}
                {/*选购区*/}
                <View style={{flexDirection:'row'}}>
                    {this.renderMenuList(ListHeight)}
                    {this.renderFoodsList(ListHeight)}
                </View>
            </View>
        );
    }
    renderRecommends(RecommendHeight) {
        if (this.props.recommends.length>0){

            let ItemEdge = 10;
            let ItemMargin = 5;
            let Cols = 3;
            let ItemWidth = (Device.ScreenWidth-2*ItemEdge-(Cols-1)*ItemMargin)/Cols;
            let TitleHeight = 30;
            return(
                <View style={{height:RecommendHeight,backgroundColor:'#fff'}}>
                    <Text style={{color:'#111',fontSize:14,fontWeight:'500',paddingLeft:15,height:TitleHeight,lineHeight:TitleHeight}}>商家推荐</Text>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{flexDirection:'row',height:RecommendHeight-TitleHeight}}
                    >
                        {
                            this.props.recommends.map((item,index)=>
                                <ShopRecommendItem
                                    model={item}
                                    key={index.toString()}
                                    style={{width:ItemWidth,height:'100%',borderRadius:5,overflow:'hidden',
                                        marginRight:index===this.props.recommends.length-1?ItemEdge:ItemMargin,
                                        marginLeft:index===0?ItemEdge:0}}
                                />
                            )
                        }
                    </ScrollView>
                </View>
            )
        }else return <View/>

    }
    renderMenuList(ListHeight){
        return(
            <FlatList
                style={{width:100,backgroundColor:'#eee',height:ListHeight}}
                data={this.state.menus}
                renderItem={({item,index}) => <View style={{backgroundColor:'#eee',justifyContent:'center',alignItems:'center',
                    paddingLeft:15,paddingRight:5,height:40}}>
                    <Text style={{fontSize:13,color:'#333'}}>{item}</Text>
                </View>}
                keyExtractor={(item, index)=>index+''}
                ItemSeparatorComponent = {()=>(<View style={{height:1,backgroundColor:'#fff'}}>
                    <View style={{height:0.5,backgroundColor:'#eee'}}/>
                </View>)}
            />
        );

    }
    renderFoodsList(ListHeight){
        return(
            <FlatList
                ref={this.ref_foodList}
                style={{width:'100%',backgroundColor:'#fff',height:ListHeight}}
                data={this.state.foods}
                renderItem={({item,index}) => <View style={{backgroundColor:'#fff',height:100}}/>}
                keyExtractor={(item, index)=>index+''}
                ItemSeparatorComponent = {()=>(<View style={{height:1,backgroundColor:'#fff'}}><View style={{height:1,backgroundColor:'#eee'}}/></View>)}
                scrollEnabled={this.props.foodListScrollEnabled}
                onScroll={(e)=>{
                    this.props.foodListOnScroll && this.props.foodListOnScroll(e);
                    ///析构
                    let {nativeEvent:{contentOffset: { x, y }}} =  e;
                    ///滚到顶部
                    y<0&&this.ref_foodList.current.scrollToIndex&&this.ref_foodList.current.scrollToIndex({animated: false,index:0,viewPosition:0});

                }}
            />
        );
    }


    componentDidMount() {
        ///获取状态栏高度
        global.statusBarManager.statusHeight((height)=>{
            this.setState({
                statusBarHeight:height
            });
        });
    }
}