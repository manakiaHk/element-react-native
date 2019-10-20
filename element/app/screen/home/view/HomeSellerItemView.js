import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export  default class HomeSellerItemView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activitysExpand:false,
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={()=>{if(this.props.onPress)this.props.onPress()}}>
                <View>
                    {this.renderSellerRow()}
                    {this.renderTagsRow()}
                    {this.renderSaleActivityRow()}
                </View>
            </TouchableOpacity>
        );
    }


    ///商家信息
    renderSellerRow() {

            return(
                <View style={{flexDirection:'row',alignItems:'center',height:80,paddingTop:15}}>
                    <View style={{width:80,height:'100%',}}>
                        <Image style={{width:70,height:'100%',marginLeft:10}} source={{uri:this.props.model.image}} />
                    </View>
                    <View style={{height:'100%',width:'100%',paddingLeft:15,paddingRight:90}}>
                        <View style={{flexDirection:'row',alignItems:'center',height:'33.3%'}}>
                            {
                                this.props.model.isBrand
                                &&<Text style={{backgroundColor:'rgba(254,232,28,1)',color:'#503D15',fontSize:13,padding:3,borderRadius:5}}>品牌</Text>
                            }
                            <Text style={{color:'#000',fontSize:15,marginLeft:5}}>{this.props.model.sellerName}</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',height:'33.3%'}}>
                            <Image style={{width:16,height:16,marginRight:5}} source={require('../../../../res/icons/ic-wujiaoxing.png')}/>
                            <Text style={{fontSize:13,color:'#666'}}>{this.props.model.score + '   月售' + this.props.model.monthSale + '单' }</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:'33.3%'}}>
                            <Text style={{fontSize:13,color:'#666',textAlign:'right'}}>
                                {this.props.model.sendOutUp +'起送'+' | '+ (parseFloat(this.props.model.shippingFee)>0 ? ('配送费'+this.props.model.shippingFee):'免配送费')}
                            </Text>
                            <Text style={{fontSize:13,color:'#666'}}>{this.props.model.distance+ ' | ' + this.props.model.sendTime}</Text>
                        </View>
                    </View>
                </View>
            )
    }

    ///标签栏
    renderTagsRow(){
        return(
            <View style={{flexDirection:'row', alignItems:'flex-start',marginLeft:95,paddingRight:15,paddingTop:10,paddingBottom:10}}>
                {
                    this.props.model.tags.map((item,index)=>(
                        <Text key = {index +''} style={{fontSize:11,color:'#666',borderWidth:1, borderColor:'#666',borderRadius:5,marginRight:5,padding:2}}>{item}</Text>
                    ))
                }
            </View>
        )
    }
    ///活动栏
    renderSaleActivityRow() {
        return(
            <View style={{marginLeft:95,borderColor:'#eee',borderTopWidth:0.5,paddingTop:5,paddingBottom:10}}>
                {
                    this.props.model.activitys.map((item,index)=>{


                        if(!this.state.activitysExpand){ ///默认展示两个
                            if (index>1)return;
                        }
                        let rowNode = null;
                        let headType = {borderRadius:3,padding:3,color:'#fff',fontSize:11};
                        let textType = {color:'#666',fontSize:12,marginLeft:5};
                        let containerType = {flexDirection:'row',alignItems:'center',paddingBottom:5};

                        if (item.type===0){
                            rowNode = (<View key={index.toString()} style={containerType}>
                                <Text style={[{backgroundColor:'rgba(234,91,96,1)'},headType]}>减</Text>
                                <Text style={textType}>{item.content}</Text>
                            </View>);
                        }else if(item.type===1){
                            rowNode = (<View key={index.toString()} style={containerType}>
                                <Text style={[{backgroundColor:'rgba(234,91,96,1)'},headType]}>折</Text>
                                <Text style={textType}>{item.content}</Text>
                            </View>);
                        }else if(item.type===2){
                            rowNode = (<View key={index.toString()} style={containerType}>
                                <Text style={[{backgroundColor:'rgba(95,178,94,1)'},headType]}>首</Text>
                                <Text style={textType}>{item.content}</Text>
                            </View>);
                        }else if(item.type===3){
                            rowNode = (<View key={index.toString()} style={containerType}>
                                <Text style={[{backgroundColor:'rgba(235,115,62,1)'},headType]}>特</Text>
                                <Text style={textType}>{item.content}</Text>
                            </View>);
                        }
                        return  rowNode;
                    })
                }

                <TouchableOpacity style={{position:'absolute',right:15,top:5,flexDirection:'row',alignItems:'center',paddingBottom:15}}
                                  onPress={()=>{
                                      this.setState({
                                          activitysExpand:!this.state.activitysExpand,
                                      });
                                  }}
                >
                    <Text style={{fontSize:12,color:'#666'}}>{this.props.model.activitys.length + '个活动'}</Text>
                    <Image style={{width:9,height:9,marginLeft:2}} source={require('../../../../res/icons/ic-dropdown-dark.png')}/>
                </TouchableOpacity>
            </View>
        )
    }

}
