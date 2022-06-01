
window.onload = function() {

  document.ontouchmove = function(e){ e.preventDefault(); }

  var canvas  = document.getElementById('main');
  var canvastop = canvas.offsetTop

  var context = canvas.getContext("2d");

  var lastx;
  var lasty;

  context.strokeStyle = "#000000";
  context.lineCap = 'round';
  //context.lineJoin = 'round';
  context.lineWidth = 5;

  function clear() {
    context.fillStyle = "#ffffff";
    context.rect(0, 0, 300, 300);
    context.fill();
  }

  function dot(x,y) {
    context.beginPath();
    context.fillStyle = "#000000";
    context.arc(x,y,1,0,Math.PI*2,true);
    context.fill();
    context.stroke();
    context.closePath();
  }

  function line(fromx,fromy, tox,toy) {
    context.beginPath();
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.stroke();
    context.closePath();
  }

  canvas.ontouchstart = function(event){                   
    event.preventDefault();                 
    
    lastx = event.touches[0].pageX;
    lasty = event.touches[0].pageY - canvastop;

    dot(lastx,lasty);
  }

  canvas.ontouchmove = function(event){                   
    event.preventDefault();                 

    var newx = event.touches[0].pageX;
    var newy = event.touches[0].pageY - canvastop;

    line(lastx,lasty, newx,newy);
    
    lastx = newx;
    lasty = newy;
  }


  var clearButton = document.getElementById('clear')
  clearButton.onclick = clear

  clear()
}
