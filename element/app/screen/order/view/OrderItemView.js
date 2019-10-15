
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export  default class OrderItemView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.onPressItem()}>
                   <View style={styles.shopRow}>
                       <Image style={styles.image} source={this.props.model.image}/>
                       <View style={styles.shopColumn}>
                           <Text  style={styles.shopName}>{this.props.model.shop}</Text>
                           <Text  style={styles.orderDate}>{this.props.model.date}</Text>
                       </View>
                       <Image style={styles.nextIcon}/>
                       <Text  style={styles.orderState}>{this.props.model.orderState}</Text>
                   </View>
                    <View style={styles.detailRow}>
                        <Text  style={styles.details}>{this.props.model.details}</Text>
                        <Text  style={styles.money}>{'¥'+this.props.model.money}</Text>
                    </View>
                    <View style={styles.barRow}>
                        <TouchableOpacity>
                            <Text  style={styles.buttonText}>删除订单</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text  style={styles.buttonText}>再来一单</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text  style={[styles.buttonText,styles.valueButton]}>评价</Text>
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingLeft:15,

    },
    shopRow:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
        // backgroundColor:'#032'
    },
    image:{
        height:50,
        width:50,
        // backgroundColor:'#234',
        marginLeft:15,
    },
    shopColumn:{
        marginLeft:5,
        alignSelf:'flex-start',
        // backgroundColor:'#414'
    },
    shopName:{
        color:'#333',
        fontSize:15,
        width:190,
        height:30,

    },
    orderDate:{
        color:'#999',
        fontSize:11,
    },
    orderState:{
        position:'absolute',
        color:'#666',
        fontSize:13,
        right:15,
    },

    detailRow:{
        height:30,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'#432'
    },
    details:{
        marginLeft:70,
        fontSize:13,
        color:'#666',
        // backgroundColor:'#240'
    },
    money:{
        position:'absolute',
        right:15,
        color:'#333',
        fontSize:13,
    },
    barRow: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingRight:15,
        paddingTop:10,
        paddingLeft:15,
        paddingBottom:10,
        // backgroundColor:'#642'
    },
    buttonText:{
        color:'#666',
        fontSize:13,
        borderRadius:5,
        borderColor:'#666',
        borderWidth:1,
        marginLeft:10,
        paddingLeft:8,
        paddingTop:5,
        paddingRight:8,
        paddingBottom:5,

    },
    valueButton:{
        borderColor:Colors.ThemeColor,
        color:Colors.ThemeColor
    }
});
