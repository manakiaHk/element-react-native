import WelcomeScreen from '../screen/WelcomeScreen';
import RouteConfig from './RouteConfig';
import { createStackNavigator } from 'react-navigation-stack';

const WelcomeStackNavigator = createStackNavigator(  {
        Root:{
            screen:WelcomeScreen,
            navigationOptions:{
                header:null
            }
        }
    },
    {
        initialRouteName: 'Root',
        headerMode:'screen',
        transitionConfig:()=> ({
            screenInterpolator:RouteConfig.stackViewStyleInterpolator.forHorizontal,//页面push跳转方式
        }),
        defaultNavigationOptions:RouteConfig.defaultNavigationOptions
    },
);
WelcomeStackNavigator.navigationOptions  = RouteConfig.stackNavigatorOptions;

export default  WelcomeStackNavigator;