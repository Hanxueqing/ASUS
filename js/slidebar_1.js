define(['jquery'],function($){
    function sidebar_1(){
        $(function(){
            //通过ajax加载数据
			$.ajax({
				url: "../data/sidebar.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
                    for(var i = 0; i < 5; i++){
						var node = $(`<div class = "sub-category-box" style = "width:460px">
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
                    node.appendTo(".sub-box");
                        for(j = 0; j < arr[i].goods.length; j++){
                            var node = $(`
                            <a class = "level3">${arr[i].goods[j]}</a>
                            `);
                    node.appendTo(".sub-category dd");
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
        sidebar_1:sidebar_1
    }
})