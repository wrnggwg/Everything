let u1 = document.getElementById("u1");
let nums = document.getElementsByTagName("li");
let flag = false;
u1.onmousedown = function(event){
     event.target.style.backgroundColor = "aqua";
     flag = true;
}
u1.onmouseover = function(event){
     if(flag &&event.target.nodeName.toLowerCase() === "li"){
          event.target.style.backgroundColor = "aqua";
     }
}
u1.onmouseup = function(){
     flag = false;
}
