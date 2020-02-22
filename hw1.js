'use strict'
 const imageTraffic = document.querySelector('.drag');



imageTraffic.onmousedown = (event) => {

	imageTraffic.style.cursor = 'grab';
	this.style.cursor = 'grab';
	imageTraffic.style.position = 'absolute';
  
  imageTraffic.style.left = event.pageX - imageTraffic.offsetWidth / 2 + 'px';
  imageTraffic.style.top = event.pageY - imageTraffic.offsetHeight / 2 + 'px';
  
  
  
  document.onmousemove = function(e) {
    imageTraffic.style.left = e.pageX - imageTraffic.offsetWidth / 2 + 'px';
    imageTraffic.style.top = e.pageY - imageTraffic.offsetHeight / 2 + 'px';
  }

  imageTraffic.onmouseup = function() {
    document.onmousemove = null;
    imageTraffic.onmouseup = null;
    imageTraffic.style.cursor = 'pointer';
    this.style.cursor = 'default';
  }
  function imageMove() {
  
  if (Mouse.Lbtn) {
    Mouse.targetImage.style.top = Mouse.posY - Mouse.dy + "px";
    Mouse.targetImage.style.left = Mouse.posX - Mouse.dx + "px";
    window.requestAnimationFrame(imageMove);
  }
}


<div class="drag"/>


.drag {
  height: 50px;
  width: 50px;
  border: 3px black solid;
  cursor: pointer;
