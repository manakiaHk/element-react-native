import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class ShopFoodListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[{flexDirection:'row',alignItems:'center',paddingBottom:5,paddingTop:5,paddingLeft:10,paddingRight:10,backgroundColor:'#fff',overflow:'hidden'},this.props.style]}>
                {/*商品图片*/}
                <Image style={{width:80,height:70,borderRadius:5}} source={{uri:this.props.model.image}}/>

                {/*图片右侧区域*/}
                <View style={{paddingRight:80,paddingLeft:15,height:'100%',width:'100%'}}>
                    {/*商品名*/}
                    <Text style={{fontSize:15,color:'#000',height:15,fontWeight:'500',lineHeight:15}}>{this.props.model.title}</Text>
                    {/**商品说明*/}
                    <Text style={{fontSize:11,color:'#666',height:this.props.model.subTitle.length>0?15:0,lineHeight:15,marginTop:2}}>{this.props.model.subTitle}</Text>
                    {/**销售情况*/}
                    <Text style={{fontSize:11,color:'#666',marginTop:2}}>
                        {`月销${this.props.model.monthSale}，好评率${this.props.model.praise}`}
                    </Text>
                    {/**价格和按钮*/}
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',position:'absolute',bottom:0,left:10,width:'100%'}}>
                        {/**价格*/}
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:13,color:'rgba(251,73,8,1)'}}>¥</Text>
                            <Text style={{fontSize:17,color:'rgba(251,73,8,1)',fontWeight:'500'}}>{this.props.model.price}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                            {
                                /**减按钮*/
                                (this.props.model.buyCount&&this.props.model.buyCount>0)?
                                <TouchableOpacity onPress={()=>{this.props.reduceButtonOnPress&&this.props.reduceButtonOnPress()}}>
                                    <Text style={{backgroundColor:'#fff',textAlign:'center',
                                        fontWeight:'500',color:Colors.ThemeColor,fontSize:24,borderRadius:10.5,borderColor:Colors.ThemeColor,borderWidth:2,overflow:'hidden',
                                        height:21,width:21,lineHeight:21,}}>-</Text>
                                </TouchableOpacity>:<View/>
                            }
                            {
                                /**购买数量*/
                                (this.props.model.buyCount&&this.props.model.buyCount>0)?
                                <Text style={{color:'#333',fontSize:13,fontWeight:'500',marginLeft:5,marginRight:5}}>
                                    {this.props.model.buyCount}
                                </Text>:<View/>
                            }

                            {/**加按钮*/}
                            <TouchableOpacity onPress={()=>{this.props.addButtonOnPress&&this.props.addButtonOnPress()}}>
                                <Text style={{backgroundColor:Colors.ThemeColor,textAlign:'center',
                                    fontWeight:'500',color:'#fff',fontSize:20,borderRadius:10,overflow:'hidden',
                                    height:20,width:20,lineHeight:20}}>+</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        );
    }

}