import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

export  default class SellerDetailsScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('sellerName')
        };
    };
    render () {
        return (
            <View style={{ flex: 1,backgroundColor:Colors.ScreenBackgroundColor,alignItems:'center'}}>
                <Image style={{width:100,height:100,backgroundColor:'rgba(0,0,0,0)',marginTop:20}} source={{uri:this.props.navigation.getParam('image')}} />
                <Text style={{fontSize:20,marginTop:20,color:'#000'}}>{this.props.navigation.getParam('sellerName')}</Text>
            </View>
        );
    }

};