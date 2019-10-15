import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class HomeVIPItemView extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={()=>{
                if(this.props.onPress)this.props.onPress();
            }}>
                <View style={styles.container}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image style={{width:22,height:22,marginRight:5}} source={require('../../../../res/icons/ic-huiyuan.png')}/>
                        <Text style={{color:'#503D15',fontSize:18,}}>超级会员</Text>
                        <Text style={{color:'#503D15',fontSize:14,marginLeft:5}}>·每月领20元红包</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#503D15',fontSize:14,marginRight:5}}>限时2元开通</Text>
                        <Image style={{width:12,height:12,marginRight:5}} source={require('../../../../res/icons/ic-next-golden.png')}/>
                </View>

                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(245,221,157,1)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:15,
        paddingRight:10,
        paddingLeft:10,
        paddingBottom:15,
        marginLeft:10,
        marginBottom:10,
        marginRight:10,
        borderRadius:5,
    },

});