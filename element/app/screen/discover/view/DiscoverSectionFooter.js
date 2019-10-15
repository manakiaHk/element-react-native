import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class DiscoverSectionFooter extends React.Component {

    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fff', borderBottomWidth:15,
                borderBottomColor:'rgba(235,235,235,1)',paddingBottom:10}}>
                <TouchableOpacity onPress={()=>{this.props.onPress()}}>
                    <Text style={{color:'#666',fontSize:15,height:30,lineHeight:30}}>查看更多>></Text>
                </TouchableOpacity>

            </View>
        );
    }
}