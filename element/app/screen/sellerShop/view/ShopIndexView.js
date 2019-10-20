import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class ShopIndexView extends React.Component {

    render() {
        if(this.props.sellerDetails)
            return (
                <View style={{backgroundColor:'#fff'}}>
                    {this.renderSellerNameRow()}
                    {this.renderTickestRow()}
                    {this.renderDiscountActivityRow()}
                    <Text style={{color:'#000',paddingRight:15,paddingLeft:15,fontSize:12,fontWeight:'200'}}>
                        {this.props.sellerDetails.notice}
                    </Text>
                </View>
            );
        else return(<View/>);
    }

    ///商家销售情况
    renderSellerNameRow() {
        return (
            <View>
                {/*商家名*/}
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingTop:15}}>
                    <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',color:'#333'}}>{this.props.sellerDetails.sellerName}</Text>
                    <Text style={{fontSize:15,fontWeight:'500',textAlign:'center',color:'#333'}}>>></Text>
                </View>
                {/*销量*/}
                <Text style={{fontSize:14,color:'#666',textAlign:'center',height:30,lineHeight:30}}>
                    {`评价${this.props.sellerDetails.score}  月售${this.props.sellerDetails.monthSale}单   商家配送约${this.props.sellerDetails.sendTime}分钟`}
                </Text>
            </View>)
    }
    ///领券
    renderTickestRow () {
        return(
            <View style={{justifyContent:'center',flexDirection:'row',flexWrap:'wrap'}}>
                {
                    this.props.sellerDetails.tickes.map((item,index)=>
                        <View key={index.toString()} style={{flexDirection:'row',alignItems:'center',width:'40%',marginLeft:10,marginRight:10,marginBottom:5,paddingTop:5,paddingBottom:5,backgroundColor:item.type===0?'rgb(254,226,101)':'rgb(255,241,241)'}}>
                            <View style={{width:'100%',paddingRight:40,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                {/*面值*/}
                                <Text style={{color:'rgb(70,53,19)',fontSize:12}}>¥</Text>
                                <Text style={{color:'rgb(70,53,19)',fontSize:17,fontWeight:'600'}}>{item.money}</Text>
                                {/*使用条件*/}
                                <Text style={{color:'rgb(70,53,19)',fontSize:13,paddingLeft:5}}>{item.condition}</Text>

                            </View>
                            {/*领取*/}
                            <Text style={{width:40,textAlign:'center',color:'rgb(70,53,19)',fontSize:13,position:'absolute',right:0}}>领取</Text>
                            {/*两个半圆*/}
                            <View style={{backgroundColor:'#fff',borderRadius:3,width:6,height:6,position:'absolute',top:-3,right:40,}}/>
                            <View style={{backgroundColor:'#fff',borderRadius:3,width:6,height:6,position:'absolute',bottom:-3,right:40,}}/>
                        </View>
                    )
                }
            </View>)
    }
    ///优惠活动
    renderDiscountActivityRow (){
        return(
            <View style={{paddingTop:8,paddingBottom:10}}>
                {/**优惠活动*/}
                <View style={{paddingLeft:15,justifyContent:'flex-start',flexDirection:'row',flexWrap:'wrap',paddingRight:80}}>
                    {
                        this.props.sellerDetails.activitys.map((item,index)=>
                            ///展示最多3个
                           index<3&&<Text key={index.toString()}
                                  style={{color:'red',fontSize:12,padding:2,borderWidth:1,borderColor:'red',
                                      marginRight:5,marginBottom:5,borderRadius:5}}>
                                {item.content}
                            </Text>
                        )
                    }
                </View>
                {/**优惠活动详细*/}
                <TouchableOpacity style={{position:'absolute',right:15,top:10,flexDirection:'row',alignItems:'center',paddingBottom:15}}
                                  onPress={()=>{console.log('点击')}}
                >
                    <Text style={{fontSize:12,color:'#666'}}>{this.props.sellerDetails.activitys.length + '个优惠'}</Text>
                    <Image style={{width:9,height:9,marginLeft:2}} source={require('../../../../res/icons/ic-dropdown-dark.png')}/>
                </TouchableOpacity>

            </View>
        );
    }


}