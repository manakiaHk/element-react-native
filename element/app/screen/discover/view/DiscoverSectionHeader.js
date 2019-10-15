import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class DiscoverSectionHeader extends React.Component {

    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fff',padding:10}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#333',height:3,width:18,borderTopRightRadius:1.5,borderBottomRightRadius:1.5}}/>
                    <Text style={{color:'#333',fontSize:20,marginLeft:5,marginRight:5}}>{this.props.title}</Text>
                    <View style={{backgroundColor:'#333',height:3,width:18,borderTopLeftRadius:1.5,borderBottomLeftRadius:1.5}}/>
                </View>
                <Text style={{color:'#666',fontSize:13,marginTop:5}}>{this.props.subTitle}</Text>
            </View>
        );
    }
}