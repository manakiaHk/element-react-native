
export default  function queryMyOrder(pageIndex,pageSize) {


    let start =  pageIndex*pageSize;
    let end =  pageIndex*pageSize+pageSize;

    return myOrders.slice(start,end);
};


const myOrders = [
    {
        orderId:'01232019890',
        shop:'唯希炖品',
        image:require('../screen/order/image/ic-wxjdp.png'),
        date:'2019-09-29 17:45',
        details:'冬瓜绿豆玉米猪蹄...等3件商品',
        orderState:'订单已送达',
        money:'32.50',
    },
    {
        orderId:'01232019806',
        shop:'三棵树家常菜',
        image:require('../screen/order/image/ic-sks.png'),
        date:'2019-09-28 18:15',
        details:'红烧排骨 等2件商品',
        orderState:'订单已送达',
        money:'22.50'
    },
    {
        orderId:'01232019832',
        shop:'七十一号豆汤饭(华尔兹店)',
        image:require('../screen/order/image/ic-dtf.png'),
        date:'2019-09-26 17:33',
        details:'老火鸡顿鸡汤饭...等2件商品',
        orderState:'订单已送达',
        money:'25.40'
    },
    {
        orderId:'01232019812',
        shop:'翘脚牛肉(小学路店)',
        image:require('../screen/order/image/ic-qjnr.png'),
        date:'2019-09-25 18:45',
        details:'牛肉+牛杂+干碟...等1件商品',
        orderState:'订单已送达',
        money:'19.20'
    },
    {
        orderId:'01232019822',
        shop:'乡村基(玉林店)',
        image:require('../screen/order/image/ic-xcj.png'),
        date:'2019-09-23 19:02',
        details:'酸辣姜爆肉丝盖... 等1件商品',
        orderState:'订单已送达',
        money:'32.50'
    },
    {
        orderId:'01232019809',
        shop:'乡村小厨',
        image:require('../screen/order/image/ic-xcxc.png'),
        date:'2019-09-9 19:02',
        details:'油渣莲白 等4件商品',
        orderState:'订单已送达',
        money:'36.40'
    },
    {
        orderId:'01232019824',
        shop:'玖玖牛肉',
        image:require('../screen/order/image/ic-jjqjnr.png'),
        date:'2019-09-5 19:02',
        details:'牛杂+牛肉+油碟 等4件商品',
        orderState:'订单已送达',
        money:'32.40'
    },
    {
        orderId:'012320198275',
        shop:'乡村基(玉林店)',
        image:require('../screen/order/image/ic-xcj.png'),
        date:'2019-09-4 19:02',
        details:'茄子肉丝盖饭 等1件商品',
        orderState:'订单已送达',
        money:'32.40'
    },
    {
        orderId:'01232019842',
        shop:'乡村小厨',
        image:require('../screen/order/image/ic-xcxc.png'),
        date:'2019-08-30 19:02',
        details:'单人大份牛肉 等4件商品',
        orderState:'订单已送达',
        money:'30.40'
    },
    {
        orderId:'01232019872',
        shop:'董小姐酸菜鱼',
        image:require('../screen/order/image/ic-dxj.png'),
        date:'2019-08-30 19:02',
        details:'大份酸菜鱼 等2件商品',
        orderState:'订单已送达',
        money:'44.40'
    },
    {
        orderId:'01232019332',
        shop:'全牛道翘脚牛肉',
        image:require('../screen/order/image/ic-qndqjnr.png'),
        date:'2019-08-29 19:02',
        details:'单人大份牛肉 等4件商品',
        orderState:'订单已送达',
        money:'30.40'
    },

    {
        orderId:'01232019325',
        shop:'乡村小厨',
        image:require('../screen/order/image/ic-xcxc.png'),
        date:'2019-08-28 19:02',
        details:'红烧猪蹄 等2件商品',
        orderState:'订单已送达',
        money:'32.40'
    },
];

