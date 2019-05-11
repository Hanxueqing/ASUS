console.log("加载完成");
//配置当前整个项目所有模块的路径
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        parabola:"parabola",
        index:"index",

        //头部导航栏选项卡加入数据
        "nav_1":"nav_1",
        "nav_2":"nav_2",
        "nav_3":"nav_3",
        "nav_4":"nav_4",

        //头部导航栏
        "nav_tab":"nav_tab",

        //footer
        "footer":"footer",

        //购物车
        "shopcar":"shopcar",

        //商品列表加载
        "goodsList":"goodsList",

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
require(["index","nav_1","nav_2","nav_3","nav_4","nav_tab","footer","shopcar","goodsList","openNewHtml"],function(index,nav_1,nav_2,nav_3,nav_4,nav_tab,footer,shopcar,goodsList,openNewHtml){
    index.index();
    nav_1.nav_1();
    nav_2.nav_2();
    nav_3.nav_3();
    nav_4.nav_4();
    nav_tab.nav_tab();
    footer.footer();
    shopcar.shopcar();
    goodsList.goodsList();
    openNewHtml.openNewHtml();
})