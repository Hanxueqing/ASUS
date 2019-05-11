console.log("加载完成");
//配置当前整个项目所有模块的路径
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        parabola:"parabola",
        index:"index",
        /* 中间商品区 */
        //1F游戏专区加载数据
        "goods1-1":"goods1-1",
        "goods1-2":"goods1-2",
        "goods1-3":"goods1-3",
        "goods1-4":"goods1-4",

        //2F轻薄专区加载数据
        "goods2-1":"goods2-1",
        "goods2-2":"goods2-2",
        "goods2-3":"goods2-3",
        "goods2-4":"goods2-4",
        "goods2-5":"goods2-5",
        "goods2-6":"goods2-6",
        "goods3-1":"goods3-1",
        "goods4-1":"goods4-1",

        //本类销售榜
        "sales-chart":"sales-chart",

        //商品区选项卡
        "tab_1":"tab_1",
        "tab_2":"tab_2",
        "tab_3":"tab_3",
        "tab_4":"tab_4",
        "tab_5":"tab_5",

        //头部导航栏选项卡加入数据
        "nav_1":"nav_1",
        "nav_2":"nav_2",
        "nav_3":"nav_3",
        "nav_4":"nav_4",

        //头部导航栏
        "nav_tab":"nav_tab",

        //侧边栏选项卡加入数据
        "sidebar_1":"sidebar_1",
        "sidebar_2":"sidebar_2",
        "sidebar_3":"sidebar_3",
        "sidebar_4":"sidebar_4",
        "sidebar_5":"sidebar_5",
        "sidebar_6":"sidebar_6",
        "sidebar_7":"sidebar_7",
        "sidebar_8":"sidebar_8",

        //侧边栏选项卡
        "sidebar_tab":"sidebar_tab",

        // 商品区轮播图
        "module_slide_1":"module_slide_1",
        "module_slide_2":"module_slide_2",

        //A!有内容区域数据加载
        "hot_artical":"hot_artical",

        //footer
        "footer":"footer",

        //购物车
        "shopcar":"shopcar",

        //页面跳转
        "openNewHtml":"openNewHtml",
    },
    shim:{
        "jquery-cookie":['jquery'],
        "parabola":{
            exports:"_"
        }
    }
})
require(["slide","index","goods1-1","goods1-2","goods1-3","goods1-4","goods2-1","goods2-2","goods2-3","goods2-4","goods2-5","goods2-6","goods3-1","goods4-1","sales-chart","tab_1","tab_2","tab_3","tab_4","tab_5","nav_1","nav_2","nav_3","nav_4","nav_tab","sidebar_1","sidebar_2","sidebar_3","sidebar_4","sidebar_5","sidebar_6","sidebar_7","sidebar_8","sidebar_tab","module_slide_1","module_slide_2","hot_artical","footer","shopcar","openNewHtml"],function(slide,index,goods_1_1,goods_1_2,goods_1_3,goods_1_4,goods_2_1,goods_2_2,goods_2_3,goods_2_4,goods_2_5,goods_2_6,goods_3_1,goods_4_1,sales_chart,tab_1,tab_2,tab_3,tab_4,tab_5,nav_1,nav_2,nav_3,nav_4,nav_tab,sidebar_1,sidebar_2,sidebar_3,sidebar_4,sidebar_5,sidebar_6,sidebar_7,sidebar_8,sidebar_tab,module_slide_1,module_slide_2,hot_artical,footer,shopcar,openNewHtml){
    slide.slide();
    index.index();
    goods_1_1.goods_1_1();
    goods_1_2.goods_1_2();
    goods_1_3.goods_1_3();
    goods_1_4.goods_1_4();
    goods_2_1.goods_2_1();
    goods_2_2.goods_2_2();
    goods_2_3.goods_2_3();
    goods_2_4.goods_2_4();
    goods_2_5.goods_2_5();
    goods_2_6.goods_2_6();
    goods_3_1.goods_3_1();
    goods_4_1.goods_4_1();
    sales_chart.sales_chart();
    tab_1.tab_1();
    tab_2.tab_2();
    tab_3.tab_3();
    tab_4.tab_4();
    tab_5.tab_5();
    nav_1.nav_1();
    nav_2.nav_2();
    nav_3.nav_3();
    nav_4.nav_4();
    nav_tab.nav_tab();
    sidebar_1.sidebar_1();
    sidebar_2.sidebar_2();
    sidebar_3.sidebar_3();
    sidebar_4.sidebar_4();
    sidebar_5.sidebar_5();
    sidebar_6.sidebar_6();
    sidebar_7.sidebar_7();
    sidebar_8.sidebar_8();
    sidebar_tab.sidebar_tab();
    module_slide_1.module_slide_1();
    module_slide_2.module_slide_2();
    hot_artical.hot_artical();
    footer.footer();
    shopcar.shopcar();
    openNewHtml.openNewHtml();
})