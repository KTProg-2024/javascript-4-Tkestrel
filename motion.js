var posTop = 0;
var posLeft = 0;
var posRight = 0;
var posBottom = 0;

function moveDown() {
  var elem = document.getElementById("animate");
  var id = setInterval(frame, 5);
  function frame() {
	  posBottom++;
	  elem.style.top = posBottom + "px";
	  if (posBottom == 350)
		  clearInterval(id);
  }
}

function moveUp() {
  var elem = document.getElementById("animate");  
  var id = setInterval(frame, 5);
  function frame() {
	  posTop++;
	  elem.style.bottom = posTop + "px";
	  if (posTop == 350)
		  clearInterval(id);
  }
}

function moveLeft() {
  var elem = document.getElementById("animate");  
  var id = setInterval(frame, 5);
  function frame() {
	  posLeft++;
	  elem.style.right = posLeft + "px";
	  if (posLeft == 350)
		  clearInterval(id);
  }
}

function moveRight() {
  var elem = document.getElementById("animate");  
  var id = setInterval(frame, 5);
  function frame() {
	  posRight++;
	  elem.style.left = posRight + "px";
	  if (posRight == 350)
		  clearInterval(id);
  }
}

/*
function myMove() {
  var elem = document.getElementById("animate");   
  var posTop = 0;
  var posLeft = 0;
  var id = setInterval(frame, 5);
  function frame() {
	  posTop++;
	  posLeft++;
	  elem.style.top = posTop + "px"; 
	  elem.style.left = posLeft + "px"; 
	  if ((posTop == 350) && (posLeft == 350))
		  clearInterval(id);
  }
}
*/