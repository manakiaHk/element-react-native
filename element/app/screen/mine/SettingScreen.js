import React from 'react';
import {
    View,
    Text,
    Button,
    SectionList,
    Image,
    StyleSheet,
    Alert,
    TouchableOpacity,
    StatusBar
} from 'react-native';

export  default  class SettingScreen extends React.Component {
    static navigationOptions = {
        title:'设置'
    };

    constructor(props){
        super(props);
        this.state =  {
            dataSource:[
                { section: {}, data: ["用户信息", "地址管理"] },
                { section: {}, data: ["账户与安全", "支付设置","我的档案","通用"] },
                { section: {}, data: ["我的档案", "通用","功能反馈"] }
            ]

        };
    }

    render() {
        return (
            <View style={styles.list}>
                <StatusBar backgroundColor={Colors.ThemeColor} barStyle="light-content" />
                <SectionList
                    style={styles.list}
                    contentInset = {{top: 8, left: 0, bottom: 0, right: 0}}
                    sections={this.state.dataSource}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index, section,separators }) => (
                        <TouchableOpacity
                            onPress={() =>this._onlistSeleced(section,index)}>
                            <View style={styles.item}>
                                <Text style={styles.itemText}>{item}</Text>
                                <Image style={styles.itemNextIcon} source={require(`../../../res/icons/ic-list-item-next.png`)}/>
                            </View>
                        </TouchableOpacity>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.sectionHeader}>
                        </View>
                    )}

                    ItemSeparatorComponent = {()=>(<View style={styles.itemSep}/>)}
                    renderSectionFooter = {({ section: { section } }) => (
                        <View style={styles.sectionFooter}>
                        </View>
                    )}
                    // SectionSeparatorComponent = {()=>(<View style={styles.sectionSep}/>)}
                    ListFooterComponent = {()=>(<TouchableOpacity onPress={()=>{this.signOut()}}><Text style={styles.listFooter}>退出登录</Text></TouchableOpacity>)}

                />
            </View>
        );

    }
    signOut() {
        Alert.alert(
            '您确定要退出当前登录',
            '',
            [
                {text: '确定', onPress: () =>{
                    storage.remove({
                        key: 'user',
                        id:'current',
                    });
                    this.props.navigation.navigate('Login');
                }
                },
                {text: '取消', onPress: () =>{}, style: 'cancel'},
            ],
            { cancelable: false }
        );
    }
    _onlistSeleced(section,index) {


    }

}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor:'#eee'
    },
    item: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        height: 44,
        backgroundColor:'#fff'
    },
    itemText:{
        paddingLeft:50,
        paddingRight:15,
        width:'100%',
    },
    itemNextIcon:{
        width:20,
        height:20,
        marginRight:15,
    },
    itemSep:{
        height:0.5,
        backgroundColor:'#ddd',
        marginLeft:15
    },

    sectionHeader:{
        backgroundColor:'#efefef',
        height:0,
    },
    sectionFooter:{
        height:8,
        backgroundColor:'#efefef',
    },
    listFooter:{
        color:'red',
        fontSize:15,
        height:44,
        lineHeight:44,
        textAlign:'center',
        backgroundColor:'#fff'
    }

});