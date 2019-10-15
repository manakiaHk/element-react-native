export default  function queryRecommend(pageIndex,pageSize) {

    let start =  pageIndex*pageSize;
    let end =  pageIndex*pageSize+pageSize;

    return recommendJson.slice(start,end);
};

const  recommendJson = [
    {
        title:'牛肉炒米粉',
        image:'https://cube.elemecdn.com/b/4c/add62d0769150bbb221e619eced32jpeg.jpeg',
        monthSale:'432',
        praise:'98%',
        price:'27',
        recommendWay:'您可能感兴趣的美食',
        moneyOff:'满22减5',
        seller:'疆食记新疆米粉料理'
    },

    {
        title:'深情满满的乌鸡汤套餐',
        image:'https://cube.elemecdn.com/9/32/921c6415b888baf6f87f4f226793ejpeg.jpeg',
        monthSale:'432',
        praise:'98%',
        price:'26',
        recommendWay:'根据您的下单历史推荐',
        moneyOff:'满23减5',
        seller:'维西炖品(倪家桥路店)'
    },
    {
        title:'炒土豆丝',
        image:'https://cube.elemecdn.com/2/c8/76126e7a29e87c2e1d17d2ef62a78jpeg.jpeg',
        monthSale:'232',
        praise:'98%',
        price:'20',
        recommendWay:'您可能感兴趣的美食',
        moneyOff:'满20减3',
        seller:'鲜美城土菜馆'
    },
    {
        title:'鱼香肉丝',
        image:'https://cube.elemecdn.com/d/ab/d3e12917badabb54736e802a656d3jpeg.jpeg',
        monthSale:'532',
        praise:'98%',
        price:'24',
        recommendWay:'您可能感兴趣的美食',
        moneyOff:'满24减3',
        seller:'鲜美城土菜馆'
    },
    {
        title:'蔬菜汤',
        image:'https://cube.elemecdn.com/5/0a/1518eae5d3b25e3fe05e091965bf6jpeg.jpeg',
        monthSale:'322',
        praise:'98%',
        price:'18',
        recommendWay:'根据您的下单历史推荐',
        moneyOff:'满23减5',
        seller:'清周小菜(锦兴路店)'
    },
    {
        title:'手撕包菜',
        image:'https://cube.elemecdn.com/6/55/af35f5ffc5d943e3f7b25fa82b0b7jpeg.jpeg',
        monthSale:'422',
        praise:'99%',
        price:'30',
        recommendWay:'根据您的下单历史推荐',
        moneyOff:'满23减5',
        seller:'清周小菜(锦兴路店)'
    },


    //
    {
        title:'提花豆汤饭',
        image:'https://cube.elemecdn.com/a/9f/ae32d34a8fe794b85a4c56aeff23fjpeg.jpeg',
        monthSale:'222',
        praise:'99%',
        price:'22',
        recommendWay:'根据您的下单历史推荐',
        moneyOff:'满23减5',
        seller:'李豆汤饭庄（东大门总店）'
    },
    {
        title:'梅菜扣肉',
        image:'https://cube.elemecdn.com/8/53/27d2d1c3504d951ff325e987046b3jpeg.jpeg',
        monthSale:'422',
        praise:'99%',
        price:'30',
        recommendWay:'您可能感兴趣的美食',
        moneyOff:'满23减5',
        seller:'维希加炖品'
    },
    {
        title:'猪蹄套餐',
        image:'https://cube.elemecdn.com/7/48/3a40727f49e54cd98c66086324e44jpeg.jpeg',
        monthSale:'242',
        praise:'99%',
        price:'24',
        recommendWay:'根据您的下单历史推荐',
        moneyOff:'满20减5',
        seller:'隆江猪脚饭（领事馆店）'
    },
    {
        title:'猪肘拼烤鸭饭',
        image:'https://cube.elemecdn.com/b/3a/42bda3eb97d7350dcf153961209b5jpeg.jpeg',
        monthSale:'422',
        praise:'99%',
        price:'23',
        recommendWay:'根据您的下单历史推荐',
        moneyOff:'满23减5',
        seller:'隆江猪脚饭（领事馆店）'
    },
    {
        title:'清炒小菜',
        image:'https://cube.elemecdn.com/f/93/2f0241e0a4cf5eba75352b96bfa7ejpeg.jpeg',
        monthSale:'122',
        praise:'99%',
        price:'16',
        recommendWay:'您可能感兴趣的美食',
        moneyOff:'满23减5',
        seller:'清周小菜(锦兴路店)'
    },



];