var str = "today is a happy day"

function change(str){
    var strarr = str.split(' '); //将字符串以空格为边界分割成多个数组
    var result = '';
    for(var i in strarr){  //对字符串进行循环操作
    result += strarr[i].substring(0,1).toUpperCase()+strarr[i].substring(1)+' ';
    }
    return result;
    }
str = change(str);
alert(str);