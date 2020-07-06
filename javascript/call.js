/* eslint-disable */	

function checkin() {
	var x=document.getElementById("log1").value;
    var y=document.getElementById("log2").value;
	var z=document.getElementById("log3").value;//读取表单数据
	var patrn=/^\w\w{5,10}$/;;
	var index=document.getElementById("select").selectedIndex;
    var val=document.getElementById("select").options[index].value; //读取选择数据
   if (x == '') {
        alert("用户名不能为空");
        return false;
    }

    if (y == '') {
        alert("密码不能为空");
        return false;
    }
	
	if (z == '') {
        alert("建议内容不能为空");
        return false;
    }
	//表单均不能为空
	
	if(patrn.test(x)) 
	   {
        alert("用户名提交成功");
    }
    else {
        alert("用户名提交失败,请输入5至10位字母或数字");
    }
	
	if(patrn.test(y)) 
	   {
        alert("密码提交成功");
    }
    else {
        alert("密码提交失败,请输入5至10位字母或数字");
    }
	//验证用户名和密码是否符合规则
	
	switch(val) 
    {
     case "男":
           alert("先生，感谢您的提交");
           break;
     case "女":
           alert("女士，感谢您的提交");
           break;
     default:
             alert("发生错误，请属性界面");
     }//选择判断
}

