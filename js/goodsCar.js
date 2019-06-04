define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	function goodsCar(){
		$(function(){
			sc_msg();
			sc_price();
            //显示购物车数量
            $(".allNum").html(sc_num());

            function sc_msg(){
				//$(".minicart-list").empty();
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
							var sum_price = 0;
							for(var i = 0; i < goodsArr.length; i++){
								var node = $(`<div class="cart-item">
                                <!-- 主商品 ------------------------------>
                                  <div class="cart-product last 111">
                                    <ul class="clearfix">
                                      <li class="cart-input">
                                        <div class="checkbox_box  on">
                                          <i class="iconfont icon-duihao "></i>
                                        </div>
                                      </li>
                                      <li class="cart-goods">
                                        <div class="p-pic">
                                            <a href="/store/product-1898.html" target="_blank">
                                                <img src="${goodsArr[i].img}" alt="ROG 游戏手机  - 128G 电竞装甲性能强劲游戏手机">
                                            </a>
                                        </div>
                                        <div class="p-title">
                                            <a target="_blank" href="/store/product-1898.html">${goodsArr[i].title}<br>
                                                <span class=" fix-empty" style="margin-top:5px;display:block;">${goodsArr[i].description}</span>
                                            </a>
                                        </div>
                                      </li>
                                      <li class="cart-price every-price">${goodsArr[i].price}</li>
                                      <li class="cart-num">
                                        <div class="p-quantity">
                                          <a href="javascript:void(0);" class="btn-decrease edit_btn" id = ${goodsArr[i].id}>-</a>
                                          <input type="text" name="quantity[201890]" value="${goodsArr[i].num}">
                                          <a href="javascript:void(0);" class="btn-increase edit_btn" id = ${goodsArr[i].id}>+</a>
                                        </div>
                                      </li>
                                      <li class="cart-discount">￥0</li>
                                      <li class="cart-point">${goodsArr[i].price}</li>
                                      <li class="cart-subtotal">${goodsArr[i].price}</li>
                                      <li class="cart-action">
                                        <a href="javascript:void(0);"  id = ${goodsArr[i].id} class="btn-delete action-delete" data-tag="1|ROG 游戏手机  - 128G 电竞装甲性能强劲游戏手机|1898|5999|ROG 游戏手机|109|||" data-nequel="ROG 游戏手机  - 128G 电竞装甲性能强劲游戏手机|1898|5999|90AZ01Q1-M00300|ROG PHONE|128G||1">
                                                <i class="iconfont" style = "font-size:24px;float:right;margin-right:20px;cursor:pointer;margin-top:-4px;">&#xe617;</i>
                                    </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>`);
								node.appendTo(".cart-list");

								
								var every_price = parseInt(goodsArr[i].price.slice(1,goodsArr[i].price.length));
								sum_price += every_price;
								$(".sum_price").html(sum_price);
								
							}
							$(".sum_price").html(sum_price)
						}
					},
					error: function(msg){
						alert(msg);
					}
				})
            }
            
            //给购物车商品中删除按钮添加点击事件
            $(".cart-list").on("click",".action-delete",function(){
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
                $(this).closest('.cart-item').remove();
                
				//3、重新计算数量
                $(".allNum").html(sc_num());
								sc_num();
								sc_price();
				return false;
            })

            //通过事件委托，给+和-按钮添加点击事件
			$(".cart-list").on("click", ".edit_btn", function(){
                var id = this.id;
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
							$(this).siblings("input").val(cookieArr[i].num);
						}else{
							//-
							if(cookieArr[i].num == 1){
								alert("数量不能小于1");
							}else{
								cookieArr[i].num--;
								$(this).siblings("input").val(cookieArr[i].num);
								// sc_price();
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
				$(".allNum").html(sc_num());
				
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
											var every_price = parseInt(goodsArr[i].price.slice(1,goodsArr[i].price.length)) * goodsArr[i].num;
											sum_price += every_price;
										}
										$(".sum_price").html(sum_price);
										
									}
								},
								error: function(msg){
									alert(msg);
								}
							})
							//return sum_price;
						}
						

        })
    }
    
    return{
        goodsCar:goodsCar
    }
})