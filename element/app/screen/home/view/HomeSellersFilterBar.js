import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class HomeSellersFilterBar extends React.Component {

    render() {
        if (this.props.contentHidden) return(<View style={{height:30}}/>);
        else return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <TouchableOpacity style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Text style={styles.itemText}>综合排序</Text>
                        <Image style={{width:9,height:9,marginRight:10}} source={require('../../../../res/icons/ic-dropdown-dark.png')}/>
                    </TouchableOpacity>

                </View>
                <View style={styles.item}>
                    <TouchableOpacity>
                        <Text style={styles.itemText}>距离最近</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.item}>
                    <TouchableOpacity>
                        <Text style={styles.itemText}>品质联盟</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                        <Text style={styles.itemText}>筛选</Text>
                        <Image style={{width:14,height:14,marginLeft:5}} source={require('../../../../res/icons/ic-filter.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10,
        paddingLeft:10,
        height:40,

    },
    item:{
        width:'25%',
        height:'100%'
        // backgroundColor:'#532'
    },

    itemText:{
        color:'#333',
        fontSize:14,
        fontWeight:'500',
        textAlign:'center',
        height:40,
        lineHeight:40,
        // backgroundColor:'#910'
    }

});