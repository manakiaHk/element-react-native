import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import DiscoverRecommendItem from './DiscoverRecommendItem'
import DiscoverTimeSaleItem from "./DiscoverTimeSaleItem";

export  default class DiscoverSectionRowView extends React.Component {

    render() {

        let styles = this.createStyles();

        if (this.props.itemType===0){
            return (
                <View style={styles.container}>
                    {
                        this.props.items.map((item,index) =>(
                            <DiscoverRecommendItem
                                width={'48.5%'}
                                onPress={()=>{this.props.onPress(item,index)}}
                                key={index.toString()}
                                model={item}/>

                        ))
                    }
                </View>
            );
        }else {
            return (
                <View style={styles.container}>
                    {
                        this.props.items.map((item,index) =>(
                            <DiscoverTimeSaleItem
                                onPress={()=>{this.props.onPress(item,index)}}
                                key={index.toString()}
                                model={item}/>

                        ))
                    }
                </View>
            );
        }


    }

    createStyles(){
        return StyleSheet.create({
            container: {
                flexDirection:'row',
                backgroundColor:'#fff',
                justifyContent:'space-between',
                flexWrap:'wrap',
                padding:10
            }
        });
    }
}
