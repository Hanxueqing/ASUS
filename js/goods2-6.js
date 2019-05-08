define(['parabola','jquery','jquery-cookie'],function(parabola,$){
    function goods_2_6(){
        $(function(){
            //通过ajax加载数据
			$.ajax({
				url: "../data/sales-chart.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
					for(var i = 0 ; i < 8; i++){
                        if( i == 0 || i == 1){
                            var node = $(`<li id = "hot" class = "goods-item clearfix">
                        <span class = "num-1 goods-num">${arr[i].rank}</span>
                        <!-- 图片 -->
                        <div class = "goods-pic">
                            <a href = "">
                                <img src = "${arr[i].img}">
                            </a>
                        </div>
                        <!-- 信息 -->
                        <div class = "goods-info">
                            <h3 class = "goods-name">
                                <a>${arr[i].title}</a>
                            </h3>
                            <div class = "goods-price">
                                <i>${arr[i].price}</i>
                            </div>
                        </div>
                    </li>`);
                        }else{
                            var node = $(`<li id = "hot" class = "goods-item ga-product clearfix">
                        <span class = "num-1 goods-num">${arr[i].rank}</span>
                        <!-- 图片 -->
                        <div class = "goods-pic">
                            <a href = "">
                                <img src = "${arr[i].img}">
                            </a>
                        </div>
                        <!-- 信息 -->
                        <div class = "goods-info">
                            <h3 class = "goods-name">
                                <a>${arr[i].title}</a>
                            </h3>
                            <div class = "goods-price">
                                <i>${arr[i].price}</i>
                            </div>
                        </div>
                    </li>`);
                        }
						
					node.appendTo(".right_list_2");
						
					}

				},
				error: function(msg){
					alert(msg);
				}
			})
        })
    }
    return{
        goods_2_6:goods_2_6
    }
})