import LoginScreen from '../screen/login/LoginScreen';
import UserProtocolScreen from '../screen/login/UserProtocol'
import UserPrivacyScreen from '../screen/login/UserPrivacy'
import RouteConfig from './RouteConfig';
import { createStackNavigator } from 'react-navigation-stack';

const LoginStackNavigator = createStackNavigator(  {
        Root: {
            screen: LoginScreen,
            navigationOptions:{
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: Colors.ThemeColor,
                },
            }
        },
        Userprotocol:UserProtocolScreen,
        UserPrivacy :UserPrivacyScreen,
    },
    ///config
    {
        initialRouteName: 'Root',
        headerMode:'screen',
        transitionConfig:()=> ({
            screenInterpolator:RouteConfig.stackViewStyleInterpolator.forHorizontal,//页面push跳转方式
        }),
        defaultNavigationOptions:{
            headerTintColor: '#fff',
            headerBackTitle:'返回',
            headerBackTitleStyle:{
                paddingLeft:0,
            },
            headerStyle: {
                backgroundColor: Colors.ThemeColor,
            },
            headerTitleStyle:{
                flex:1, textAlign: 'center'
            },
        },
    },
);
LoginStackNavigator.navigationOptions  = RouteConfig.stackNavigatorOptions;

export default  LoginStackNavigator;