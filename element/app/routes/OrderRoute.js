
import OrderScreen from '../screen/order/OrderScreen';

import OrderDetailsScreen from '../screen/order/OrderDetails'
import RouteConfig from './RouteConfig';
import { createStackNavigator } from 'react-navigation-stack';

const OrderStackNavigator = createStackNavigator(  {
        Root: OrderScreen,
        Details:OrderDetailsScreen
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
OrderStackNavigator.navigationOptions = RouteConfig.stackNavigatorOptions;

export default  OrderStackNavigator;