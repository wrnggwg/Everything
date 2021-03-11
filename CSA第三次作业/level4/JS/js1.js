//递归算法
var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
          { name: "summer",  sex: "woman"},
          { name: "daWen",   sex: "woman"},
          { name: "yang",    sex: "man" }  ], 
    work: { 
            time: "2019", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}

function deepClone(t){
let result;
if(typeof t === 'object')
{
if(Array.isArray(t))
{
result = [];
for(let i in t)
{
result.push(deepClone(t[i]));
}
}
else if(t === null)
{
result = null;
}
else if(t.constructor === RegExp)
{
result = t;
}
else {
result = {};
for(let i in t)
{
result[i] = deepClone(t[i]);
}
}
}
else {
result = t;
}
return result;
}

let data1 = deepClone(data);
for(let i in data1)
{
alert(data1[i]);
}