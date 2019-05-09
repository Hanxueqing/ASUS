console.log("加载完成");
//配置当前整个项目所有模块的路径
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        parabola:"parabola",
        "login":"login",
        
    },
    shim:{
        "jquery-cookie":['jquery'],
        "parabola":{
            exports:"_"
        }
    }
})
require(["login"],function(login){
    login.login();

})