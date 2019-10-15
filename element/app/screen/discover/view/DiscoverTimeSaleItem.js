import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class DiscoverTimeSaleItem extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>{this.props.onPress()}}
                              style={{justifyContent:'center',alignItems:'flex-start',
                                  backgroundColor:'#fff',width:this.props.width?this.props.width:'32%',marginBottom:10}}>

                <View style={{width:'100%'}}>

                    {
                        !this.props.topTagViewHidden&&
                        <Text style={{width:'76%',height:25,textAlign:'center', zIndex:999,lineHeight:25,color:'#fff',fontSize:16,backgroundColor:'rgba(20,20,20,0.8)'}}>{this.props.model.timeSale}</Text>

                    }
                    <Image style={{width:'100%',height:90,overflow:'visible'}} source={{uri:this.props.model.image}} />
                </View>
                <Text style={{color:'#000',fontSize:16,marginTop:5,lineHeight:20,height:20}}>{this.props.model.title}</Text>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                    <Text style={{fontSize:16,color:'rgba(251,73,8,1)'}}>{this.props.model.goldCoin+'金币'}</Text>
                    <View>
                        <Text style={{fontSize:14,height:24,lineHeight:24,color:'#666',marginLeft:5}}>{this.props.model.price}</Text>
                        <View style={{backgroundColor:'#666',height:1,width:'100%',position:'absolute',left:0,right:0,top:12}}/>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}