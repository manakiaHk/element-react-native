
import {Image} from "react-native";
import React from 'react'
import {
    createAppContainer,

} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeStackNavigator from './HomeRoute'
import DiscoverStackNavigator from './DiscoverRoute'
import OrderStackNavigator from './OrderRoute'
import MineStackNavigator from './MineRoute'
import LoginStackNavigator from './LoginRoute'
import WelcomeStackNavigator from './WelcomeRoute'
import RouteConfig from './RouteConfig'
///
const AppMianNavigator = createBottomTabNavigator(
    {
        HomeStack:{
            screen:HomeStackNavigator,
            navigationOptions:{
                title: '首页',
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <Image source={require(`../../res/icons/tabbar/ic-tab-home.imageset/ic-tab-home-selected.png`)}/> :
                        <Image source={require(`../../res/icons/tabbar/ic-tab-home.imageset/ic-tab-home-normall.png`)}/>;
                }

            },
        } ,
        DiscoverStack:{
            screen:DiscoverStackNavigator,
            navigationOptions:{
                tabBarLabel: '发现',
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <Image source={require(`../../res/icons/tabbar/ic-tab-find.imageset/ic-tab-find-selected.png`)}/> :
                        <Image source={require(`../../res/icons/tabbar/ic-tab-find.imageset/ic-tab-find-normall.png`)}/>;
                }
            },
        } ,
        OrderStack:{
            screen:OrderStackNavigator,
            navigationOptions:{
                tabBarLabel: '订单',
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <Image source={require(`../../res/icons/tabbar/ic-tab-order.imageset/ic-tab-order-selected.png`)}/> :
                        <Image source={require(`../../res/icons/tabbar/ic-tab-order.imageset/ic-tab-order-normall.png`)}/>;
                }
            },
        } ,
        MineStack:{
            screen:MineStackNavigator,
            navigationOptions: {
                tabBarLabel:'我的',
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <Image source={require(`../../res/icons/tabbar/ic-tab-mine.imageset/ic-tab-mine-selected.png`)}/> :
                        <Image source={require(`../../res/icons/tabbar/ic-tab-mine.imageset/ic-tab-mine-normall.png`)}/>;
                }
            }
        }
    },
    {
        initialRouteName: 'HomeStack',
        tabBarOptions: {
            showIcon:true,
            activeTintColor: Colors.ThemeColor,
            labelStyle: {
                fontSize: 11,
                paddingBottom:5
            },
            style: {
                backgroundColor: Colors.TabBarColor,
                // borderTopWidth:0.2
            },
        },

    }
);


const AppRootNavigator = createAnimatedSwitchNavigator(  {
        Welcome: WelcomeStackNavigator,
        Login: LoginStackNavigator,
        Main:AppMianNavigator
    },
    {
        defaultNavigationOptions:RouteConfig.defaultNavigationOptions,
        initialRouteName: 'Welcome',
    }
);

const  AppRoot = createAppContainer(AppRootNavigator);

export  default AppRoot;


