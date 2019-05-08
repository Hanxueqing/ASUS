define(['parabola','jquery','jquery-cookie'],function(parabola,$){
    function goods_2_5(){
        $(function(){
            //通过ajax加载数据
			$.ajax({
				url: "../data/goods.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
					for(var i = 12; i < 18; i++){
						var node = $(`<!-- 单个商品 -->
                        <div class = "hs-index-s1-goods-item">
                            <!-- 图片区 -->
                            <div class = "hs-index-s1-goods-pic">
                                <a class = "relative" href = "">
                                    <img src = "${arr[i].img}">
                                </a>
                            </div>
                            <!-- 标题区 -->
                            <div class = "hs-index-s1-goods-info">
                                <a href = "">
                                    <p class = "index-goods-tit common-intro">${arr[i].title}</p>
                                    <p class = "index-goods-des common-intro">${arr[i].description}</p>
                                </a>
                            </div>
                            <!-- 价格区 -->
                            <div class = "hs-index-s1-goods-price">
                                <span>${arr[i].price}</span>
                                <span class = "market_price" style = "color:#6f6f6f;margin-left:10px;font-size:12px;text-decoration:line-through;">${arr[i].preprice}</span>
                            </div>
                        </div>`);
					node.appendTo(".goods_2_5");
						
					}

				},
				error: function(msg){
					alert(msg);
				}
			})
        })
    }
    return{
        goods_2_5:goods_2_5
    }
})