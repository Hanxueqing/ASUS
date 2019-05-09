define(['jquery'],function($){
    function footer(){
        $(function(){
            //通过ajax加载数据
			$.ajax({
				url: "../data/footer.json",
				// dataType: "json", 自动识别
				success: function(arr){
					//通过循环，创建节点添加到页面上
                    for(var i = 0; i < arr.length; i++){
						var node = $(`
                        <div class = "helper-item" style = "margin-right:100px;">
                        <dl class  = "content-list">
                            <dt class = "content-title">
                                <a class = "link">${arr[i].title}</a>
                            </dt>  
                        </dl>
                    </div>`);
                        node.appendTo(".footer_box");
                        for(var j = 0; j < arr[i].scripts.length; j++){
                            //alert(arr[i].goods.length);
                            var node1 = $(`
                            <dd class = "node-index content-item">
                                <a>${arr[i].scripts[j]}</a>
                            </dd>
                            `);
                            node1.appendTo($(node).find("dl"));
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
        footer:footer
    }
})