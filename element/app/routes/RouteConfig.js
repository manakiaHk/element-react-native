
import stackViewStyleInterpolator from
    'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';


// 默认导航配置
const  defaultNavigationOptions = {
    headerTintColor: '#222',
    headerBackTitle:'返回',
    headerBackTitleStyle:{
        paddingLeft:0,
    },
    headerStyle: {
        backgroundColor: Colors.NavBarColor,
    },
    headerTitleStyle:{
        flex:1, textAlign: 'center'
    },
};

//BottomTabBar在非根界面隐藏。
const stackNavigatorOptions =  ({ navigation }) => {
    return {
        tabBarVisible:navigation.state.index === 0
    };
};

export default  {
    defaultNavigationOptions,
    stackViewStyleInterpolator,
    stackNavigatorOptions
};
