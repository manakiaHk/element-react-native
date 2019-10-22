import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class ShopHeaderView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statusBarHeight:20,
        }
    }

    render() {
        let width =  global.Device.ScreenWidth;
        let photoOverBottom= 15;
        let height =  this.state.statusBarHeight+NavigationHeight+100;
        let photoWidth = 90;

        return (
            <View style={{zIndex:999,alignItems:'center',backgroundColor:'#fff',height:height+photoOverBottom}}>
                {/*背景图*/}
                <Image style={{width:width,height:height}} source={{uri:this.props.backgroundImage?this.props.backgroundImage:'https://cube.elemecdn.com/7/c5/9d7f3bf590912ec5a6d562111b40dpng.png'}}/>
                {/*背景图遮罩层*/}
                <View style={{position:'absolute',overflow:'visible',left:0,top:0,right:0,height:height,backgroundColor:'rgba(0,0,0,0.2)'}}/>
                {/*商家头像*/}
                <Image style={{position:'absolute',borderRadius:5,left:width/2-photoWidth/2,bottom:1,height:photoWidth,width:photoWidth}}
                       source={{uri:this.props.image?this.props.image:'https://cube.elemecdn.com/6/2e/d9d29554f6ed8d1ac93c6a8358e98png.png'}}
                />
            </View>
        );
    }
    componentDidMount() {
        ///获取转态栏高度
        global.statusBarManager.statusHeight((height)=>{
            this.setState({
                statusBarHeight:height
            });
        });
    }
}