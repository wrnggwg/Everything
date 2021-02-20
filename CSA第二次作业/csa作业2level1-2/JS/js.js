var arr = "ni hao nihao";
function count(arr,n){
    var num = 0;
    for(var i in arr)
    {
        if(arr[i] == n)
        num++;
    }
    return num
  }
  alert(count(arr,"n"));