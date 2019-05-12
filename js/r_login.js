define(["parabola","ajax","jquery", "jquery-cookie"], function(parabola,ajax,$){
	function r_login(){
        var oLoginBtn = document.getElementById("loginBtn");
        var oLogin = document.getElementById("login");
        var aInputs = oLogin.getElementsByTagName("input");
        var oAlert = document.getElementById("alert");

        oLoginBtn.onclick = function(){
            ajax.ajax({
                method:"post",
                url:"../js/r_login.php",
                data:queryString(aInputs),
                success:function(data){
                    alert(data);
                    var obj = JSON.parse(data);
                    if(!obj.code){
                        oAlert.style.display = "block";
                        //oAlert.className = 'alert alert-success';
                        oAlert.innerHTML = obj.message;
                        window.location.href="index.html";
                    }else{
                        oAlert.style.display = "block";
                        //oAlert.className = 'alert alert-danger';
                        oAlert.innerHTML = obj.message;
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
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
    }
    
    return{
        r_login:r_login
    }
})