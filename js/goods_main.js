console.log("加载完成");
//配置当前整个项目所有模块的路径
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        parabola:"parabola",
        "goods4-1":"goods4-1",
        "footer":"footer",
        "magnifier":"magnifier",
        
    },
    shim:{
        "jquery-cookie":['jquery'],
        "parabola":{
            exports:"_"
        }
    }
})
require(["goods4-1","footer","magnifier"],function(goods_4_1,footer,magnifier){
    goods_4_1.goods_4_1();
    footer.footer();
    magnifier.magnifier();
})