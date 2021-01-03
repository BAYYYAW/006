var w = document.getElementById("wanwan");
var l = document.getElementById("ling");
var z = document.getElementById("zilong");
var b = document.getElementById("baxia");
var w1 = document.getElementById("emblemW");
var l1 = document.getElementById("emblemL");
var z1 = document.getElementById("emblemZ");
var b1 = document.getElementById("emblemB");
var button = document.getElementsByClassName("button");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 652 || document.documentElement.scrollTop > 652){
    w.style.bottom = "0px"
    w1.style.right = "48%"
    w1.style.opacity = "1"
  } else {
    w.style.bottom = "1400px"
    w1.style.opacity = "0"
    w1.style.right = "50%"
  }
  if(document.body.scrollTop > 1391 || document.documentElement.scrollTop > 1391){
    l.style.bottom = "0px"
    l1.style.opacity = "1"
  } else {
    l.style.bottom = "1400px"
    l1.style.opacity = "0"
  }
  if(document.body.scrollTop > 2378 || document.documentElement.scrollTop > 2378){
    z.style.bottom = "0px"
    z1.style.opacity = "1"
  } else {
    z.style.bottom = "1400px"
    z1.style.opacity = "0"
  }
  if(document.body.scrollTop > 3238 || document.documentElement.scrollTop > 3238){
    b.style.bottom = "0px"
    b1.style.opacity = "1"
  } else {
    b.style.bottom = "1400px"
    b1.style.opacity = "0"
  }
  console.log(
    'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
    'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
  );
}


function on(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var i = document.getElementById("notif");
var i1 = document.getElementById("warning");
var tag = document.getElementsByTagName("body");

setTimeout(myOff, 10000);
setTimeout(warning, 2000)

function myOff() {
  i.style.top = "-500px"
}

function click() {
  i.style.top = "-500px"
}

function warning(){
  i1.style.opacity = "1"
  tag[0].style.overflow = "hidden"
}

function agree(){
  tag[0].style.overflow = "visible"
  i1.style.display = "none"
}

// modal

var m1 = document.getElementById("modal1");
var m2 = document.getElementById("modal2");
var m3 = document.getElementById("modal3");
var m4 = document.getElementById("modal4");
var m5 = document.getElementById("modal5");
var m6 = document.getElementById("modal6");
var m7 = document.getElementById("modal7");
var m8 = document.getElementById("modal8");
var m9 = document.getElementById("modal9");
var m10 = document.getElementById("modal10");
var m11 = document.getElementById("modal11");
var m12 = document.getElementById("modal12");

function img1(){
  m1.style.display = "block"
}
function img2(){
  m2.style.display = "block"
}
function img3(){
  m3.style.display = "block"
}
function img4(){
  m4.style.display = "block"
}
function img5(){
  m5.style.display = "block"
}
function img6(){
  m6.style.display = "block"
}
function img7(){
  m7.style.display = "block"
}
function img8(){
  m8.style.display = "block"
}
function img9(){
  m9.style.display = "block"
}
function img10(){
  m10.style.display = "block"
}
function img11(){
  m11.style.display = "block"
}
function img12(){
  m12.style.display = "block"
}
