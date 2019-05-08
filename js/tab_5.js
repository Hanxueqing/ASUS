define(['jquery'],function($){
    function tab_5(){
        $(function(){
            $(".tab_head_5").on("mouseover","li",function(){
                $(this).addClass("tab_head_active");

                //alert($(this).index());
                
                $(".tab_body_5").find(".tab_body_item").css("display","none").eq($(this).index()).css("display","block");

            })
            $(".tab_head_5").on("mouseleave","li",function(){
                $(this).removeClass("tab_head_active");
            })

        })
    }
    return{
        tab_5:tab_5
    }
})