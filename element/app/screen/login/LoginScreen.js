


import React from 'react';

import {
    View,
    Text,
    Alert,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
    ScrollView,
    Dimensions,
    ActivityIndicator,
} from 'react-native';

export default class LoginScreen extends   React.Component {

    constructor(props) {
        super(props);
        this.state = {
            account:'18888888888',
            password:'123456',
            activityIndicatorAnimate:false
        };



    }
    static navigationOptions =  ({ navigation }) => {
        return {
            title:'登录'
        };
    };
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <StatusBar barStyle="light-content" />
                <View style={styles.account}>
                    <TextInput
                        style = {styles.textInput}
                        onChangeText={(text) => this.setState({account:text})}
                        value={this.state.account}
                        placeholder={'手机号码'}
                    />
                    <View style={styles.inputLine}/>
                </View>
                <View style={styles.password}>
                    <TextInput
                        style = {styles.textInput}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.password}
                        placeholder={'登录密码'}
                    />
                    <View/>
                </View>

                <View style={styles.userNotice}>
                    <Text style={{color:'#666', fontSize:12}}>温馨提示:登录前请阅读</Text>
                    <TouchableOpacity
                        onPress={()=>this._userProtocol()}
                        activeOpacity={0.5}
                    >
                        <Text style={{color:Colors.ThemeColor,fontSize:12}}>《用户协议》</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this._userPrivacy()}
                        activeOpacity={0.5}
                    >
                        <Text style={{color:Colors.ThemeColor,fontSize:12}}>《隐私政策》</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={()=>this._login()}
                    activeOpacity={0.5}
                >
                    <Text style={{textAlign:'center', color:'#fff',fontSize:15}}>登录</Text>
                </TouchableOpacity>
                <WCProgressHUD indicatorColor={'#000'}/>
            </ScrollView>
        );
    }

    _login () {

        if(this.state.account.length===0){
            WCProgressHUD.showMessage('请输入账号:18888888888');
            return;
        }else if(this.state.password.length===0){
            WCProgressHUD.showMessage('请输入密码:123456');
            return;
        }else if(this.state.account!='18888888888'||this.state.password!='123456'){
            WCProgressHUD.showMessage('账号或密码输入有误','账号:Me；\n密码:123456');
            return;
        }

        WCProgressHUD.showIndicator('正在登录...');

        setTimeout(()=>{
            WCProgressHUD.hidden();
            //存储用户Token
            storage.save({
                key: 'user',  // 注意:请不要在key中使用_下划线符号!
                id:'current',
                data: {
                    userName: '好懒的人',
                    userAccount:this.state.account,
                    token: this.state.account+this.state.password
                },

                // 如果不指定过期时间，则会使用defaultExpires参数
                // 如果设为null，则永不过期
                expires: 1000 * 3600 //一个小时
            });

            this.props.navigation.navigate('Main');
        },500);

    }
    _userProtocol() {

        this.props.navigation.push('Userprotocol');
    }
    _userPrivacy() {
        this.props.navigation.push('UserPrivacy');


    }

}

const styles = StyleSheet.create({
    scroll:{
        flex: 1,
        backgroundColor:'#efefef'
    },

    account:{
        marginTop:15,
        height:44,
        backgroundColor:'#fff',
    },
    password:{
        height:44,
        backgroundColor:'#fff',
    },
    textInput:{
        height:43,
        marginLeft:15,
        marginRight:15,
        fontSize:15,
    },
    inputLine: {
        backgroundColor:'#eee',
        height:0.5,
        marginLeft:15,

    },
    userNotice:{
        flexDirection:'row',
        padding:15,

    },

    loginButton:{
        backgroundColor:Colors.ButtonColor,
        height:44,
        borderRadius:5,
        marginLeft:15,
        marginRight:15,
        marginTop:44,
        justifyContent:'center'
    },

});
