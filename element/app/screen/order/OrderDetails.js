import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export  default class OrderDetailsScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title:'订单详情'
        };
    };

    render () {
        return (
            <View style={{ flex: 1,backgroundColor:Colors.ScreenBackgroundColor}}>
                <Text>{'orderid:'+ this.props.navigation.getParam('orderId')}</Text>
            </View>
        );
    }

};