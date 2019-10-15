
import RouteConfig from "./RouteConfig";
import MineScreen from '../screen/mine/MineScreen';
import SettingScreen from '../screen/mine/SettingScreen';
import { createStackNavigator } from 'react-navigation-stack';
const MineStackNavigator = createStackNavigator(  {
        Root: MineScreen,
        Setting:{
            screen:SettingScreen,
            navigationOptions:{
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: Colors.ThemeColor,
                },
            }
        }
    },
    {
        initialRouteName: 'Root',
        headerMode:'screen',
        transitionConfig:()=> ({
            screenInterpolator:RouteConfig.stackViewStyleInterpolator.forHorizontal,
        }),
        defaultNavigationOptions:RouteConfig.defaultNavigationOptions,
    },
);
MineStackNavigator.navigationOptions  = RouteConfig.stackNavigatorOptions;

export default  MineStackNavigator;