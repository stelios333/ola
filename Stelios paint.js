
    document.getElementById("myPswx").max = window.innerWidth - 39;
    var userLang = navigator.language;
      if(!userLang == "el-GR"){
 setTimeout(function(){  window.open("https://s2js.com/Stelios/a_simple_drawing_game","_self") }, 1000);
  }
    var support = "supported"
    var devicename = navigator.platform
    
     if (devicename == 'Android' || devicename == 'iPad' || devicename == 'iPhone' || devicename == 'iPod' || devicename.includes("Linux")) {
     window.open("https://s2js.com/Stelios/adblock_envent_page_for_programms_with_out_ads_wit","_self")  
     support = "unsupported"
}
  document.getElementById("plat").innerHTML = 'Your platform: ' + devicename + ' Support: ' + support;
    function notsaved() {
  return "Write something clever here...";
}
        var userLang = navigator.language || navigator.userLanguage;

      function langel(){
    var sedtlang = document.getElementById("My_sel").value;
    window.open(sedtlang,"_self")
   
    }
       function copyimage(){
 var frm = "image/" + document.getElementById("mySelects").value;
 canvasi = document.getElementById("myCanvas");
 var imageURP = canvasi.toDataURL(frm);
 alert("Copy the link in the window which it will open. When you paste it to the URL text frame the image will load.")
 var w = window.open();
  w.document.open();
  w.document.write("<head><title>Link image</title></head>");
  w.document.write(imageURP);
  w.document.close();
  document.getElementById("demoler").innerHTML = "Copy the link in the opened window. When you paste it to the URL text frame the image will load.";
   }
     var canvasi = document.getElementById("myCanvas");
    download_img = function(el) {

 
  // get image URI from canvas object
  canvasi = document.getElementById("myCanvas");
   var frm = "image/" + document.getElementById("mySelects").value;
  var imageURI = canvasi.toDataURL(frm);
  el.href = imageURI;
            document.getElementById("download").download = "canvas." + document.getElementById("mySelects").value
  alert ("Ιmage saved")
};
    var colorvar, xmlrt;
    xmlrt = "white";
    function colorinm(){
    aws = xmlrt;    
    }
    
     myCanvas.width = window.innerWidth - 39; 
            xpsi.max = myCanvas.width
    yps.max = myCanvas.height
function myFunctionyp() {
  var xola = document.getElementById("myPswy").value;
  document.getElementById("demopy").innerHTML = xola;
}
function myFunctionxp() {
  var xolaa = document.getElementById("myPswx").value;
  document.getElementById("demop").innerHTML = xolaa;
}
  function myFunctionf() {
if(confirm('Are you sure to clear canvas?')){
 x = null
  xmlrt = document.getElementById("myColori").value;
  ctx.fillStyle= xmlrt;
 ctx.fillRect( 0, 0, myCanvas.width, myCanvas.height)
   }
  }
  var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
  function myFulunction() {
 aws = document.getElementById("myColor").value;
 }
    var xol;
  function myFunpoction() {
var x = document.getElementById("myPsw").value;
 var yp = document.getElementById("myPswy").value;
  var xp = document.getElementById("myPswx").value;
if (x.includes("data:image")){
    if (!fls.checked){

var MyImg = new Image(); 
MyImg.src = x;


function MyTimer () { 
 ctx.drawImage(MyImg, xp, yp);
  }
setTimeout(MyTimer, 0)
}
if (fls.checked){

var MyImg = new Image(); 
MyImg.src = x;


function MyTimer () { 
 ctx.drawImage(MyImg, xp, yp, myCanvas.width, myCanvas.height);
  }
setTimeout(MyTimer, 0)
}
}
if (!x.includes("data:image")) {
  window.alert('Stelios paint support only base64 images. Make sure your image URL begins from data:image');
}
}
function myFuncccction() {
  if (confirm("Are you sure to clear canvas?")) {
  ctx.fillStyle="white"
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
  }
  }
  var pi;
  pi = '5'
function col(c) {
aws = c; 
}
var aws;
function ask (inp){
aws = prompt(inp)
}


 var ctx = myCanvas.getContext("2d")

 ctx.fillStyle= "white"
 ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
 function Leave_a_Mark(MyWhere) {
   var rect = myCanvas.getBoundingClientRect();
   ctx.fillStyle= aws;
   ctx.beginPath();
   ctx.arc(MyWhere.clientX - rect.left, MyWhere.clientY - rect.top, output.innerHTML, 0, Math.PI * 2);
   ctx.fill();
   }


function MyTouchMoveHandler(MyEvent) {
   for (var i=0; i < MyEvent.touches.length; i++) {
        Leave_a_Mark(MyEvent.touches[i]);
        }
   MyEvent.preventDefault()
   }
   var mouse_is_down = false;

function MyMouseDownHandler(MyEvent) {
   if (MyEvent.which == 1) mouse_is_down= true;
   }

function MyMouseUpHandler(MyEvent) {
   if (MyEvent.which == 1) mouse_is_down= false;
   }

function MyMouseMoveHandler(MyEvent) {
   if (mouse_is_down) Leave_a_Mark(MyEvent);
   }


myCanvas.addEventListener("mousedown", MyMouseDownHandler);   
myCanvas.addEventListener("mouseup", MyMouseUpHandler);   
myCanvas.addEventListener("touchmove", MyTouchMoveHandler);
myCanvas.addEventListener("mousemove", MyMouseMoveHandler); 
