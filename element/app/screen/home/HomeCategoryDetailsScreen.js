import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export  default class HomeCategoryDetailsScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        console.log(navigation.state);
        return {
            title: navigation.getParam('title')
        };
    };
    render () {
        return (
            <View style={{ flex: 1,backgroundColor:Colors.ScreenBackgroundColor,justifyContent:'center',alignItems:'center'}}>
                <Text>{'id:'+ this.props.navigation.getParam('Id')}</Text>
                <Text>{'category:'+ this.props.navigation.getParam('title')}</Text>
            </View>
        );
    }

};