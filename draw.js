
window.onload = function() {

  document.ontouchmove = function(e){ e.preventDefault(); }

  var canvas  = document.getElementById('main');
  var canvastop = canvas.offsetTop

  var context = canvas.getContext("2d");

  var lastx;
  var lasty;
  
  initialize();

  function initialize() {
    // Register an event listener to call the resizeCanvas() function 
    // each time the window is resized.
    window.addEventListener('resize', resizeCanvas, false);
    // Draw canvas border for the first time.
    resizeCanvas();
  }

  // draws a grid
  function redraw() {
	context.strokeStyle = "#d0ced3";
	context.lineWidth = 6;
	
	//rectangle around the canvas
	context.strokeRect(2, 2, window.innerWidth-4, window.innerHeight-4);
	
	//first diagonal
    context.beginPath(); 
	context.moveTo(0, 0);
	context.lineTo(window.innerWidth, window.innerHeight);
	context.stroke();
	context.closePath();
	
	//second diagonal
	context.beginPath(); 
	context.moveTo(0, window.innerHeight);
	context.lineTo(window.innerWidth, 0);
	context.stroke();
	context.closePath();
	
	//vertical center
	context.beginPath(); 
	context.moveTo(window.innerWidth/2, 0);
	context.lineTo(window.innerWidth/2, window.innerHeight);
	context.stroke();
	context.closePath();
	
	//horizontal center
	context.beginPath(); 
	context.moveTo(0, window.innerHeight/2);
	context.lineTo(window.innerWidth, window.innerHeight/2);
	context.stroke();
	context.closePath();
  }

  // Runs each time the DOM window resize event fires.
  // Resets the canvas dimensions to match window,
  // then draws the new borders accordingly.
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redraw();
  }

  function line(fromx,fromy, tox,toy) {
	context.strokeStyle = "#000000";
	context.lineCap = 'round';
	context.lineJoin = 'butt';
	context.lineWidth = 8;
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
}
