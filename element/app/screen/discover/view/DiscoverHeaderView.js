import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export  default class DiscoverHeaderView extends React.Component {

    render() {

        let styles = this.createStyles();
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.left]} opacity={0.8}>
                    <View>
                        <Text style={{fontSize:16,color:'rgba(251,73,8,1)'}}>金币商城</Text>
                        <Text style={{fontSize:13,color:'#666'}}>0元好物在这里</Text>
                    </View>
                    <Image style={styles.itemImg} source={{uri:'https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg'}}/>
                </TouchableOpacity>
                <View style={styles.right}>
                    <TouchableOpacity style={styles.rightTop} opacity={0.8}>
                        <View style={{}}>
                            <Text style={{fontSize:16,color:Colors.ThemeColor}}>推荐有奖</Text>
                            <Text style={{fontSize:13,color:'#666',marginTop:5}}>20元现金拿不停</Text>
                        </View>
                        <Image style={styles.itemImg} source={{uri:'https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightBottom} opacity={0.8}>
                        <View>
                            <Text style={{fontSize:16,color:'rgba(251,65,72,1)'}}>周边优惠</Text>
                            <Text style={{fontSize:13,color:'#666',marginTop:5}}>领取口碑好券</Text>
                        </View>
                        <Image style={styles.itemImg} source={{uri:'https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    createStyles(){
        return StyleSheet.create({
            container: {backgroundColor:'rgba(235,235,235,1)',height:200,flexDirection:'row',borderBottomWidth:15,borderBottomColor:'rgba(235,235,235,1)'},
            left:{backgroundColor:'#fff',height:'100%',width:'50%',alignItems:'center',justifyContent:'center'},
            right:{height:'100%',width:'50%',marginLeft:1,borderBottomWidth:1,borderColor:'#eee'},
            rightTop:{backgroundColor:'#fff',height:'50%',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:10,paddingRight:10},
            rightBottom:{backgroundColor:'#fff',height:'50%',width:'100%',marginTop:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:10,paddingRight:10},
            itemImg:{width:60,height:60}
        });
    }
}
