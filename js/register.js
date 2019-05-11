define(['jquery'],function($){
    function register(){
        var oRegisterBtn = document.getElementById("register_post");
        var oRegbox = document.getElementsByClassName("mobile_signup")[0];
        var aInputs = oRegbox.getElementsByTagName("input");
        var oAlert = document.getElementById("alertwarning");

        oRegisterBtn.onclick = function(){
            if(!aInputs[0].value){
                oAlert.style.display = "block";
                oAlert.innerHTML = "请输入用户名";
            }else if(!aInputs[1].value){
                oAlert.style.display = "block";
                oAlert.innerHTML = "请输入密码";
            }else if(!aInputs[2].value){
                oAlert.style.display = "block";
                oAlert.innerHTML = "请输入确认密码";
            }else{
                ajax({
                    method:"post",
                    url:"js/register.php",
                    data: queryString(aInputs),
                    success:function(data){
                        var obj = JSON.parse(data);
                        if(!obj.code){
                            oAlert.style.display = "block";
                            oAlert.innerHTML = obj.message;
                        }else{
                            oAlert.style.display = "block";
                            oAlert.innerHTML = obj.message;
                        }
                    },
                    error:function(msg){
                        alert(msg);
                    }
                })
                
            }
            return false;
            stopBubble(e);
        }
        function queryString(nodes){
            var str = '';
            for(var i = 0; i < nodes.length; i++){
                var subStr = nodes[i].name + "=" + nodes[i].value;
                str += subStr + "&";
            }
            str = str.substring(0,str.length - 1);
            return str;
        }
        function stopBubble(e){
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble = true;
            }
        }
    }

    return{
        register:register,
    }
})