define(['jquery'],function($){
    function openNewHtml(){
        $(function(){
            $(".category-link").on("click",function(){
                window.location.href="goodsList.html"; 
            })
            $(".logoHtml").on("click",function(){
                window.location.href="index.html"; 
            })
            $(".login_button").on("click",function(){
                window.location.href="login.html"; 
            })
            $(".register_button").on("click",function(){
                window.location.href="register.html"; 
            })
            $(".openGoods").on("click",function(){
                window.location.href="goodsDetail.html"; 
            })
            $("#topay").on("click",function(){
                window.location.href="goodsCar.html"; 
            })
            


        })
    }
    return{
        openNewHtml:openNewHtml
    }
})