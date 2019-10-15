
import React  from 'react';
import {
    View,
    Text,
    ActivityIndicator,

} from 'react-native';
import PropTypes from 'prop-types';

export const FooterRefreshControlState = {
    Refreshing:0,
    EndRefreshing:1,
    NoMoreData:2,
};


export default class FooterRefreshControl extends   React.Component {

    constructor(props) {
        super(props);
        //....
    }


    render() {

        if(this.props.state===FooterRefreshControlState.Refreshing){
            return (
                <View style={{height:40,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                    <ActivityIndicator
                        animating={true}
                    />
                    <Text style={{marginLeft:5,color:this.props.titleColor,fontSize:this.props.titleFont}}>加载更多</Text>
                </View>
            );

        }else  if(this.props.state===FooterRefreshControlState.EndRefreshing) {
            return(

                <View style={{height:40}}>
                </View>
            )

        }else if(this.props.state===FooterRefreshControlState.NoMoreData) {
            return (
                <View style={{height:40,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                    <Text style={{marginLeft:5,color:this.props.titleColor,fontSize:this.props.titleFont}}>没有更多了</Text>
                </View>
            );
        }
    }
}
//类型检测器

FooterRefreshControl.propTypes = {
    titleFont:PropTypes.number,
    titleColor:PropTypes.string,
    state:PropTypes.number,
};
// 指定 props 的默认值：
FooterRefreshControl.defaultProps = {

    titleColor: '#333',
    titleFont: 12,
    state: FooterRefreshControlState.Refreshing,
};
