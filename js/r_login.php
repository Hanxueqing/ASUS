<?php
	header('content-type:text/html;charset="utf-8"');
	$responeData = array("code" => 0, "message" => "");

	//$_POST中所有的数据提出
	$username = $_POST['user_name'];
	$password = $_POST['user_password'];

	//要对密码加密
	$password = md5(md5(md5($password)."qianfeng")."qingdao");

	$link = mysql_connect("localhost", "root", "123456");

	if(!$link){
		$responeData["code"] = 2;
		$responeData["message"] = "数据库连接失败";
		echo json_encode($responeData);
		exit;
	}

	mysql_set_charset("utf8");

	mysql_select_db("qd1902");

	$sql = "SELECT * FROM qd_users WHERE username='{$username}' AND password='{$password}'";

	$res = mysql_query($sql);
	//提取出第一行数据
	$row = mysql_fetch_assoc($res);

	if($row){
		$responeData['message'] = "登录成功";
		echo json_encode($responeData);
	}else{
		$responeData['code'] = 1;
		$responeData['message'] = "用户名或密码错误";
		echo json_encode($responeData);
		exit;
	}

	mysql_close($link);
?>