import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import  MineListFooterView from './view/MineFooterView'
import  MineListHeaderView from './view/MineHeaderView'
import  MineListItemView from './view/MineListItemView'

export  default  class MineScreen extends React.Component {
    static navigationOptions = {
        title:'我的'
    };
    constructor(props){
        super(props);
        this.state = {
            user:null,
            dataSource:[
                {title:'我的收藏',details:'',icon:require('../../../res/icons/mine/ic-mine-sc.png'),next:''},
                {title:'我的客服',details:'',icon:require('../../../res/icons/mine/ic-mine-kf.png'),next:''},
                {title:'推荐有奖',details:'得15元',icon:require('../../../res/icons/mine/ic-mine-tjyj.png'),next:''},
                {title:'商务合作',details:'',icon:require('../../../res/icons/mine/ic-mine-tjyj.png'),next:''},
                {title:'办卡有礼',details:'',icon:require('../../../res/icons/mine/ic-mine-bkyl.png'),next:''},
                {title:'设置',   details:'',icon:require('../../../res/icons/mine/ic-mine-sz.png'),next:'Setting'},
            ],
        };
    };
    render() {
        return (
            <View style={listViewStyles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <MineListItemView model={item} onPress={()=>this.pressItem(item)}/>}
                    keyExtractor={(item, index)=>index+''}MineListHeaderView
                    ListHeaderComponent={<MineListHeaderView
                        userName={this.state.user?this.state.user.userName:'登录/注册'}
                        usePhone={this.state.user?this.state.user.userAccount:'登录后享受更多特权'}
                        onUserInfoPress={()=>{this.onUserInfoPress()}}
                        redPcketItemPress={(item,index)=>{this.redPcketItemPress(item,index)}}
                    />}
                    ListFooterComponent={<MineListFooterView/>}

                />

            </View>
        );
    }


    componentDidMount() {

        this.loaduser();
    }


    //头部用户信息栏点击
    onUserInfoPress() {
        if (this.state.user){

            this.props.navigation.navigate('Setting');

        }else {
            this.props.navigation.navigate('Login');
        }
    }

    //红包/津贴/钱包点击
    redPcketItemPress(item,index){
        console.log(item);
        console.log(index);
    }
    //加载用户登录信息
    loaduser() {
        storage.load({
            key: 'user',
            id:'current',
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            console.log(ret);
            this.setState({
                user:ret
            });

        }).catch(err => {
            ///登录数据过期或者没找到数据
            rootNavigation.navigate('Login');
        });

    }


    pressItem(item){
        console.log(item);
        if (item.next){
            this.props.navigation.push(item.next);
        }

    }
}

const listViewStyles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'rgba(245,245,245,1)',
    }
});