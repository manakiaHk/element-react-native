import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export  default class UserProtocolScreen extends React.Component{
    static navigationOptions = {
        title:'用户协议'
    };
    render () {
        return (
            <View style={{ flex: 1,backgroundColor:Colors.ScreenBackgroundColor}}>
                <Text style={{fontSize:22,padding:15}}>{`使用JavaScript和React编写原生移动应用`}</Text>
                <Text style={{fontSize:15,padding:15,color:'#333'}}>{`React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。`
                }</Text>
            </View>
        );
    }

};