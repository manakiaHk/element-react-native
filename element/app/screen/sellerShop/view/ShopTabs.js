import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class ShopTabs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let items = this.props.items;
        let itemWidth = Device.ScreenWidth/items.length;
        return (
            <View style={[{flexDirection:'row',alignItems:'center',backgroundColor:'#fff'},this.props.style]}>
                {
                    items.map((item,index)=>
                        <TouchableOpacity key={index.toString()} onPress={()=>{this.itemPressed(index)}}>
                            <Text style={{color:'#111',fontSize:14,fontWeight:'500',textAlign:'center',height:35,width:itemWidth,lineHeight:35}}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )
                }
                {/*slider*/}
                <View style={{justifyContent:'center',flexDirection:'row',
                    height:3,width:itemWidth,position:'absolute',
                    bottom:0,left:this.props.currentIndex*itemWidth}}
                >
                    <View style={{height:'100%',width:35,backgroundColor:Colors.ThemeColor}}/>
                </View>
            </View>
        );
    }

    itemPressed(index){
        this.setState({selectedIndex:index});
        if(this.props.tabsPressed)this.props.tabsPressed(index);
    }
}