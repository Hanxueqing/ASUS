define(['parabola','jquery','jquery-cookie'],function(parabola,$){
    function hot_artical(){
        console.log(1)
        $(function(){
            //通过ajax加载数据
			$.ajax({
				url: "../data/hot_artical.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
					for(var i = 0; i < arr.length; i++){
						var node = $(`<li class ="h2-index-s2-goods-item">
                        <h2 class = "title">${arr[i].title}</h2>
                        <p class = "content">${arr[i].description}</p>
                        <p class = "abstract">${arr[i].content}</p>
                        <div class = "imgs">
                            <img src = "${arr[i].img}">
                        </div>
                    </li>`);
					node.appendTo(".hot_artical ul");
						
					}

				},
				error: function(msg){
					alert(msg);
				}
			})
        })
    }
    return{
        hot_artical:hot_artical
    }
})