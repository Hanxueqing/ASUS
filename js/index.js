define(['parabola','jquery','jquery-cookie'],function(parabola,$){
    function index(){
        console.log(1)
        $(function(){
            //通过ajax加载数据
			$.ajax({
				url: "../data/tab.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
					for(var i = 0; i < arr.length; i++){
						var node = $(`<li class = "hot_sale_item ga-product">
                        <div class = "hot_sale_pic">
                            <a class = "relative" href = "" target = "_blank">
                                <img alt = "" src = "${arr[i].img}">
                            </a>
                        </div>
                        <div class = "hot_sale_name">
                            <a href = "" target = "_blank">
                                <p class = "index-goods-tit common-intro">${arr[i].title}</p>
                                <p class = "index-goods-des common-intro">${arr[i].description}</p>
                                <div class = "hot_sale_price">${arr[i].price}</div>
                                <p style = "text-align:center;">
                                    <span class = "market_price" style = "color:#6f6f6f;font-size:12px;text-decoration:line-through;">${arr[i].preprice}</span>
                                </p>
                                <div class="sc">
                                    <div id = '${arr[i].id}' class="action-addtocart">加入购物车</div>
                                </div>
                            </a>
                        </div>
                    </li>`);
					node.appendTo(".hot_sale ul");
						
					}

				},
				error: function(msg){
					alert(msg);
				}
			})
        })
    }
    return{
        index:index
    }
})