<?php
$password = isset($_POST['password']) ? $_POST['password'] : '';
if($password == "Yisong"){
echo "<script>alert('success!');location.href='https://www.overleaf.com/7477643126gxbphmgjpcnn';</script>";//href="密码正确要载入的网页，可以是一个网址，也可以是一个明确的目录位置/文件名"
//密码在上面的password="chaxiang"密码可以自定义切换，无须修改html，php文件是单独的一个文件，不弹出消息框的话 把 alert('success！'); 删除
}else{
echo "<script>alert('Wrong password, failed!');location.href='/seminar/gauge_theory.html';</script>";//密码错误要载入的网页，可以设置为返回首页，也可以设置404页面，随意
//不弹出消息框的话 把alert('Wrong password, failed!');删除
}
?>
