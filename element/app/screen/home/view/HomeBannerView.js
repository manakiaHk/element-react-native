import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class HomeBannerView extends React.Component {

    render() {
        return (
            <TouchableOpacity style={styles.container}>

                <View style={{}}>
                    <Text style={{color:'#000',fontSize:20,}}>品质套餐</Text>
                    <Text style={{color:'#666',fontSize:15,marginTop:5}}>搭配齐全吃的好</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            if(this.props.onPromptlyBuy)this.props.onPromptlyBuy();
                        }}>
                        <Text style={{color:'rgba(158,111,77,1)',fontSize:15,marginTop:15}}>立即抢购 >></Text>
                    </TouchableOpacity>
                </View>
                <Image style={{width:90,height:90,overflow:'visible'}} source={{uri:'https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png'}}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(242,242,242,1)',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:15,
        paddingRight:30,
        paddingLeft:15,
        paddingBottom:15,
        margin:10,
        borderRadius:5,

    },

});