
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export  default class MineListItemView extends React.Component {
    render() {

        return (
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.container} onPress={()=>{this.props.onPress()}} activeOpacity={0.7}>
                    <Image style={styles.image} source={this.props.model.icon}/>
                    <Text  style={styles.title}>{this.props.model.title}</Text>
                    <Text  style={styles.details}>{this.props.model.details}</Text>
                    <Image style={styles.nexticon} source={require(`../../../../res/icons/ic-list-item-next.png`)}/>
                    <View  style={styles.sepline}/>
                </TouchableOpacity>

            </View>
        );
    }
}




const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        height:44,
    },
    image:{
        width:20,
        height:20,
        marginLeft:15,
    },
    title:{
        color:'#333',
        fontSize:15,
        marginLeft:15,

    },
    nexticon:{
        position:'absolute',
        width:20,
        height:20,
        right:15,
    },
    details:{
        position:'absolute',
        color:'#666',
        fontSize:12,
        right:40,
    },
    sepline:{
        position:'absolute',
        backgroundColor:'#eee',
        height:0.5,
        left:15,
        right:0,
        bottom:0
    }
});
