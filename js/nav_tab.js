define(['jquery'],function($){
    function nav_tab(){
        $(function(){
            $(".nav_item").on("mouseover",function(){
                $(this).find("a").css("color","#00a8ff");
                $("#nav-list-show").css("display","block");
                $("#nav-list-show").find("ul").css("display","none").eq($(this).index() - 1).css("display","block");

            })
            $(".nav_item").on("mouseleave",function(){
                $(this).find("a").css("color","#333");
            })
            $("#nav-list-show").on("mouseleave",function(){
                //$(this).css("color","#333");
                $("#nav-list-show").css("display","none");
                $("#nav-list-show").find("ul").css("display","none");
            })

        })
    }
    return{
        nav_tab:nav_tab
    }
})