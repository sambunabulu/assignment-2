function getTriangle(){
  var a = parseFloat(document.getElementById("side a").value);
  var b = parseFloat(document.getElementById("side b").value);
  var c = parseFloat(document.getElementById("side c").value);

  if ((a === b) && (a === c ) && (b === c)){
    alert("Equilateral");
  }
  else if((a === b) || (a === c)|| (b === c)){
     alert("Isosceles");
  }
else if(((a + b)>= c) && ((b + c)>=a) && ((a + c)>= b)){
     alert("Scalene");
  }
};
