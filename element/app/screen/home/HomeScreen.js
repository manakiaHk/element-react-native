import React from 'react';
import {
    View,
    Text,
    RefreshControl,
    StatusBar,
    FlatList,
} from 'react-native';

import  CategoryView from './view/HomeCategoryView'
import  HomeSearchHeader from './view/HomeSearchHeader'
import  TitleView from './view/HomeTitleView'
import  SearchBar from  '../../../app/components/SearchBar'
import  HomeBannerView from './view/HomeBannerView'
import  HomeVIPItemView from './view/HomeVIPItemView'
import  HomeSellersFilterBar  from './view/HomeSellersFilterBar'
import  HomeSellerItemView  from './view/HomeSellerItemView'
import  querySellers from '../../jsonDemo/SellersJSON'
import FooterRefreshControl,{FooterRefreshControlState} from "../../components/RefreshFooterControl";


export  default class HomeScreen extends React.Component{
    static navigationOptions =  ({ navigation }) => {
        return {
            header:null
        }
    };
    constructor(props){
        super(props);
        this.state = {
            user:null,
            searchBarFixed:false,
            sellersFilterBarFixed:false,
            statusBarHeight:0,
            statusBarStyle:'light-content',

            //
            headerRefreshing:false,
            headerRefreshTitle:'下拉刷新',
            footerRefreshState:FooterRefreshControlState.EndRefreshing,
            dataSource:[],
            pageIndex : 0,
            pageSize : 4,

            category:[
                {title:'美食',     Id:'09fj-f30e-seew-9ee4',icon:'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg'},
                {title:'大牌惠吃', Id:'0299-rdw2-e232-h63n',icon:'https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg'},
                {title:'商超便利', Id:'02cm-mdjj-ree2-msm3',icon:'https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg'},
                {title:'水果',    Id:'02kf-sfqq-02n0-8ene',icon:'https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg'},
                {title:'医药健康', Id:'s030-ree0-eem0-03ne',icon:'https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg'},
                {title:'浪漫鲜花', Id:'0294-3o20-9d9e-93w0',icon:'https://cube.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg'},
                {title:'跑腿代购', Id:'3d32-5g32-02mn-72k2',icon:'https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg'},
                {title:'汉堡披萨', Id:'4dw7-3d3w-02m3-24d2',icon:'https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg'},
                {title:'厨房生鲜', Id:'7rf4-d35d-0ll3-89sg',icon:'https://cube.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg'},
                {title:'甜品饮料', Id:'0dj2-0303-0sne-02d3',icon:'https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg'},
            ],
            sellers:[],
        };
    };
    render () {
        return (
            <View style={{flex:1}}>
                <StatusBar barStyle={this.state.statusBarStyle} />
                {
                    this.state.searchBarFixed&&(
                        <View style={{backgroundColor:Colors.ThemeColor,position:'absolute',zIndex:1000,left:0,right:0,top:0}}>
                            <View style={{height:this.state.statusBarHeight}}/>
                            <View style={{marginBottom:10,paddingTop:5}}>
                                <SearchBar/>
                            </View>
                        </View>
                    )
                }
                {
                    this.state.sellersFilterBarFixed&&(
                        <View style={{position:'absolute',zIndex:1000,left:0,right:0,top:this.state.statusBarHeight +40+10}}>
                            <HomeSellersFilterBar/>
                        </View>)
                }
                <FlatList
                    style={{flex:1}}
                    onScroll={(event)=>this.onScroll(event)}
                    ListHeaderComponent={<View>
                        <HomeSearchHeader location={'天府大道南二段天府新谷'} contentHidden={this.state.searchBarFixed}/>
                        <CategoryView data={this.state.category} categoryItemPress={(item,index)=>this.categoryItemPress(item,index)}/>
                        <HomeBannerView onPromptlyBuy={()=>{this.bannerPromptlyBuyClicked()}}/>
                        <HomeVIPItemView/>
                        <TitleView title={'推荐商家'}/>
                        <HomeSellersFilterBar contentHidden={this.state.sellersFilterBarFixed}/>
                    </View>}
                    ItemSeparatorComponent = {()=>(<View style={{height:1,backgroundColor:'#fff'}}><View style={{height:0.5,backgroundColor:'#aaa'}}/></View>)}

                    data={this.state.sellers}
                    renderItem={({item,index}) => <HomeSellerItemView model={item} onPress={()=>this.listOnPressItem(index)}/>}
                    keyExtractor={(item, index)=>index+''}

                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.headerRefreshing}
                            onRefresh={()=>this.listRefreshData()}
                            title={this.state.headerRefreshTitle}
                        />
                     }
                    onEndReached={(info)=>{this.listOnEndReached(info)}}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={<FooterRefreshControl
                        state={this.state.footerRefreshState}
                    />}
                >
                </FlatList>
            </View>

        );

    }
    categoryItemPress(item,index) {

        this.props.navigation.push('HomeCategoryDetails',this.state.category[index])

    }
    componentDidMount() {

        ///获取转态栏高度
        global.statusBarManager.statusHeight((height)=>{
            this.setState({
                statusBarHeight:height
            });
        });
        this.didFocusSubscription = this.props.navigation.addListener(
            'didFocus', ()=>{
                this.setState({
                    statusBarStyle:'light-content'
                });
            }
        );
        this.didBlurSubscription = this.props.navigation.addListener(
            'didBlur', ()=>{
                this.setState({
                    statusBarStyle:'dark-content'
                });
            }
        );

        this.listRefreshData()
    }
    componentWillUnmount() {
        this.didFocusSubscription.remove();
        this.didBlurSubscription.remove();
    }

    onScroll({ nativeEvent: { contentOffset: { x, y }} }){

        console.log(y);
        this.setState({
            searchBarFixed:y>30
        });
        this.setState({
            sellersFilterBarFixed:y>= this.state.statusBarHeight+390
        });
    }

    bannerPromptlyBuyClicked(){
        console.log('=>>立即购买');

    }

    listOnPressItem(index){
        // console.log(this.state.sellers[index]);
        this.props.navigation.push('Shop', this.state.sellers[index]);

    }
    listOnEndReached (info){

        this.setState((state, props) => ({
            footerRefreshState :FooterRefreshControlState.Refreshing,
        }));

        this.listLoadMore();
    }

    listRefreshData() {

        this.setState({
            headerRefreshing : true,
            footerRefreshState:FooterRefreshControlState.EndRefreshing,
            headerRefreshTitle:'正在刷新...',
            pageIndex:0,
        });

        ///模拟网络延迟加载
        setTimeout(()=>{

            let result = querySellers(this.state.pageIndex,this.state.pageSize);
            this.setState((state, props) => ({
                sellers:result,
                headerRefreshing :false,
                headerRefreshTitle:'下拉刷新',
                pageIndex:state.pageIndex+1,
            }));

        },2000);

    }

    listLoadMore() {
        ///模拟网络延迟加载
        setTimeout(()=>{

            let result = querySellers(this.state.pageIndex,this.state.pageSize);
            if(result.length>0){
                this.setState((state, props) => ({
                    sellers: state.sellers.concat(result),
                    footerRefreshState :FooterRefreshControlState.EndRefreshing,
                    pageIndex:state.pageIndex+1,
                }));
            }else {
                this.setState((state, props) => ({
                    footerRefreshState :FooterRefreshControlState.NoMoreData,
                }));
            }
        },2000);


    }
};