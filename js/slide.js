define(['jquery'],function($){
    function slide(){
        $(function(){
            
            var aBtns = $('.play').find("ol").find("li");
            var oUl = $(".play").find("ul");
            var aLis = oUl.find("li");
            //alert(aLis.length);

            oUl.innerHTML += oUl.innerHTML;
            //oUl.style.width = 1920 * aLis.length + "px";
            oUl.css("width",1920 * aLis.length);

            var iNow = 0;//设置当前显示的图片的下标
            /* aBtns.attr("class","").eq(0).attr("class","active"); */
            var timer = null;

            //给按钮添加点击事件
            aBtns.click(function(){
                iNow = $(this).index();
                tab();
            })

            //启动定时器,每隔一秒滚动一次
            timer = setInterval(function(){
                tab();
                iNow++;
            },2000);

            //给整个banner图,添加移入移出
            $("#play").mouseenter(function(){
                clearInterval(timer);
            })
            $("#play").mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },2000);
            })
            
            function tab(){
                aBtns.attr("class","").eq(iNow).attr("class","active");
                if(iNow == aLis.size() - 1){
                    aBtns.eq(0).attr("class","active");
                }
                oUl.stop().animate({
                    left:-1920 * iNow
                },500,function(){
                    //动画结束的时候,如果是最后一张图片
                    if(iNow == aLis.size() - 1){
                        oUl.css("left",0);
                        iNow = 0;
                    } 
                })
            }
        })
    }

    return{
        slide:slide,
    }
})