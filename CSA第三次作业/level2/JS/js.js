var arr = [[1, 2], [3, 4,], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10]
//map方法返回一个新的数组，数组中的元素为原始数组数据调用函数处理后的结果，依次处理元素，不对原数组作修改

function even1(arr) {
    let res=[];
    arr.map(item => {
      if(Array.isArray(item))
      {
        res = res.concat(even1(item));
      }
      else{
        res.push(item);
      }
    });
    return res;
}                  //even1   该方法为递归算法

function even2(arr) {
  return arr.toString().split(',').map(function(item) {
      return Number(item);
  })
}                 //even2    该方法为非递归算法



var arr1=even1(arr);

alert(arr1);

var arr2=even2(arr);
alert(arr2);