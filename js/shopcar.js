define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	function shopcar(){
		$(function(){
			sc_msg();
			sc_price();
            //显示购物车数量
            $(".op-cart-number").html(sc_num());
            //给加入购物车按钮添加点击事件，后添加的节点拥有事件
            $(".goodList").on("click",".action-addtocart",function(){   
                //在这里可以方便的拿到当前点击按钮所在的商品id
                var id = this.id;
                //判断是否是第一次添加商品
                var first = $.cookie("goods") == null ? true : false;
                if(first){
					$.cookie("goods", `[{"id":${id},"num":1}]`, {
						expires: 7
					});
				}else{
					//判断之前是否添加过
					var same = false; //假设没有添加过
					var cookieStr = $.cookie("goods");
					var cookieArr = JSON.parse(cookieStr);
					for(var i = 0; i < cookieArr.length; i++){
						if(cookieArr[i].id == id){
							same = true;
							cookieArr[i].num++;
							break;
						}
					}
					if(!same){
						var obj = {id:id,num:1};
						cookieArr.push(obj);
					}
					$.cookie("goods", JSON.stringify(cookieArr), {
						expires: 7
					})
                }
                $(".op-cart-number").html(sc_num());
                ballMove(this);
                sc_msg();
                return false;
            });
            //给上面的购物车添加移入移出
            $(".minicart").on("mouseenter",function(){
                //alert(1);
                //$(".minicart-cont").stop().slideDown(1000);
                $(".minicart-cont").css("display","block");
                return false;
            })
            $(".minicart").on("mouseleave",function(){
                //$(".minicart-cont").stop().slideUp(1000);
                $(".minicart-cont").css("display","none");
                return false;
            })

            function sc_msg(){
				$(".minicart-list").empty();
				//在cookie中存储着加入购物车的商品  id,num
				$.ajax({
					url: "../data/tab.json",
					success: function(arr){
						//arr 全部商品的数据
						var cookieStr = $.cookie("goods");
						if(cookieStr){
							var cookieArr = JSON.parse(cookieStr);
							var goodsArr = [];
							//将存储在cookie中的数据单独拿出来
							for(var i = 0; i < arr.length; i++){
								for(var j = 0; j < cookieArr.length; j++){
									if(arr[i].id == cookieArr[j].id){
										arr[i].num = cookieArr[j].num;
										goodsArr.push(arr[i]);
									}
								}
							}

							//拿到加载cookie中完整的商品数据以后，直接在页面上加载数据

							for(var i = 0; i < goodsArr.length; i++){
								var node = $(`<li class="goods-item" id = "${arr[i].id}">
                                <div class="goods-pic">
                                    <a href="">
                                        <img src="${goodsArr[i].img}">
                                    </a>
                                </div>
                                <div class="goods-info">
                                    <h3 class="goods-name">
                                        <a href="" target="_blank">${goodsArr[i].title}<br>
                                            <span style = "font-size:12px;color:#666;">${goodsArr[i].description}</span>
                                        </a>
                                        </h3>
                                    <div class="goods-price">
                                        <p style = "color:red;">
                                            × 
                                            <span class="p-quantity" style = "color:red;">${goodsArr[i].num}</span>
                                        </p>
                                        
                                    </div>
                                    <a class="action-delete" id = ${goodsArr[i].id}>
                                        <i class="iconfont sc_deleteBtn" id = ${goodsArr[i].id} style = "font-size:24px;float:right;margin-right:20px;cursor:pointer;">&#xe617;</i>
                                    </a>
                                    
                                </div>
                                <div class = "edit_btn edit_btn_a" id = ${goodsArr[i].id}>+</div>
                                <div class = "edit_btn edit_btn_m" id = ${goodsArr[i].id}>-</div>
                            </li>`);
								node.appendTo(".minicart-list");
							}
						}
					},
					error: function(msg){
						alert(msg);
					}
				})
			}
			//计算商品总价
			function sc_price(){
				$.ajax({
					url: "../data/tab.json",
					success: function(arr){
						//arr 全部商品的数据
						var cookieStr = $.cookie("goods");
						if(cookieStr){
							var cookieArr = JSON.parse(cookieStr);
							var goodsArr = [];
							//将存储在cookie中的数据单独拿出来
							for(var i = 0; i < arr.length; i++){
								for(var j = 0; j < cookieArr.length; j++){
									if(arr[i].id == cookieArr[j].id){
										arr[i].num = cookieArr[j].num;
										goodsArr.push(arr[i]);
									}
								}
							}
							//拿到加载cookie中完整的商品数据以后，直接在页面上加载数据
							var sum_price = 0;
							for(var i = 0; i < goodsArr.length; i++){
								var every_price = parseInt(goodsArr[i].price.slice(1,goodsArr[i].price.length) * goodsArr[i].num);
								sum_price += every_price;
							}
							$(".price").html(sum_price);
						}
					},
					error: function(msg){
						alert(msg);
					}
				})
				//return sum_price;
			}
            //用于做抛物线运动的函数，需要当前点击这个按钮
			function ballMove(node){
				//1、将小球移动到这个位置，并且显示出来
				$("#ball").css({
					left: $(node).offset().left - 150,
                    top: $(node).offset().top - 730,
                    //left:ev.clientX,
                    //top:ev.clientY,
					display: "block"
				})
				//2、创建抛物线对象
				var X = $(".minicart").offset().left - $("#ball").offset().left;
				var Y = $(".minicart").offset().top - $("#ball").offset().top;

				var bool = new Parabola({
					el: "#ball",
					offset: [X, Y],
					duration: 500,
					curvature: 0.001,
					callback: function(){
						$("#ball").hide();
					}
				});
				bool.start();
            }
            
            //给购物车商品中删除按钮添加点击事件
            $(".minicart-list").on("click",".action-delete",function(){
                //商品的id
				var id = this.id;
				//alert(id);
				/*
					删除该商品分两步走
					1、删除cookie中该商品
					2、删除页面上的商品节点
				*/
				var cookieArr = JSON.parse($.cookie("goods"));
				for(var i = 0; i < cookieArr.length; i++){
					if(cookieArr[i].id == id){
						cookieArr.splice(i, 1);
						break;
					}
				}
				//判断删除完毕以后数组是否为空
				if(!cookieArr.length){
					$.cookie("goods", null);
				}else{
					$.cookie("goods", JSON.stringify(cookieArr));
				}
				//2、删除当前节点
                $(this).closest('li').remove();
                
				//3、重新计算数量
                $(".op-cart-number").html(sc_num());
				sc_num();
				sc_price();
				return false;
            })

            //通过事件委托，给+和-按钮添加点击事件
			$(".minicart-list").on("click", ".edit_btn", function(){
				sc_price();
                var id = this.parentNode.id;
                //alert(id);  
				//1、取出要操作的cookie中的数据
				var cookieArr = JSON.parse($.cookie("goods"));
				for(var i = 0; i < cookieArr.length; i++){
					if(id == cookieArr[i].id){
						if(this.innerHTML == "+"){
                            //alert(id);
							cookieArr[i].num++;
							//改变页面的数量
							//alert(cookieArr[i].num);
							$(this).prevAll(".goods-info").find(".p-quantity").html(cookieArr[i].num);
							sc_price();
						}else{
							//-
							if(cookieArr[i].num == 1){
								alert("数量不能小于1");
							}else{
								cookieArr[i].num--;
								$(this).prevAll(".goods-info").find(".p-quantity").html(cookieArr[i].num);
								sc_price();
							}

						}
						
						break;
					}
					
				}

				//重新存储到cookie中
				$.cookie("goods", JSON.stringify(cookieArr), {
					expires: 7
				})
				sc_price();
				//更新商品数量
				$(".op-cart-number").html(sc_num());
				sc_price();
				
            })
            
            //计算加入购物车商品数量
            function sc_num(){
                var cookieStr = $.cookie("goods");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var sum = 0;
                    for(var i = 0; i < cookieArr.length; i++){
                        sum += cookieArr[i].num;
                    }
                    return sum;
                }else{
                    return 0;
                }
            }

        })
    }
    
    return{
        shopcar:shopcar
    }
})