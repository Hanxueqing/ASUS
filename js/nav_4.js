define(['jquery'],function($){
    function nav_4(){
        $(function(){
            console.log(333);
            //通过ajax加载数据
			$.ajax({
				url: "../data/hot_activity.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
                    for(var i = 0; i < arr.length; i++){
						var node = $(`<li>
                        <a>
                            <img src = "${arr[i].img}">
                            <p style = "padding-top:3px;">${arr[i].title}</p>
                        </a>
                    </li>`);
					node.appendTo("#hot-activity");
					}
				},
				error: function(msg){
					alert(msg);
				}
			})
        })
    }
    return{
        nav_4:nav_4
    }
})