/*function Animal(){
  　　　　this.species = "动物";
  　　}

function Cat(name,color){
    　　　this.name = name;
    　　　this.color = color;
          Animal.call(this);
　　}*/

function Animal(){}
Animal.prototype.species = "动物";


function Inherit(child,parent)
{
    var p = parent.prototype;
    var c = child.prototype;
    for(var i in p)
    {
      c[i] = p[i];
    }
    c.uber = p;
}
function Cat(name,color){
  　　　this.name = name;
  　　　this.color = color;
        
　　}
Inherit(Cat,Animal);


var cat1 = new Cat("大毛","黄色");
alert(cat1.species);


