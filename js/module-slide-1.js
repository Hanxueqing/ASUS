define(['jquery'],function($){
    function module_slide_1(){
        $(function(){
            $("a").click(function(){
                return false;
            })
            var aBtns = $('.tab_body_1').find("ol").find("li");
            //var oUl = $(".module-slide").find("ul");
            //var aLis = oUl.find(".slide-item");
            var oUl = $(".tab_body_1").find("ul");
            var aLis = $(".tab_body_1").find(".slide-item");
            //alert(aLis.length);

            oUl.innerHTML += oUl.innerHTML;
            //oUl.style.width = 1920 * aLis.length + "px";
            oUl.css("width",777 * aLis.length);

            var iNow = 0;//设置当前显示的图片的下标
            /* aBtns.attr("class","").eq(0).attr("class","active"); */
            var timer = null;

            //给按钮添加点击事件
            aBtns.click(function(){
                iNow = $(this).index();
                tab();
            })

            $(".btn_left").find("a").on("click",function(){
                iNow--;
                if(iNow < 0){
                    iNow = 0;
                }
                tab();
            })
            $(".btn_right").find("a").on("click",function(){
                iNow++;
                tab();
                if(iNow > aLis.size()){
                    iNow = aLis.size() - 1;
                }
            })



            //启动定时器,每隔一秒滚动一次
            timer = setInterval(function(){
                tab();
                iNow++;
            },2000);

            //给整个banner图,添加移入移出
            $("#module-slide").mouseenter(function(){
                clearInterval(timer);
            })
            $("#module-slide").mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },2000);
            })
            
            function tab(){
                //alert(aLis.size());
                aBtns.attr("class","").eq(iNow).attr("class","active");
                if(iNow == aLis.size() - 1){
                    aBtns.eq(0).attr("class","active");
                }
                oUl.stop().animate({
                    left:-777 * iNow
                },500,function(){
                    //动画结束的时候,如果是最后一张图片
                    if(iNow == aLis.size()){
                        oUl.css("left",0);
                        iNow = 0;
                    } 
                })
            }
        })
    }

    return{
        module_slide_1:module_slide_1,
    }
})