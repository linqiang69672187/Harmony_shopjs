export default {
    data: {
        pageWord:{
            searchKeyWord:'寻找报表、店铺'
        },
        titleList: ['热销单品', '精品推荐', '智慧生活', '年货节'],
        contentList: ['First', 'Second', 'Third', 'Four'],
        flag: 1,
        zeroFlag: 0,
        oneFlag: 1,
        twoFlag: 2,
        threeFlag: 3,
        fourFlag: 4,
        allList: [],
        latestList: [],
        hotList: [
                {
                    title: 'HUAWEI nova 8 Pro ',
                    content: '10:08限时开售',
                    price: '3999',
                    imgSrc: "/common/picture/HW (1).png"
                }, {
                       title: 'HUAWEI Mate 30E Pro 5G',
                       content: '享3期免息  ',
                       price: '5299',
                       imgSrc: "/common/picture/HW (2).png"
                   }, {
                          title: 'HUAWEI MatePad Pro',
                          content: '旗舰甄选 ',
                          price: '3799',
                          imgSrc: "/common/picture/HW (3).png"
                      }, {
                             title: '华为畅享20 SE',
                             content: '新品上市 ',
                             price: '1499',
                             imgSrc: "/common/picture/HW (4).png"
                         }, {
                                title: 'HUAWEI WATCH FIT',
                                content: '智能生活助手',
                                price: '769',
                                imgSrc: "/common/picture/HW (5).png"
                            }
        ],
        fineProductList: [
                {
                    title: 'HUAWEI MateBook X Pro 2021款',
                    content: '商务轻薄笔记本  ',
                    price: '9999',
                    imgSrc: "/common/picture/HW (6).png"
                }, {
                       title: 'HUAWEI Mate 30 RS 保时捷设计',
                       content: '致敬时代 ',
                       price: '12999',
                       imgSrc: "/common/picture/HW (7).png"
                   }, {
                          title: '华为智慧屏 55英寸',
                          content: '享3期免息',
                          price: '4299',
                          imgSrc: "/common/picture/HW (8).png"
                      }, {
                             title: '华为畅享20 Pro',
                             content: '购机赠耳机 ',
                             price: '1999',
                             imgSrc: "/common/picture/HW (9).png"
                         }, {
                                title: '华为智能体脂秤 3',
                                content: '享3期免息',
                                price: '169',
                                imgSrc: "/common/picture/HW (10).png"
                            }
        ],
        wisdomList: [
                {
                    title: 'HUAWEI P40 Pro+ 5G',
                    content: '限量赠保护壳   ',
                    price: '7988',
                    imgSrc: "/common/picture/HW (11).png"
                }, {
                       title: 'HUAWEI FreeBuds Pro',
                       content: '享3期免息',
                       price: '1099',
                       imgSrc: "/common/picture/HW (12).png"
                   }, {
                          title: 'HUAWEI MateBook X',
                          content: '享3期免息   ',
                          price: '8999',
                          imgSrc: "/common/picture/HW (13).png"
                      }, {
                             title: '红帕智能降温杯',
                             content: '智能喝水提醒   ',
                             price: '179',
                             imgSrc: "/common/picture/HW (14).png"
                         }, {
                                title: '野小兽智能动感单车S1',
                                content: '静音不扰邻   ',
                                price: '1299',
                                imgSrc: "/common/picture/HW (15).png"
                            }],
    },
    onInit() {
        this.title = this.$t('strings.world');

    },
    submitColumn(e) {
        console.log(e.text);
    },
    tabchange(e){
        this.allList = [];
        if (e.index === this.zeroFlag) {
            this.allList = [...this.hotList, ...this.fineProductList, ...this.wisdomList];
        } else if (e.index === this.oneFlag) {
            this.allList = this.hotList;
        } else if (e.index === this.twoFlag) {
            this.allList = this.fineProductList;
        } else if (e.index === this.threeFlag) {
            this.allList = this.wisdomList;
        }
    }
}
