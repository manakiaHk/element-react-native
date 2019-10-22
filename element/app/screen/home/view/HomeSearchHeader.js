import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    NativeModules,
    StatusBar,
} from 'react-native';

import SearchBar from  '../../../../app/components/SearchBar'
export  default class HomeSearchHeader extends React.Component {

    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state = {
            statusBarHeight:0,
            searchText:''
        }
    }
    render() {
        return (
            <View style={{backgroundColor:Colors.ThemeColor}}>
                <View style={{height:this.state.statusBarHeight}}/>
                {
                    this.props.contentHidden?<View style={{height:35+46}}/>:
                        (<View>
                            <View style={{height:35, flexDirection:'row', alignItems:'center', justifyContent:'flex-start', paddingLeft:15, paddingRight:15, marginTop:0}}>
                                <Image style={{height:15,width:15}} source = {require('../../../../res/icons/ic-location.png')}/>
                                <Text style={{marginLeft:5, marginRight:5, color:'#fff', fontSize:15, height:35,lineHeight:35,width:100,}}>{this.props.location}</Text>
                                <Image style={{height:15,width:15,}} source = {require('../../../../res/icons/ic-dropdown.png')}/>
                            </View>
                            <View style={{paddingBottom:10}}>
                                <SearchBar onChangeText={(text)=>{this.onChangeText(text)}}/>
                            </View>
                        </View>)
                }
            </View>
        );
    }
    componentDidMount() {
        global.statusBarManager.statusHeight((height)=>{
            this.setState({
                statusBarHeight:height
            });
        });
    }
    onChangeText(text){

    }
}
