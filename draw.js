
window.onload = function() {

  document.ontouchmove = function(e){ e.preventDefault(); }

  var canvas  = document.getElementById('main');
  var canvastop = canvas.offsetTop

  var context = canvas.getContext("2d");

  var lastx;
  var lasty;

  context.strokeStyle = "#000000";
  context.lineCap = 'round';
  context.lineJoin = 'butt';
  context.lineWidth = 7;

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
