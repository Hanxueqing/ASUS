define(['jquery'],function($){
    function magnifier(){
        $(function(){
            $(".product-album-pic").mouseenter(function(){
                $("#shade,#big").css("display","block");
            })
            $(".product-album-pic").mouseleave(function(){
                $("#shade,#big").css("display","none");
            })
            $(".product-album-pic").mousemove(function(ev){
                var l = ev.clientX - 50 - $(this).offset().left;
                var t = ev.clientY - 50 - $(this).offset().top;
                //限制出界
                if(l <= 0){
                    l = 0;
                }
                if(l >= 500){
                    l = 500;
                }
                if(t <= 0){
                    t = 0;
                }
                if(t >= 500){
                    t = 500;
                }
                $("#shade").css({
                    left:ev.clientX - 125 - $(this).offset().left,
                    top:ev.clientY - 100 - $(this).offset().top + $(document).scrollTop(),
                })
                //同时移动大图片的坐标
                $("#big img").css({
                    left:2 * -l,
                    top:2 * -t - $(document).scrollTop(),
                })
            })
        })
    }
    return{
        magnifier:magnifier
    }
})