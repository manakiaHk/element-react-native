
import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    SectionList,
    TouchableOpacity
} from 'react-native';

import DiscoverHeaderView from './view/DiscoverHeaderView';
import DiscoverSectionRowView from './view/DiscoverSectionRowView';
import DiscoverSectionHeader from './view/DiscoverSectionHeader';
import DiscoverSectionFooter from './view/DiscoverSectionFooter';
import queryRecommend from '../../jsonDemo/RecommendJSON'
import queryTimeSale from '../../jsonDemo/TimeSaleJSON'

export  default class DiscoverScreen extends React.Component {
    static navigationOptions = (navigation)=>{
        return {
            title:'发现'
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            ///数据结构要符合SectionList 声明的结构
            sections : [
                { header: {title:'为你推荐',subtitle:'你的口味我都懂'},
                data: [{itemType:0,
                    items:[]
                }]},
                { header: {title:'限时好礼',subtitle:'金币赚豪礼'},
                    data: [{itemType:1,
                        items:[]
                    }]
                }]

        };


    }
    render() {
        return (
            <View style={{flex:1}}>
                <SectionList
                    style={{flex:1,backgroundColor:'rgba(235,235,235,1)'}}
                    contentInset = {{top: 0, left: 0, bottom: 0, right: 0}}
                    sections={this.state.sections}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index, section,separators }) => {

                        return <DiscoverSectionRowView
                            onPress={(item,index)=>{this.sectionItemPress(item,index)}}
                            items={item.items}
                            itemType={item.itemType}/>
                    }}
                    renderSectionHeader={({ section: { header } }) => <DiscoverSectionHeader title={header.title} subTitle={header.subtitle}/>}
                    renderSectionFooter = {({section}) => <DiscoverSectionFooter onPress={()=>{this.sectionFooterPress(section)}}/>}
                    ListHeaderComponent = {()=><DiscoverHeaderView/>}
                />
            </View>
        );
    }
    sectionItemPress(item,index){
        console.log('index:' + index +' ' +item.title);
        this.props.navigation.push('DiscoverItemDetails',item);
    }
    sectionFooterPress(section){
        if (section.data[0].itemType===0){
            this.props.navigation.push('Recomend');
        }else {
            this.props.navigation.push('Activity');
        }

    }

    componentDidMount() {
        this.loadRecommend();
        this.loadTimeSale();
    }

    loadRecommend() {

        let result = queryRecommend(0,4);
///数据结构要符合SectionList 声明的结构
        this.setState((state, props) => ({
            sections : [{ header: {title:'为你推荐',subtitle:'你的口味我都懂'},
                            data: [{itemType:0,
                                        items:result
                                    }]
                        },
                        { header: {title:'限时好礼',subtitle:'金币赚豪礼'},
                            data: [{itemType:1,
                                       items:state.sections[1].data[0].items
                                    }]
                        }]

        }));
    }


    loadTimeSale() {


        let result = queryTimeSale(0,3);

        this.setState((state, props) => ({
///数据结构要符合SectionList 声明的结构
            sections : [{ header: {title:'为你推荐',subtitle:'你的口味我都懂'},
                            data: [{itemType:0,
                                       items:state.sections[0].data[0].items
                                    }]
                        },

                        { header: {title:'限时好礼',subtitle:'金币赚豪礼'},
                            data: [{itemType:1,
                                       items:result
                                    }]
                        }]

        }));
    }

}