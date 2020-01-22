document.write("Loop A <br/>");
var i;
for(i=0; i<31; i++){
  document.write("my 1st loop:" + i + "<br/>");
}

document.write("Loop B <br/>");

var j;
for(j=200; j>149; j--){
  document.write("my 2 loop:" + j + "<br/>");
}

document.write("Loop C <br/>");
var k;
for(k=100; k<5001; k+=100){
  document.write("third loop:" + k +"<br/>")
}
var d;
for (d=0; d<5000; d+=100)
  {
    document.write("loop4:" + d + "<br />");
  }

var e
for (e=0; e<9; e++)
  {
    var ans = Math.pow(2,e);
    document.write("loop5:" + ans + "<br />" )
  }
var f
for (f=0; f<9; f++)
  {
    var ans = Math.random(2,f);
    document.write("MathRandom:" + ans + "<br />" )
  }
var g
for (g=0; g<9; g++)
  {
    var ans = Math.sqrt(2,g);
    document.write("SquareRoot:" + ans + "<br />" )
  }
function myLoop(){
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;

  for (var i = start ; i <= end ; i++)
  {
    document.write('<p>'+ i +'</p>');
  }
}  
