import React  from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width:screenWidth, height:screenHeight } = Dimensions.get('window');

 _wclodingRef  = null;

const HUDType = {
    None:0,
    Indicator: 1,
    Message: 2
};

export default class WCProgressHUD extends   React.Component {
    constructor(props) {
        super(props);
        _wclodingRef = this;
        this.state = {
            type:HUDType.None,
            animating:false,
            labelText:'',
        }
    }
    static showIndicator(text){

        _wclodingRef.setState({
            type: HUDType.Indicator,
            animating:true,
            labelText:text
        })
    };
    static showMessage(text){
        _wclodingRef.setState({
            type: HUDType.Message,
            animating:false,
            labelText:text
        });

         setTimeout(()=>{
             _wclodingRef.setState({
                 type: HUDType.None
             });
        },1000);
    };
    static hidden = () => {
        _wclodingRef.setState({type: HUDType.None});

    };

    render() {
            if(this.state.type===HUDType.Indicator){
                return(
                    <View style={styles.loadingbackground}>
                        <View style={{
                            zIndex:999,
                            justifyContent:'center',alignItems:'center',
                            width:this.props.plateWidth,
                            height:this.props.plateHeight,
                            backgroundColor:this.props.plateColor,
                            padding:15,
                            borderRadius:5}}
                        >
                            <ActivityIndicator
                                size={this.props.indicatorSize}
                                color={this.props.indicatorColor}
                                hidesWhenStopped = {true}
                                animating={this.state.animating}
                            />

                            <Text style={{
                                color:this.props.labelColor,
                                fontSize:this.props.labelFont,
                                marginTop:10
                            }}
                            >{this.state.labelText}</Text>
                        </View>
                    </View>
                )

            }else if(this.state.type===HUDType.Message) {
                return (
                    <View style={styles.loadingbackground}>
                        <View
                            style={{
                                justifyContent: 'center', alignItems: 'center',
                                padding:15,
                                backgroundColor: this.props.plateColor,
                                borderRadius: 5
                        }}>
                            <Text
                                style={{
                                color: this.props.labelColor,
                                fontSize: this.props.labelFont,
                                marginTop: 5
                                }}
                            >{this.state.labelText}</Text>
                        </View>
                    </View>
                );
            } else{
                return(<View/>)
            }
    }

}


//类型检测器
WCProgressHUD.propTypes = {

    plateWidth: PropTypes.number,
    plateHeight:PropTypes.number,
    plateColor:PropTypes.string,
    indicatorColor:PropTypes.string,
    labelColor:PropTypes.string,
    labelFont:PropTypes.number,
    indicatorSize:PropTypes.oneOf(['small', 'large']),

};
// 指定 props 的默认值：
WCProgressHUD.defaultProps = {
    plateWidth: 100,
    plateHeight:100,
    plateColor:'rgba(255,255,255,0.5)',
    indicatorColor:'#111',
    labelColor:'#000',
    labelFont:13,
    indicatorSize:'small'
};

const styles = StyleSheet.create({
    loadingbackground: {
        paddingBottom:100,
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        width: screenWidth,
        height: screenHeight,
        justifyContent: "center",
        alignItems: "center",
    },
});

