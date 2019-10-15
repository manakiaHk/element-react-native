import DiscoverScreen from '../screen/discover/DiscoverScreen';
import RouteConfig from './RouteConfig';
import { createStackNavigator } from 'react-navigation-stack';

import DiscoverItemDetailsScreen from '../screen/discover/DiscoverItemDetailsScreen';
import RecomendScreen from '../screen/discover/RecomendScreen';
import ActivityScreen from '../screen/discover/ActivityScreen';

const DiscoverStackNavigator = createStackNavigator(  {
        Root:{
            screen:DiscoverScreen
        },
        DiscoverItemDetails:{
            screen:DiscoverItemDetailsScreen
        },
        Recomend:{
            screen:RecomendScreen
        },
        Activity:{
            screen:ActivityScreen
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
DiscoverStackNavigator.navigationOptions  = RouteConfig.stackNavigatorOptions;

export default  DiscoverStackNavigator;