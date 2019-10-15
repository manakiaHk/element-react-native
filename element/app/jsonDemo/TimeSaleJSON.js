export default  function queryTimeSale(pageIndex,pageSize) {

    let start =  pageIndex*pageSize;
    let end =  pageIndex*pageSize+pageSize;

    return timeSaleJson.slice(start,end);
};

const  timeSaleJson = [

    {
        timeSale:'限时优惠',
        title:'3元品质联盟红包',
        image:'https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg',
        praise:'98%',
        price:'23',
        vipDiscount:'8折',
        goldCoin:'30'},
    {
        timeSale:'特价换购',
        title:'数码经络按摩仪',
        image:'https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg',
        praise:'98%',
        price:'200',
        vipDiscount:'8.5折',
        goldCoin:'230'},
    {
        timeSale:'特价换购',
        title:'机械手感背光键盘',
        image:'https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg',
        price:'98',
        vipDiscount:'9折',
        goldCoin:'102'
    },
    //
    {
        timeSale:'特价换购',
        title:'猫星萌物充电宝',
        image:'https://yun.duiba.com.cn/images/201612/2amqjblx28.jpg',
        price:'90',
        vipDiscount:'9折',
        goldCoin:'88'
    },
    {
        timeSale:'特价换购',
        title:'银杏蓝牙无线充电宝',
        image:'https://yun.duiba.com.cn/images/201809/240b8i4cz5.jpeg',
        price:'98',
        vipDiscount:'9折',
        goldCoin:'99'
    },
    {
        timeSale:'特价换购',
        title:'全自动雨伞',
        image:'https://yun.duiba.com.cn/images/201903/aedufdod54.jpg',
        price:'48',
        vipDiscount:'9折',
        goldCoin:'30'
    }

    ];