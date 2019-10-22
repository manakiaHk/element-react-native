import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

export  default class ShopTrolleyBar extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (

            <View style={[{flexDirection:'row',alignItems:'center',backgroundColor:'#3D3D3F',height:44},this.props.style]}>
                <View style={{backgroundColor:Colors.ThemeColor,zIndex:1000, position:'absolute',top:-15,left:20,height:70,
                    width:70,borderWidth:10,borderColor:'#3b3b3b',borderRadius:40}}>
                    {
                        /*角标*/
                        this.props.data&&this.props.data.badge>0&&
                        <Text style={{position:'absolute',top:-10,right:-5,height:18,lineHeight:18,paddingLeft:6,
                        paddingRight:6,textAlign:'center',color:'#fff',fontSize:14,
                        borderRadius:9,overflow:'hidden',backgroundColor:'red'}}>{this.props.data.badge}</Text>
                    }
                    {/*购物车图片*/}
                    <Image style={{width:30,height:30,position:'absolute',left:'50%',top:'50%',marginLeft:-15,marginTop:-15}}
                           source={require(`../../../../res/icons/ic-gouwuche-normall.png`)}
                    />
                </View>
                <View style={{width:'100%',height:'100%',paddingLeft:100,paddingRight:120,paddingTop:5,justifyContent:'center',paddingBottom:10}}>
                    {/**合计*/}
                    <Text style={{fontSize:16,color:this.props.data&&this.props.data.total>0?'#fff':'#bbb'}}>
                        {this.props.data&&this.props.data.total&&this.props.data.total>0?`¥${this.props.data.total}`:'未选购商品'}
                    </Text>
                    {
                        this.props.data&&this.props.data.total>0&&
                            <Text style={{fontSize:12,color:'#bbb',marginTop:3}}>{this.props.data&&this.props.data.shippingFee&&this.props.data.shippingFee>0?`另需配送费${this.props.data.shippingFee}`:'免费配送'}</Text>

                    }

                </View>
                <TouchableOpacity onPress={()=>{this.props.goPay&&this.props.goPay()}}
                                  style={{zIndex:1001, position:'absolute',alignItems:'center',justifyContent:'center',
                                      right:0,bottom:0,height:'100%',width:120,backgroundColor:this.props.data&&this.props.data.total>0?'#2CA853':'#333'}}>
                    <Text style={{color:this.props.data&&this.props.data.total>0?'#fff':'#bbb',fontSize:16,fontWeight:'500'}}>{this.props.data&&this.props.data.total>0?'去结算':`${this.props.data.sendOutUp}元起送`}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}