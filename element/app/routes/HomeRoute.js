
import { createStackNavigator } from 'react-navigation-stack';
import RouteConfig from './RouteConfig';
import HomeScreen from '../screen/home/HomeScreen';
import HomeCategoryDetailsScreen from '../screen/home/HomeCategoryDetailsScreen';
import SellerDetailsScreen from '../screen/home/SellerDetailsScreen';

const HomeStackNavigator = createStackNavigator( {
        Root:{
            screen: HomeScreen,
        },
        HomeCategoryDetails:{
            screen:HomeCategoryDetailsScreen,
        },
        SellerDetails:{
            screen:SellerDetailsScreen
        }
    },
    {
        initialRouteName: 'Root',
        headerMode:'screen',
        transitionConfig:()=> ({
            screenInterpolator:RouteConfig.stackViewStyleInterpolator.forHorizontal,
        }),
        defaultNavigationOptions:RouteConfig.defaultNavigationOptions,
    }
);
HomeStackNavigator.navigationOptions  = RouteConfig.stackNavigatorOptions;

export  default  HomeStackNavigator;