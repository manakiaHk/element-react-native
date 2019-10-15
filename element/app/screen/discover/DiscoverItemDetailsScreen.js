import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

export  default class FindItemDetailsScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        };
    };
    render () {
        return (
            <View style={{ flex: 1,backgroundColor:Colors.ScreenBackgroundColor,justifyContent:'center',alignItems:'center'}}>
                <Text style={{padding:2,zIndex:999,fontSize:20,marginBottom:20,color:'#fff',backgroundColor:'rgba(0,0,0,0.5)'}}>{this.props.navigation.getParam('title')}</Text>
                <Image style={{width:'90%',overflow:'visible',height:100,backgroundColor:'rgba(0,0,0,0)'}} source={{uri:this.props.navigation.getParam('image')}} />
            </View>
        );
    }
};