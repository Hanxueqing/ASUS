define(['jquery'],function($){
    function tab(){
        $(function(){
            $(".hs_tab_head").on("mouseover","li",function(){
                $(this).addClass("tab_head_active");

                //alert($(this).index());
                
                $(".hs_tab_body").find(".tab_body_item").css("display","none").eq($(this).index()).css("display","block");

            })
            $(".hs_tab_head").on("mouseleave","li",function(){
                $(this).removeClass("tab_head_active");
            })

        })
    }
    return{
        tab:tab
    }
})