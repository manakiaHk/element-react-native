import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';

export  default class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state = {
            searchText:''
        };
    };
    render() {
        return (
            <View >
                <View style={styles.search}>
                    { ///这里是条件渲染的一种简写
                        this.state.searchText.length==0
                        &&<View style={styles.placeholder}>
                            <Image style={styles.searchIc} source = {require('../../res/icons/ic-search.png')}/>
                            <Text style={styles.placeholderText}>搜索饿了吗商家、商品名称</Text>
                        </View>
                    }
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text)=>{this.onChangeText(text)}}
                        value={this.state.searchText}
                    />
                </View>
            </View>

        );
    }
    onChangeText(text){
        this.setState({
            searchText:text
        });
        if( this.props.onChangeText){
            this.props.onChangeText(text);
        }
    }
}
const styles = StyleSheet.create({
    search:{
        borderRadius:18,
        marginLeft:15,
        marginRight:15,
        marginTop:0,
        marginBottom:0,
        height:36,
        backgroundColor:'#fff',
        // backgroundColor:'#572'
    },
    textInput:{
        position:'absolute',
        width:'100%',
        height:'100%',
        left:0,
        top:0,
        textAlign:'center'
    },
    placeholder:{
        position:'absolute',
        width:'100%',
        height:'100%',
        left:0,
        top:0,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    searchIc:{
        height:15,
        width:15,
    },
    placeholderText:{
        fontSize:13,
        color:'#999',
        marginLeft:5,
    }
});