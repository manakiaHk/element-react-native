import React from 'react';
import {
    View,
    Text,
    Image,
    SectionList,
    FlatList,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import  ShopRecommendItem from './ShopRecommendItem'
import  ShopFoodListItem from './ShopFoodListItem'

export  default class TabFoodsView extends React.Component {

    constructor(props) {
        super(props);

        this.setFoodListRef = element => {
            this.foodList = element;
            this.props.forwardFoodListRef&&this.props.forwardFoodListRef(element);
        };
    }

    render() {

        let RecommendHeight = this.props.RecommendsHeight;
        let TrolleyBarHeight  = 55;
        let ListHeight =  this.props.ListHeight - TrolleyBarHeight;
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
    ///商家推荐
    renderRecommends(RecommendHeight) {
        if (this.props.recommends.length>0){

            let ItemEdge = 10;
            let ItemMargin = 5;
            let Cols = 3;
            let ItemWidth = (Device.ScreenWidth-2*ItemEdge-(Cols-1)*ItemMargin)/Cols;
            let TitleHeight = 30;

            return(
                <View style={{height:RecommendHeight,backgroundColor:'#fff',paddingBottom:5,paddingTop:5}}>
                    <Text style={{color:'#111',fontSize:14,fontWeight:'500',paddingLeft:15,height:TitleHeight,lineHeight:TitleHeight}}>商家推荐</Text>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        nestedScrollEnabled={true}
                        style={{flexDirection:'row',height:RecommendHeight-TitleHeight}}>
                        {
                            this.props.recommends.map((item,index)=>
                                <ShopRecommendItem
                                    model={item}
                                    key={index.toString()}
                                    style={{width:ItemWidth,height:'100%',borderRadius:5,overflow:'hidden',
                                        marginRight:index===this.props.recommends.length-1?ItemEdge:ItemMargin,
                                        marginLeft:index===0?ItemEdge:0}}
                                    reduceButtonOnPress={()=>{

                                        this.props.recommendsReduceButtonOnPress&&this.props.recommendsReduceButtonOnPress(index)
                                    }}
                                    addButtonOnPress={()=>{
                                        this.props.recommendsAddButtonOnPress&&this.props.recommendsAddButtonOnPress(index)
                                    }}
                                />
                            )
                        }
                    </ScrollView>
                </View>
            )
        }else return <View/>

    }
    ///左菜单
    renderMenuList(ListHeight){
        if (this.props.foods&&this.props.foods.length>0){

            return(
                <FlatList
                    style={{width:100,backgroundColor:'#eee',height:ListHeight}}
                    data={this.props.foods}
                    renderItem={({item,index,separators}) => <TouchableHighlight
                        underlayColor={'#fff'}
                        onPress={()=>{this.menusOnPress(index)}}
                        style={{backgroundColor:'#eee',justifyContent:'center',alignItems:'center', paddingLeft:15,paddingRight:5,height:40}}>
                        <Text style={{fontSize:12,color:'#333',fontWeight:'500'}}>{item.category.name}</Text>
                    </TouchableHighlight>}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    keyExtractor={(item, index)=>index+''}
                    ItemSeparatorComponent = {()=>(<View style={{height:1,backgroundColor:'#fff'}}>
                        <View style={{height:0.5,backgroundColor:'#eee'}}/>
                    </View>)}
                     ListFooterComponent={({section}) => <View style={{backgroundColor:'#eee',height:15}}/>}
                />
            );

        }else {
            return(<View/>)
        }


    }
    ///菜单点击
    menusOnPress(index){

      this.foodList.scrollToLocation
      && this.foodList.scrollToLocation({animated: true,itemIndex:0,sectionIndex:index,viewOffset:0,viewPosition:0});
    }
    //右侧列表
    renderFoodsList(ListHeight){

        return(
            <SectionList
                ref={this.setFoodListRef}
                style={{width:'100%',backgroundColor:'#fff',height:ListHeight}}
                sections={this.props.foods}
                keyExtractor={(item, index)=>index+''}
                scrollEnabled={this.props.foodListScrollEnabled}
                nestedScrollEnabled={true}
                onScroll={(e)=>{
                    this.props.foodListOnScroll && this.props.foodListOnScroll(e);
                    ///析构
                    let {nativeEvent:{contentOffset: { x, y }}} =  e;
                    ///滚到顶部
                    y<0&&this.foodList.scrollToLocation&&this.foodList.scrollToLocation({animated: false,itemIndex:0,sectionIndex:0,viewOffset:0,viewPosition:0});

                }}
                renderSectionHeader={({section:{category}}) =>(
                    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'rgb(254,254,254)',paddingLeft:10,height:40}}>
                        <Text style={{fontSize:12,fontWeight:'500',color:'#333'}}>{category.name}</Text>
                        <Text style={{fontSize:11,fontWeight:'500',color:'#666',marginLeft:5}}>{category.details}</Text>
                    </View>
                )}
                renderItem={({ item, index, section,separators }) => {

                    return <ShopFoodListItem model={item}
                                             reduceButtonOnPress={()=>{
                                                 this.props.foodListReduceButtonOnPress&&this.props.foodListReduceButtonOnPress(index, section)
                                             }}
                                             addButtonOnPress={()=>{
                                                 this.props.foodListAddButtonOnPress&&this.props.foodListAddButtonOnPress(index, section)
                                             }}/>
                }}
                ///iOS可以设置contentInset，但是android 没有这个api,为了兼顾，就设置一个footer
                ListFooterComponent={({section}) => <View style={{backgroundColor:'#fff',height:15}}/>}
            />
        );
    }
}