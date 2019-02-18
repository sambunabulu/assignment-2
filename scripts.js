function getTriangle(){
  var a = parseFloat(document.getElementById("side a").value);
  var b = parseFloat(document.getElementById("side b").value);
  var c = parseFloat(document.getElementById("side c").value);

  if ((a === b) && (a === c ) && (b === c)){
    return alert("Equilateral");
  }
  else if((a === b) || (a === c)|| (b === c)){
    return alert("Isosceles");
  }
else if(((a + b)>= c) && ((b + c)>=a) && ((a + c)>= b)){
    return alert("Scalene");
  }
};
