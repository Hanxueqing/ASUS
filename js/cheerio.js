//创建spider.js编写网络爬虫案例
//http 端口号:80
//https 端口号:443

const http = require("http");
const https = require("https");

//2-https://www.lagou.com/ 爬取拉钩网菜单页
var url = "https://www.asus.com.cn/";

https.get(url,function(res){//response 响应对象
    var html = "";//拼接下载下来的数据的
    //每次下载到数据会触发
    res.on("data",function(data){
        //data参数,下载到的数据
        html += data;
    })
    //数据传输完成以后,会执行这个事件
    res.on("end",function(){
        var arr = filterMenu(html);
        console.log(arr);//[ '技术', '产品', '设计', '运营', '市场', '销售', '职能', '游戏' ]
    })
    //报错
    res.on("error",function(error){
        console.log(error);
    })

})

//cheerio 功能:处理页面上的数据
const cheerio = require("cheerio");

//过滤数据
function filterMenu(html){
    var $ = cheerio.load(html);
    var arr = [];//存储,我们找到的技术分类
    // $(".mainNavs .menu_box h2").each(function(item){
    //     arr.push($(item).html());
    // })
    $(".node-index").each(function(index,item){
        arr.push($(item).find("a").text().trim());
    })
    return arr;
}