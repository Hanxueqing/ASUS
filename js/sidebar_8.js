define(['jquery'],function($){
    function sidebar_8(){
        $(function(){
            //通过ajax加载数据
			$.ajax({
				url: "../data/sidebar.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
                    for(var i = 32; i < 37; i++){
						var node = $(`
                            <div class = "sub-category-box" style = "width:460px">
                            <div class = "padding">
                                <dl class = "sub-category clearfix">
                                    <dt>
                                        <a class = "level2">
                                            <span class = "cata-img">
                                                <img src = "${arr[i].img}">
                                            </span>
                                            <span class = "cata-name">${arr[i].title}</span>
                                        </a>
                                    </dt>
                                    <dd class = "clearfix">
                                    </dd>
                                </dl>
                            </div>
                        </div>`);
                        node.appendTo(".sub-box-8");
                        for(var j = 0; j < arr[i].goods.length; j++){
                            //alert(arr[i].goods.length);
                            var node1 = $(`
                                <a class = "level3">${arr[i].goods[j]}</a>
                            `);
                            node1.appendTo($(node).find("dd"));
                        }
                    }
				},
				error: function(msg){
					alert(msg);
				}
			})
        })
    }
    return{
        sidebar_8:sidebar_8
    }
})