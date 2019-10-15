
import React from 'react';
import {
    View,
    StatusBar,
    FlatList,
    RefreshControl,
} from 'react-native';

import DiscoverSectionRowView from './view/DiscoverSectionRowView';
import queryRecommend from '../../jsonDemo/RecommendJSON'
import FooterRefreshControl,{FooterRefreshControlState} from "../../components/RefreshFooterControl";
import DiscoverRecommendItem from './view/DiscoverRecommendItem';
export  default class RecomendScreen extends React.Component {
    static navigationOptions = (navigation)=>{
        return {
            title:'为你推荐'
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            //
            headerRefreshing:false,
            headerRefreshTitle:'下拉刷新',
            footerRefreshState:FooterRefreshControlState.EndRefreshing,
            dataSource:[],
            pageIndex : 0,
            pageSize : 8,
        };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor={Colors.ThemeColor} barStyle="light-content" />
                <FlatList
                    style={{flex:1,backgroundColor:'#fff'}}
                    contentInset = {{top: 10, left: 0, bottom: 10, right: 0}}
                    sections={this.state.sections}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.dataSource}
                    numColumns={2}
                    renderItem={({ item, index,separators}) => {
                        return <View style={{paddingLeft:10,paddingRight:index%2===0?0:10,width:'50%'}}>
                                <DiscoverRecommendItem
                                    width={'100%'}
                                    onPress={()=>{this.itemPress(item,index)}}
                                    model={item}/>
                                </View>
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.headerRefreshing}
                            onRefresh={()=>this.onRefreshData()}
                            title={this.state.headerRefreshTitle}
                        />
                    }
                    onEndReached={(info)=>{this.onEndReached(info)}}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={<FooterRefreshControl
                        state={this.state.footerRefreshState}
                    />}
                />
            </View>
        );
    }
    itemPress(item,index){
        console.log('index:' + index +' ' +item.title);
        this.props.navigation.push('DiscoverItemDetails',item);
    }

    componentDidMount() {
        this.onRefreshData();
    }


    onRefreshData() {

        this.setState({
            headerRefreshing : true,
            footerRefreshState:FooterRefreshControlState.EndRefreshing,
            headerRefreshTitle:'正在刷新...',
            pageIndex:0,
        });

        ///模拟网络延迟加载
        setTimeout(()=>{

            let result = queryRecommend(this.state.pageIndex,this.state.pageSize);
            this.setState((state, props) => ({
                dataSource:result,
                headerRefreshing :false,
                headerRefreshTitle:'下拉刷新',
                pageIndex:state.pageIndex+1,
            }));

        },2000);

    }
    onEndReached() {

        this.setState((state, props) => ({
            footerRefreshState :FooterRefreshControlState.Refreshing,
        }));
        this.loadMore();
    }

    loadMore() {
        ///模拟网络延迟加载
        setTimeout(()=>{
            let result = queryRecommend(this.state.pageIndex,this.state.pageSize);
            if(result.length>0){
                this.setState((state, props) => ({
                    dataSource: state.dataSource.concat(result),
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
}