import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class DiscoverRecommendItem extends React.Component {
    render() {
        return (
                <TouchableOpacity onPress={()=>{this.props.onPress()}}
                                  style={{justifyContent:'center',alignItems:'flex-start',backgroundColor:'#fff',width:this.props.width,marginBottom:10}}>
                    <View style={{width:'100%',height:200}}>
                        <Image style={{width:'100%',height:'100%',backgroundColor:'#eee'}} source={{uri:this.props.model.image}} />
                        <Text style={{position:'absolute',left:0,bottom:0,right:0,height:30,textAlign:'center',
                            lineHeight:30,color:'#fff',fontSize:13,backgroundColor:'rgba(0,0,0,0.5)'}}>{this.props.model.recommendWay}</Text>
                    </View>
                    <Text style={{color:'#000',fontSize:17,marginTop:5,lineHeight:20,height:20}}>{this.props.model.title}</Text>
                    <Text style={{color:'#666',fontSize:13,marginTop:5}}>{'月售'+this.props.model.monthSale+'份，好评率'+this.props.model.praise}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:15,color:'rgba(251,73,8,1)'}}>¥</Text>
                        <Text style={{fontSize:18,color:'rgba(251,73,8,1)'}}>{this.props.model.price}</Text>
                        <Text style={{fontSize:12,color:'rgba(240,73,8,1)',borderColor:'rgba(240,73,8,1)',borderWidth:1,borderRadius:5,marginLeft:5}}>{this.props.model.moneyOff}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginTop:5,marginBottom:10}}>
                        <Image style={{width:16,height:16,marginRight:5}} source={require('../../../../res/icons/ic-shangjia.png')}/>
                        <Text style={{color:'#666',fontSize:14}}>{this.props.model.seller}</Text>
                    </View>
                </TouchableOpacity>
        );
    }
}