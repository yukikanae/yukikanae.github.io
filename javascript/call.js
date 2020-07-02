function checkinput() {
	var index=document.getElementById("select").selectedIndex;
    var val=document.getElementById("select").options[index].value; 
 
	switch(val) 
    {
     case "男":
           alert("先生，感谢您的提交");
           break;
     case "女":
           alert("女士，感谢您的提交");
           break;
     default:
             alert("出现错误请返回");
     }
}