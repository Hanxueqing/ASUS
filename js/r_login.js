define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	function r_login(){
    var oLoginBtn = document.getElementById("loginBtn");
    var oLogin = document.getElementById("login");
    var aInputs = oLogin.getElementsByTagName("input");
    var oAlert = document.getElementById("alert");

    oLoginBtn.onclick = function(){
        ajax({
            method:"post",
            url:"js/r_login.php",
            data:queryString(aInputs),
            success:function(data){
                alert(data);
                var obj = JSON.parse(data);
                if(!obj.code){
                    oAlert.style.display = "block";
                    //oAlert.className = 'alert alert-success';
                    oAlert.innerHTML = obj.message;
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
    }
    
    return{
        r_login:r_login
    }
})