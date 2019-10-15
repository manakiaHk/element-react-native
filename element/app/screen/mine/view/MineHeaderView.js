

import React from 'react';
import {
    View,
    Text,

    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


export  default class MineHeaderView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redPcket:[
                {title:'红包',count:'20',subText:'个未使用'},
                {title:'津贴',count:'20',subText:'个可用'},
                {title:'钱包',count:'',subText:'金币、借钱、购物'},
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.props.onUserInfoPress()}} activeOpacity={0.9}>
                <View style={styles.user}>
                    <Image style={styles.userImage} source={require(`../../../../res/icons/ic-ele-user-image-default.png`)}/>
                    <View style={styles.userlogin}>
                        <Text  style={styles.userName}>{this.props.userName}</Text>
                        <Text  style={styles.userPhone}>{this.props.usePhone}</Text>
                    </View>
                    <Image style={styles.nextIcon} source={require(`../../../../res/icons/ic-next-light.png`)}/>
                </View>
                </TouchableOpacity>

                <View style={styles.redPcket}>
                    {
                        this.state.redPcket.map((item,index) =>(
                            <View style={styles.redPcketItem}
                                  key={item.title.toString()}>
                                <TouchableOpacity activeOpacity={0.7} onPress={()=>{this.props.redPcketItemPress(item,index)}}>
                                    <View style={styles.redPcketItemContent}>
                                        <Text  style={styles.redPcketItemTitle}>{item.title}</Text>
                                        <View style={styles.redPcketItemSub}>
                                            <Text  style={styles.redPcketItemCount}>{item.count}</Text>
                                            <Text  style={styles.redPcketItemSubText}>{item.subText}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>))
                    }
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    user:{
        height:100,
        backgroundColor:Colors.ThemeColor,
        flexDirection:'row',
        alignItems:'center'
    },

    userImage:{
        backgroundColor:'#012',
        height:60,
        width:60,
        borderRadius:30,
        marginLeft:15,

    },

    userlogin:{
        marginLeft:15,
    },
    nextIcon:{
        position:'absolute',
        right:5,
        width:20,
        height:20,
    },
    userName:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'

    },
    userPhone:{
        color:'#fff',
        fontSize:13,
    },



    redPcket:{
        backgroundColor:'rgba(245,245,245,1)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10

    },
    redPcketItem:{
        height:60,
        width:'31%',
        borderRadius:7,
        backgroundColor:'#fff',
        padding:10,
        justifyContent:'center',

    },
    redPcketItemTitle:{
        color:'#333',
        fontSize:15,
        fontWeight:'bold',
    },
    redPcketItemSub:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
    },
    redPcketItemCount:{
        fontSize:15,
        color:'#c02'
    },
    redPcketItemSubText:{
        fontSize:12,
        marginLeft:3,

    }

});