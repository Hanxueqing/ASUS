define(['jquery'],function($){
    function nav_2(){
        $(function(){
            console.log("nav");
            //通过ajax加载数据
			$.ajax({
				url: "../data/nav.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
                    for(var i = 14; i < 19; i++){
						var node = $(`<li class = "" style = "opacity: 0.5">
                        <a style = "color:rgb(102,102,102);">
                            </p></p>
                            <img src = "${arr[i].img}" width = "40px" height = "40px">
                            <p style = "padding-top:5px;">${arr[i].title}</p>
                        </a>
                    </li>`);
                    node.appendTo("#child_top_nav_2");
					}
				},
				error: function(msg){
					alert(msg);
				}
			})
        })
    }
    return{
        nav_2:nav_2
    }
})