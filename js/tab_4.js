define(['jquery'],function($){
    function tab_4(){
        $(function(){
            $(".tab_head_4").on("mouseover","li",function(){
                $(this).addClass("tab_head_active");

                //alert($(this).index());
                
                $(".tab_body_4").find(".tab_body_item").css("display","none").eq($(this).index()).css("display","block");

            })
            $(".tab_head_4").on("mouseleave","li",function(){
                $(this).removeClass("tab_head_active");
            })

        })
    }
    return{
        tab_4:tab_4
    }
})