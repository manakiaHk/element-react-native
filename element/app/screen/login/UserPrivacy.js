import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export  default class UserPrivacyScreen extends React.Component{
    static navigationOptions = {
        title:'用户隐私'
    };
    render () {
        return (
            <View style={{ flex: 1,backgroundColor:Colors.ScreenBackgroundColor}}>
                <Text style={{fontSize:22,padding:15}}>{`使React Native应用是真正的移动应用`}</Text>
                <Text style={{fontSize:15,padding:15,color:'#333'}}>{'React Native产出的并不是“网页应用”， 或者说“HTML5应用”，又或者“混合应用”。 最终产品是一个真正的移动应用，从使用感受上和用Objective-C或Java编写的应用相比几乎是无法区分的。 React Native所使用的基础UI组件和原生应用完全一致。 你要做的就是把这些基础组件使用JavaScript和React的方式组合起来'}</Text>
            </View>
        );
    }

};