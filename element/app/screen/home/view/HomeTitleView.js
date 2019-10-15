import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export  default class HomeTitleView extends React.Component {

    render() {
        return (
            <View style={{
                padding:15,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',}}>
                <View style={{height:1,width:35,backgroundColor:'#999'}}/>
                <Text style={{fontSize:16,color:'#000',marginLeft:5,marginRight:5}}>{this.props.title}</Text>
                <View style={{height:1,width:35,backgroundColor:'#999'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    //

});