<?php
	header('content-type:text/html;charset="utf-8"');
	$responeData = array("code" => 0, "message" => "");
	/*
		通过$_POST全局数组
		将提交过来的数据，取出
	*/
	$username = $_POST['username'];
	$password = $_POST['password'];
	$repassword = $_POST['repassword'];

	//我们需要在后台对数据进行一个简单的验证
	if($password != $repassword){
		$responeData["code"] = 1;
		$responeData["message"] = "两次密码输入不一致";

		//转成对应json格式字符串,返回到前端页面
		echo json_encode($responeData);
		exit;
	}

	//要对密码加密
	$password = md5(md5(md5($password)."qianfeng")."qingdao");

	$link = mysql_connect("localhost", "root", "123456");
	if(!$link){
		$responeData["code"] = 2;
		$responeData["message"] = "数据库链接失败";
		echo json_encode($responeData);
		exit;
	}
	mysql_set_charset("utf8");
	mysql_select_db("qd1902");

	//准备sql语句,在数据库中查询是否注册的用户名已存在
	$sql = "SELECT * FROM qd_users WHERE username = '{$username}';";

	$res = mysql_query($sql);

	$row = mysql_fetch_assoc($res);

	if($row){
		//用户名重名
		$responeData["code"] = 3;
		$responeData["message"] = "用户名已经存在";
		echo json_encode($responeData);
		exit;
	}

	//注册成功
	$sql2 = "INSERT INTO qd_users (username,password) VALUES ('{$username}','{$password}')";

	$res = mysql_query($sql2);

	if($res){
		$responeData["message"] = "注册成功";
		echo json_encode($responeData);
	}else{
		$responeData["code"] = 4;
		$responeData["message"] = "注册失败";
		echo json_encode($responeData);
		exit;
	}

	mysql_close($link);
?>