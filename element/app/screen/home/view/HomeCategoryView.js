import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export  default class HomeCategoryView extends React.Component {

    render() {
        itemArr = this.props.data;
        return (
            <View style={styles.container}>
                {
                    itemArr.map((item,index) =>(
                        <TouchableOpacity  style={styles.item}
                                           key={item.title.toString()}
                                           activeOpacity={0.7}
                                           onPress={()=>{this.props.categoryItemPress(item,index)}}
                        >
                            <Image style={styles.itemImg} source={{uri:item.icon}}/>
                            <Text  style={styles.itemtitle}>{item.title}</Text>
                        </TouchableOpacity>))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        paddingTop:10,
        paddingBottom:5,
        paddingRight:5,
        paddingLeft:5,

    },
    //
    item: {
        width:'18%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#521'
        marginTop:10
    },
    itemImg:{
        backgroundColor:'#fff',
        width:45,
        height:45,
        borderRadius:5,
    },
    itemtitle:{
        color:'#333',
        fontSize:12,
        lineHeight:18,
        height:18
    }
});