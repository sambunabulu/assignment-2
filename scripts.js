var triangle= function getTriangle(){
var a = parseFloat(prompt("side a").value);
var b = parseFloat(prompt("side b").value);
var c = parseFloat(prompt("side c").value);
var triangleType = function(side a, side b, side c){
if (isTriangle(side a, side b, side c)){
return triangleType(side a, side b, side c)}
else{
  return alert("These sides do not make a triangle");
}
};
 if ((side a === side b) && (side a === side c ) && (side b === side c)){
return alert("Equilateral");
}
else if((side a === side b) ||(side a === side c)|| (side b === side c)){
return alert("Isosceles");
}
else if(((side a + side b)>= side c) && ((side b +side c)>=a) && ((side a +side c)>=side b) {
  return alert("Scalene");
}
}
};
getTriangle();
