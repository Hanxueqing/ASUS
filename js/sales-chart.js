define(['jquery'],function($){
    function sales_chart(){
        $(function(){
            $(".goods-list").on("mouseover","li",function(){
                if($(this).index() != 0 && $(this).index() != 1){
                    $(this).removeClass("ga-product");
                }
            })
            $(".goods-list").on("mouseleave","li",function(){
                if($(this).index() != 0 && $(this).index() != 1){
                    $(this).addClass("ga-product");
                }
            })

        })
    }
    return{
        sales_chart:sales_chart
    }
})