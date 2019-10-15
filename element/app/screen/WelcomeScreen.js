


import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
} from 'react-native';

export default class WelcomeScreen extends   React.Component {

    constructor(props){
        super(props);
        this.state = {
            time : 3,
        }
    }
    render() {
        return (
            <View style ={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'fff'}}>
                <Text style = {{fontSize:30,color:Colors.ThemeColor}}>欢迎使用</Text>
                <Text style = {{fontSize:18,color:'#999',position:'absolute',
                    right:50,top:50,backgroundColor:'#efefef',
                    paddingLeft:5,paddingRight:5,paddingTop:2,paddingBottom:2,borderRadius:3}}>{this.state.time+'秒'}</Text>

            </View>

        );
    }

    componentDidMount() {
      this.timerID = setInterval(()=>{
          if (this.state.time === 1){
              clearInterval(this.timerID);
              this._toLoginScreen();
          }else {
              this.setState({
                  time : this.state.time-1,
              });
          }
        },1000);
    }


    _toLoginScreen () {
        // this.props.navigation.navigate('Login');
        storage.load({
            key: 'user',
            id:'current',
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            if (ret.token){
                this.props.navigation.navigate('Main');
            }
        }).catch(err => {
            ///登录数据过期或者没找到数据
            this.props.navigation.navigate('Login');
        });

    }

}

