var clickCount = 0;

document.getElementById("para").onclick = function() {
  clickCount++;
  if (clickCount === 1) {
    fun1();
  } else if (clickCount === 2) {
    fun2();
  }
};

function fun1() {
  document.getElementById("para").innerHTML = "Hi yisehak ";
  document.getElementById("para").style.color = "red";
  document.getElementById("para").style.backgroundColor = "blue";
  document.getElementById("para").style.fontSize = "25px";
  document.getElementById("para").style.border = "4px solid red";
}

function fun2() {
  document.getElementById("para").innerHTML = "please try to fix the error";
  document.getElementById("para").style.color = "green";
  document.getElementById("para").style.backgroundColor = "yellow";
  document.getElementById("para").style.fontSize = "20px";
  document.getElementById("para").style.border = "4px solid green";
}