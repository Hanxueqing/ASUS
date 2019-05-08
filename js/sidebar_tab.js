define(['jquery'],function($){
    function sidebar_tab(){
        $(function(){
            $(".category-link").on("mouseover",function(){
                $(this).css("background-color","#00a8ff");
                $(".sidebar-sub-box").css("display","none");
                $(this).siblings().css("display","block");
                $(this).siblings().on("mouseover",function(){
                    $(this).css("display","block");
                })
                $(this).siblings().on("mouseleave",function(){
                    $(this).css("display","none");
                })

            })

            $(".category-link").on("mouseleave",function(){
                $(this).css("background","none");
                $(".sidebar-sub-box").css("display","none");
                //$(this).siblings().css("display","none");
            })
            // $(".sidebar-sub-box").on("mouseover",function(){
            //     $(".sidebar-sub-box").css("display","block");
            // })
            // $(".sidebar-sub-box").on("mouseleave",function(){
            //     $(".sidebar-sub-box").css("display","none");
            // })

        })
    }
    return{
        sidebar_tab:sidebar_tab
    }
})