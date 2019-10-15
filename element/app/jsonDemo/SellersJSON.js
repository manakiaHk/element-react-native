
export default  function querySellers(pageIndex,pageSize) {

    let start =  pageIndex*pageSize;
    let end =  pageIndex*pageSize+pageSize;

    return sellers.slice(start,end);
};

const sellers = [{
        image:'https://cube.elemecdn.com/0/19/1af2207afc9abb888a0e911e620e7png.png',
        sellerName:'乡村基(凤鸣广场店)',
        score:'4.3',
        monthSell:'1120',
        sendOutUp:'15.00',
        shippingFee:'0.00',
        distance:'2km',
        time:'35分钟',
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

        ]
    },
    {
        image:'https://cube.elemecdn.com/a/e7/d5f7446dff93aad34db6279683851png.png',
        sellerName:'华莱士炸鸡汉堡(新桥店)',
        score:'4.3',
        monthSell:'1120',
        sendOutUp:'14.00',
        shippingFee:'1.00',
        distance:'2km',
        time:'21分钟',
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
        ]
    },
    {
        image:'https://cube.elemecdn.com/6/ff/b2eafe11cfbb8e5698d328334af97jpeg.jpeg',
        sellerName:'新概念土碗饭',
        score:'4.3',
        monthSell:'1120',
        sendOutUp:'14.00',
        shippingFee:'1.00',
        distance:'2km',
        time:'41分钟',
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

        ]
    },
    {
        image:'https://cube.elemecdn.com/b/b5/1cfd09539c63113f198296c0e9234png.png',
        sellerName:'荣味家大食堂',
        score:'2.3',
        monthSell:'1120',
        sendOutUp:'25.00',
        shippingFee:'3.00',
        distance:'1km',
        time:'35分钟',
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
        ]
    },
///......
    {
        image:'https://cube.elemecdn.com/e/59/b251507b1462065a4ba78cd02ea96jpeg.jpeg',
        sellerName:'鲜果帮',
        score:'4.5',
        monthSell:'1210',
        sendOutUp:'28.00',
        shippingFee:'3.00',
        distance:'0.3km',
        time:'10分钟',
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

        ]
    },

    {
        image:'https://cube.elemecdn.com/c/75/2bcd1f4aab6b6bfd2ecec7db6c201png.png',
        sellerName:'三顾冒菜（丰德国际店）',
        score:'3.3',
        monthSell:'2140',
        sendOutUp:'25.00',
        shippingFee:'3.00',
        distance:'500m',
        time:'25分钟',
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

        ]
    },

    {
        image:'https://cube.elemecdn.com/0/8b/7a8cc4c248e33d5c93624b9cb5a4bjpeg.jpeg',
        sellerName:'两胖仔大厨.小炒',
        score:'2.3',
        monthSell:'3210',
        sendOutUp:'15.00',
        shippingFee:'3.00',
        distance:'2km',
        time:'43分钟',
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

        ]
    },

    {
        image:'https://cube.elemecdn.com/a/f7/e3fbaa0d8d03ff2937356fc64c25cpng.png',
        sellerName:'大米先生（保利中心店）',
        score:'2.3',
        monthSell:'2220',
        sendOutUp:'15.00',
        shippingFee:'2.00',
        distance:'1.2km',
        time:'40分钟',
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
        ]
    }

];