import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class ShopRecommendItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[{alignItems:'flex-start',backgroundColor:'#fff'},this.props.style]}>
                <Image style={{width:'100%',height:'60%'}} source={{uri:this.props.model.image}}/>
                <View style={{paddingRight:5,paddingLeft:5}}>
                    <Text style={{fontSize:12,color:'#000',height:18,lineHeight:18}}>{this.props.model.title}</Text>
                    <Text style={{fontSize:10,color:'#666',height:12,lineHeight:12}}>
                        {`月销${this.props.model.monthSale}，好评率${this.props.model.praise}`}
                    </Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:13,color:'rgba(251,73,8,1)'}}>¥</Text>
                            <Text style={{fontSize:17,color:'rgba(251,73,8,1)',fontWeight:'500'}}>{this.props.model.price}</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{backgroundColor:Colors.ThemeColor,textAlign:'center',
                                fontWeight:'500',color:'#fff',fontSize:20,borderRadius:10,overflow:'hidden',
                                height:20,width:20,lineHeight:20}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }

}