define(['jquery'],function($){
    function login(){
        $(function(){
            $("button").on("click",function(){
                return false;
            })
            $(".js-phone").on("click",function(){
                $(".js-phone").addClass("active");
                $(".js-account").removeClass("active");
                $(".js-phone_input").css("display","block");
                $(".js-account_input").css("display","none");
                $(".third-login_phone").css("display","block");
                $(".third-login_account").css("display","none");
                $(".form-phone").css("display","block");
                $(".form-account").css("display","none");
            })
        
            $(".js-account").on("click",function(){
                $(".js-phone").removeClass("active");
                $(".js-account").addClass("active");
                $(".js-phone_input").css("display","none");
                $(".js-account_input").css("display","block");
                $(".third-login_phone").css("display","none");
                $(".third-login_account").css("display","block");
                $(".form-phone").css("display","none");
                $(".form-account").css("display","block");
                $(".action-message").css("display","none");
            })

            $(".button-phone").on("click",function(){
                //短信验证码
                if(!$("input[name = 'user_phoneCode']").val()){
                    $(".msg-phoneCode").css("display","block");
                    $(".msg-phoneCode").siblings().css("display","none");
                }
                //手机号
                if(!$("input[name = 'user_phone']").val()){
                    $(".msg-phone").css("display","block");
                    $(".msg-phone").siblings().css("display","none");
                }
                
            })

            $(".button-account").on("click",function(){
                $(".action-message").css("display","block");
                //密码
                if(!$("input[name = 'user_password']").val()){
                    $(".msg-password").css("display","block");
                    $(".msg-password").siblings().css("display","none");
                }

                //用户名
                if(!$("input[name = 'user_name']").val()){
                    $(".msg-name").css("display","block");
                    $(".msg-name").siblings().css("display","none");
                }
                
            })
        })
    }
    return{
        login:login
    }
})