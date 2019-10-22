

export  function queryRecommends() {

    return JSON.parse(JSON.stringify(recommends));
}
export  function queryFoods() {

    //深拷贝
    return JSON.parse(JSON.stringify(foodsList));
}

const recommends=[
    {
        id:'102992019029211109322',
        title:'小炒肉',
        image:'https://cube.elemecdn.com/b/4c/add62d0769150bbb221e619eced32jpeg.jpeg',
        monthSale:'432',
        praise:'100%',
        price:'27',
    },
    {
        id:'102992019029211102311',
        title:'宫保鸡丁',
        image:'https://cube.elemecdn.com/1/ea/5f30f4586a1b4ac4e9267a5eca304jpeg.jpeg',
        monthSale:'332',
        praise:'100%',
        price:'21',
    },
    {
        id:'102992019029441102311',
        title:'招牌拌白肉',
        image:'https://cube.elemecdn.com/7/28/c6a3dbe24297f5b96ef0caa413ba3jpeg.jpeg',
        monthSale:'452',
        praise:'100%',
        price:'25',
    },
    {
        id:'102992019029441102211',
        title:'麻婆豆腐',
        image:'https://cube.elemecdn.com/4/55/faebb053a6f4a112cb8099bfcf137jpeg.jpeg',
        monthSale:'532',
        praise:'100%',
        price:'22',
    },
    {
        id:'102992019029441102203',
        title:'砂锅酸汤肥牛',
        image:'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
        monthSale:'502',
        praise:'100%',
        price:'27',
    }

];


const foodsList=[

    {
        category:{name:'热销',details:'大家喜欢,吃才叫真好吃'},
        data:[
            {
                id:'1029920190209100001',
                title:'土豆丝',
                subTitle:'炝炒，清炒，酸辣，醋溜，如有特别，请备注',
                image:'https://cube.elemecdn.com/4/12/8caf13184f875e65b52c0271c2f4djpeg.jpeg',
                monthSale:'232',
                praise:'100%',
                price:'20'
            },
            {
                id:'1029920190209100002',
                title:'鸡米芽菜',
                subTitle:'主要原料:鸡肉',
                image:'https://cube.elemecdn.com/7/86/533a1c25ec60ad8faa1e2996e7687jpeg.jpeg',
                monthSale:'312',
                praise:'100%',
                price:'24'
            },
            {
                id:'1029920190209100003',
                title:'鱼香茄子',
                subTitle:'酸辣，醋溜，如有特别，请备注',
                image:'https://cube.elemecdn.com/2/56/205ec57c88ce99127fccf8e35d9e8jpeg.jpeg',
                monthSale:'312',
                praise:'100%',
                price:'29'
            },
            {
                id:'1029920190209100004',
                title:'青菜原子汤',
                subTitle:'主要原料：猪肉',
                image:'https://cube.elemecdn.com/5/04/b8be9dd6331c081edaf8be22bcb3fjpeg.jpeg',
                monthSale:'422',
                praise:'100%',
                price:'29'
            },
            {
                id:'1029920190209100004',
                title:'小炒肉',
                subTitle:'',
                image:'https://cube.elemecdn.com/b/ea/890750eeabe0b75cb4ba9c35ac3a7jpeg.jpeg',
                monthSale:'307',
                praise:'100%',
                price:'22'
            }
        ]

    },
    {
        category:{name:'米饭',details:'东北珍珠大米'},
        data:[
            {
                id:'1029920190209100006',
                title:'东北大米',
                subTitle:'清香型',
                image:'https://cube.elemecdn.com/e/b0/660241549ee62495d5a0c29b90da1jpeg.jpeg',
                monthSale:'1102',
                praise:'100%',
                price:'1'
            },


        ]

    },
    {
        category:{name:'私人订制',details:'餐具、泡菜'},
        data:[

            {
                id:'1029920190209100007',
                title: '泡菜',
                subTitle: '开胃泡菜',
                image: 'https://cube.elemecdn.com/a/14/cda0292fbe667bf99382c44b5d692jpeg.jpeg',
                monthSale: '544',
                praise: '100%',
                price: '0'
            }
        ]

    },
    {
        category:{name:'下饭菜',details:'超级下饭，别忘了点饭喔'},
        data:[
            {
                id:'1029920190209100008',
                title:'酸菜巴沙鱼',
                subTitle:'酸菜超级好吃，又下饭，需要加粉丝需要单独打电话点',
                image:'https://cube.elemecdn.com/8/f9/26bfea9920bfb95154b3a24db5d25jpeg.jpeg',
                monthSale:'232',
                praise:'98%',
                price:'28'
            },
            {

                id:'1029920190209100009',
                title: '麻辣巴沙鱼',
                subTitle: '',
                image: 'https://cube.elemecdn.com/2/cc/0a21ea8b96d04bf7bcbe2149c3695jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '28'
            },
            {

                id:'1029920190209100010',
                title: '六合巴沙鱼',
                subTitle: '主要原料：其他鱼类',
                image: 'https://cube.elemecdn.com/0/18/64742feee464cff186ae829e5c3a3jpeg.jpeg',
                monthSale: '402',
                praise: '98%',
                price: '28'
            },
            {
                id:'1029920190209100011',
                title: '老坛回锅',
                subTitle: '主要原料：猪肉',
                image: 'https://cube.elemecdn.com/4/fc/1ae5265b75b7ab6d77446a45b377ajpeg.jpeg',
                monthSale: '332',
                praise: '99%',
                price: '22'
            }

        ]

    },
    {
        category:{name:'特色菜',details:'常年热销招牌'},
        data:[
            {
                id:'1029920190209100012',
                title:'风味仔姜兔',
                subTitle:'主要原料：兔肉',
                image:'https://cube.elemecdn.com/0/fa/e9b2c9792c1cded05b79709f36639jpeg.jpeg',
                monthSale:'502',
                praise:'100%',
                price:'27'
            },

            {
                id:'1029920190209100013',
                title: '石锅老豆腐',
                subTitle: '',
                image: 'https://cube.elemecdn.com/8/b6/a9fac31070326fc5286d04ee94fcbjpeg.jpeg',
                monthSale: '242',
                praise: '99%',
                price: '17'
            },

            {
                id:'1029920190209100014',
                title: '干捞粉丝',
                subTitle: '主要原料：紫薯',
                image: 'https://cube.elemecdn.com/1/15/ccaf5cedbe2c8ef7b69eb379de910jpeg.jpeg',
                monthSale: '302',
                praise: '98%',
                price: '20'
            },
            {
                id:'1029920190209100015',
                title: '酸汤肘子',
                subTitle: '主要原料：猪肘肉',
                image: 'https://cube.elemecdn.com/4/c2/80ec27f78767a15fdbfff2ae42e8djpeg.jpeg',
                monthSale: '432',
                praise: '100%',
                price: '35'
            }

        ]

    },
    {
        category:{name:'素菜',details:'农家新鲜绿色菜园蔬菜'},
        data:[
            {
                id:'1029920190209100015',
                title:'豇豆茄子',
                subTitle:'',
                image:'https://cube.elemecdn.com/f/44/f34fa529f1a0dea189e06cf7032f3jpeg.jpeg',
                monthSale:'392',
                praise:'98%',
                price:'22'
            },

            {
                id:'1029920190209100017',
                title:'虎皮青椒',
                subTitle:'',
                image:'https://cube.elemecdn.com/f/85/b9581cda960d7f00373f65e0cc46bjpeg.jpeg',
                monthSale:'392',
                praise:'98%',
                price:'22'
            },
            {
                id:'1029920190209100018',
                title:'土豆丝',
                subTitle:'炝炒，清炒，酸辣，醋溜，如有特别，请备注，主要原料：土豆',
                image:'https://cube.elemecdn.com/4/12/8caf13184f875e65b52c0271c2f4djpeg.jpeg',
                monthSale:'392',
                praise:'98%',
                price:'22'
            },

        ]

    },
    {

        category:{name:'蒸菜',details:'味道很好喔，点一份试试吧'},
        data:[

            {
                id:'1029920190209100019',
                title:'砂锅酸汤肥牛',
                subTitle:'',
                image:'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale:'502',
                praise:'100%',
                price:'27'
            },
            {
                id:'1029920190209100020',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100021',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100022',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            }

        ]

    },
    {
        category:{name:'热菜',details:'热菜也很棒喔'},
        data:[
            {
                id:'1029920190209100023',
                title:'砂锅酸汤肥牛',
                subTitle:'',
                image:'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale:'502',
                praise:'100%',
                price:'27'
            },
            {
                id:'1029920190209100024',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100025',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100026',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            }

        ]

    },
    {
        category:{name:'凉菜',details:'可以下单备注辣度'},
        data:[
            {
                id:'1029920190209100027',
                title:'砂锅酸汤肥牛',
                subTitle:'',
                image:'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale:'502',
                praise:'100%',
                price:'27'
            },
            {
                id:'1029920190209100028',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100029',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100030',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            }

        ]

    },
    {

        category:{name:'汤类',details:''},
        data:[
            {
                id:'1029920190209100031',
                title:'砂锅酸汤肥牛',
                subTitle:'',
                image:'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale:'502',
                praise:'100%',
                price:'27'
            },
            {
                id:'1029920190209100032',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100033',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100034',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            }

        ]

    },
    {
        category:{name:'冒菜',details:''},
        data:[
            {
                id:'1029920190209100035',
                title:'砂锅酸汤肥牛',
                subTitle:'',
                image:'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale:'502',
                praise:'100%',
                price:'27'
            },
            {
                id:'1029920190209100036',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            },
            {
                id:'1029920190209100037',
                title: '砂锅酸汤肥牛',
                subTitle: '',
                image: 'https://cube.elemecdn.com/c/fa/757bbf502939274c8029b4addac29jpeg.jpeg',
                monthSale: '502',
                praise: '100%',
                price: '27'
            }

        ]

    },
    {

        category:{name:'小吃',details:'本店特色小吃'},
        data:[
            {
                id:'1029920190209100038',
                title:'红糖糍粑',
                subTitle:'主要原料：糯米',
                image:'https://cube.elemecdn.com/3/f4/1304184db98d8bbee60e9053522a5jpeg.jpeg',
                monthSale:'120',
                praise:'98%',
                price:'27'
            },
            {
                id:'1029920190209100030',
                title:'麻元',
                subTitle:'主要原料：糯米',

                image:'https://cube.elemecdn.com/6/24/aebd7662376771affe90a25d78730jpeg.jpeg',
                monthSale:'90',
                praise:'100%',
                price:'27'
            }


        ]

    },
    {
        category:{name:'饮料',details:'饭后一杯饮料更配喔'},
        data:[
            {
                id:'1029920190209100040',
                title:'酸角汁250ml',
                subTitle:'',
                image:'https://cube.elemecdn.com/b/a0/32cef878a8b1f5717054c92a2110ajpeg.jpeg',
                monthSale:'32',
                praise:'100%',
                price:'5'
            },
            {
                id:'1029920190209100041',
                title: '王老吉330ml',
                subTitle: '',
                image: 'https://cube.elemecdn.com/6/5c/9cd608bb085237cad400e95c465f4jpeg.jpeg',
                monthSale: '50',
                praise: '98%',
                price: '6'
            }
        ]

    }
];