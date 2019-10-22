
export default  function querySellers(pageIndex,pageSize) {

    let start =  pageIndex*pageSize;
    let end =  pageIndex*pageSize+pageSize;

    return sellers.slice(start,end);
};

const sellers = [{

        image:'https://cube.elemecdn.com/0/19/1af2207afc9abb888a0e911e620e7png.png',
        backgroundImage:'https://cube.elemecdn.com/2/e1/9c37353cc61887aba2790205c4881png.png',
        sellerName:'乡村基(凤鸣广场店)',
        score:'4.3',
        monthSale:'1120',
        sendOutUp:'15.00',
        shippingFee:'5.00',
        distance:'2km',
        sendTime:'35分钟',
        isBrand:true,
        tags:['其他快餐','品质联盟','川湘菜'],
        activitys:[
            {
                type:3,// 特
                content:'特价商品11元起'
            },
            {
                type:0,//减
                content:'满35减10，满55减20'
            },
            {
                type:1, //折
                content:'折扣商品5折起'
            },
            {
                type:2,// 首
                content:'新用户下单立减17元'
            },
        ],
        tickes :[{id:'00h9-032n-32x5-009x',money:8,type:0,condition:'无门槛'},
                 {id:'098x-556x-44e4-65d6', money:10,type:1,condition:'满58可用'}],
        notice:'公告：亲爱的顾客，感谢您的光临，如需发票，多饭，换汤等，均可提交订单时备注，小伙伴会即时为您处理的哦！祝您用餐愉快！'

    },
    {

        image:'https://cube.elemecdn.com/a/e7/d5f7446dff93aad34db6279683851png.png',
        backgroundImage:'https://cube.elemecdn.com/2/e1/664a22e25effcc1924843e33208cdpng.png',
        sellerName:'华莱士炸鸡汉堡(新桥店)',
        score:'4.3',
        monthSale:'1120',
        sendOutUp:'14.00',
        shippingFee:'1.00',
        distance:'2km',
        sendTime:'21分钟',
        isBrand:true,
        tags:['其他快餐','支持自取','品质联盟'],
        activitys:[
            {
                type:0,//减
                content:'满35减10，满55减20'
            },
            {
                type:1, //折
                content:'折扣商品5折起'
            },
            {
                type:2,// 首
                content:'新用户下单立减17元'
            },
            {
                type:3,// 特
                content:'特价商品11元起'
            },
        ],
        tickes :[{id:'00h9-032n-32x5-009x',money:8,type:0,condition:'无门槛'},
            {id:'098x-556x-44e4-65d6', money:10,type:1,condition:'满58可用'}],
        notice:'公告：亲爱的顾客，感谢您的光临，如需发票，多饭，换汤等，均可提交订单时备注，小伙伴会即时为您处理的哦！祝您用餐愉快！'


    },
    {

        image:'https://cube.elemecdn.com/6/ff/b2eafe11cfbb8e5698d328334af97jpeg.jpeg',
        backgroundImage:'https://cube.elemecdn.com/7/ef/57e5c831c6b3ec11c2db1735a8620png.png',
        sellerName:'新概念土碗饭',
        score:'4.3',
        monthSale:'1120',
        sendOutUp:'14.00',
        shippingFee:'1.00',
        distance:'2km',
        sendTime:'41分钟',
        isBrand:false,
        tags:['其他快餐','支持自取','品质联盟'],
        activitys:[
            {
                type:2,// 首
                content:'新用户下单立减17元'
            },
            {
                type:3,// 特
                content:'特价商品11元起'
            },
            {
                type:0,//减
                content:'满35减10，满55减20'
            },
            {
                type:1, //折
                content:'折扣商品5折起'
            },

        ],
        tickes :[{id:'00h9-032n-32x5-009x',money:8,type:0,condition:'无门槛'},
            {id:'098x-556x-44e4-65d6', money:10,type:1,condition:'满58可用'}],
        notice:'公告：亲爱的顾客，感谢您的光临，如需发票，多饭，换汤等，均可提交订单时备注，小伙伴会即时为您处理的哦！祝您用餐愉快！'

    },
    {
        image:'https://cube.elemecdn.com/b/b5/1cfd09539c63113f198296c0e9234png.png',
        backgroundImage:'https://cube.elemecdn.com/1/bb/be3cd75f2fa4c401d37791cda4256png.png',
        sellerName:'荣味家大食堂',
        score:'2.3',
        monthSale:'1120',
        sendOutUp:'25.00',
        shippingFee:'3.00',
        distance:'1km',
        sendTime:'35分钟',
        isBrand:false,
        tags:['其他快餐','支持自取','品质联盟','川湘菜'],
        activitys:[
            {
                type:2,// 首
                content:'新用户下单立减17元'
            },
            {
                type:0,//减
                content:'满35减10，满55减20'
            },
            {
                type:1, //折
                content:'折扣商品5折起'
            },
            {
                type:3,// 特
                content:'特价商品11元起'
            },
        ],
        tickes :[{id:'00h9-032n-32x5-009x',money:8,type:0,condition:'无门槛'},
            {id:'098x-556x-44e4-65d6', money:10,type:1,condition:'满58可用'}],
        notice:'公告：亲爱的顾客，感谢您的光临，如需发票，加饭，换汤等，均可备注，会即时为您处理的哦！祝您用餐愉快！'

    },
///......
    {
        image:'https://cube.elemecdn.com/e/59/b251507b1462065a4ba78cd02ea96jpeg.jpeg',
        backgroundImage:'https://fuss10.elemecdn.com/e/59/b251507b1462065a4ba78cd02ea96jpeg.jpeg',
        sellerName:'鲜果帮',
        score:'4.5',
        monthSale:'1210',
        sendOutUp:'28.00',
        shippingFee:'3.00',
        distance:'0.3km',
        sendTime:'10分钟',
        isBrand:false,
        tags:['水果店','支持自取','品质联盟'],
        activitys:[
            {
                type:0,//减
                content:'满35减10，满55减20'
            },
            {
                type:3,// 特
                content:'特价商品11元起'
            },
            {
                type:1, //折
                content:'折扣商品5折起'
            },
            {
                type:2,// 首
                content:'新用户下单立减17元'
            },

        ],
        tickes :[{id:'00h9-032n-32x5-009x',money:8,type:0,condition:'无门槛'},
            {id:'098x-556x-44e4-65d6', money:10,type:1,condition:'满58可用'}],
        notice:'公告：亲爱的顾客，感谢您的光临，如需发票，多饭，换汤等，均可提交订单时备注，小伙伴会即时为您处理的哦！祝您用餐愉快！'

    },

    {
        image:'https://cube.elemecdn.com/c/75/2bcd1f4aab6b6bfd2ecec7db6c201png.png',
        backgroundImage:'https://cube.elemecdn.com/d/19/ab1c913a0c93a48068972bc1f4e31png.png',
        sellerName:'三顾冒菜（丰德国际店）',
        score:'3.3',
        monthSale:'2140',
        sendOutUp:'25.00',
        shippingFee:'3.00',
        distance:'500m',
        sendTime:'25分钟',
        isBrand:false,
        tags:['冒菜','支持自取','品质联盟'],
        activitys:[
            {
                type:0,//减
                content:'满35减10，满55减20'
            },
            {
                type:2,// 首
                content:'新用户下单立减17元'
            },
            {
                type:3,// 特
                content:'特价商品11元起'
            },

            {
                type:1, //折
                content:'折扣商品5折起'
            },

        ],
        tickes :[{id:'00h9-032n-32x5-009x',money:8,type:0,condition:'无门槛'},
            {id:'098x-556x-44e4-65d6', money:10,type:1,condition:'满58可用'}],
        notice:'公告：亲爱的顾客，感谢您的光临，如需发票，多饭，换汤等，均可提交订单时备注，小伙伴会即时为您处理的哦！祝您用餐愉快！'

    },

    {
        image:'https://cube.elemecdn.com/0/8b/7a8cc4c248e33d5c93624b9cb5a4bjpeg.jpeg',
        backgroundImage:'https://cube.elemecdn.com/d/48/57d02a22bfd99145f6b3e453273c6png.png',
        sellerName:'两胖仔大厨.小炒',
        score:'2.3',
        monthSale:'3210',
        sendOutUp:'15.00',
        shippingFee:'3.00',
        distance:'2km',
        sendTime:'43分钟',
        isBrand:false,
        tags:['川湘菜','支持自取','品质联盟'],
        activitys:[
            {
                type:0,//减
                content:'满35减10，满55减20'
            },
            {
                type:3,// 特
                content:'特价商品11元起'
            },
            {
                type:1, //折
                content:'折扣商品5折起'
            },
            {
                type:2,// 首
                content:'新用户下单立减17元'
            },

        ],
        tickes :[{id:'00h9-032n-32x5-009x',money:8,type:0,condition:'无门槛'},
            {id:'098x-556x-44e4-65d6', money:10,type:1,condition:'满58可用'}],
        notice:'公告：亲爱的顾客，感谢您的光临，如需发票，多饭，换汤等，均可提交订单时备注，小伙伴会即时为您处理的哦！祝您用餐愉快！'

    },

    {
        image:'https://cube.elemecdn.com/a/f7/e3fbaa0d8d03ff2937356fc64c25cpng.png',
        backgroundImage:'https://cube.elemecdn.com/8/26/6e269a95995b2e9b9d41cf69d5f07png.png',
        sellerName:'大米先生（保利中心店）',
        score:'2.3',
        monthSale:'2220',
        sendOutUp:'15.00',
        shippingFee:'2.00',
        distance:'1.2km',
        sendTime:'40分钟',
        isBrand:false,
        tags:['品质联盟','川湘菜'],
        activitys:[
            {
                type:0,//减
                content:'满35减10，满55减20'
            },
            {
                type:1, //折
                content:'折扣商品5折起'
            },
            {
                type:2,// 首
                content:'新用户下单立减17元'
            },
            {
                type:3,// 特
                content:'特价商品11元起'
            },
        ],
        tickes :[{id:'00h9-032n-32x5-009x',money:8,type:0,condition:'无门槛'},
            {id:'098x-556x-44e4-65d6', money:10,type:1,condition:'满58可用'}],
        notice:'公告：亲爱的顾客，感谢您的光临，如需发票，多饭，换汤等，均可提交订单时备注，小伙伴会即时为您处理的哦！祝您用餐愉快！'

    }

];