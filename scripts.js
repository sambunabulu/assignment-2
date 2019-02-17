function getTriangle(){
var a = parseFloat(prompt("side a"));
var b = parseFloat(prompt("side b"));
var c = parseFloat(prompt("side c"));



 if(a===b && a===c && b===c){
alert("Equilateral");
}
else if(a===b || a===c || b===c){
alert("Isosceles");
}
else if((a+b)<= c || (a+c)<=b || (b+c)<=a) {
alert("Not a Triangle");
}
else if((a+b)>=c && (b+c)>=a && (a+c)>=b {
  alert("Scalene");}
}
getTriangle();
