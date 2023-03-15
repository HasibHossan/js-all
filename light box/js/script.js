import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.4";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.4/plugins/zoom";

const $galleryContainer = document.getElementById("gallery-container");

const customButtons = `<button type="button" id="lg-toolbar-prev" aria-label="Previous slide" class="lg-toolbar-prev lg-icon">  </button><button type="button" id="lg-toolbar-next" aria-label="Next slide" class="lg-toolbar-next lg-icon">  </button>`;

$galleryContainer.addEventListener("lgInit", (event) => {
  const pluginInstance = event.detail.instance;

  // Note append and find are not jQuery methods
  // These are utility methods provided by lightGallery
  const $toolbar = pluginInstance.outer.find(".lg-toolbar");
  $toolbar.prepend(customButtons);
  document.getElementById("lg-toolbar-prev").addEventListener("click", () => {
    pluginInstance.goToPrevSlide();
  });
  document.getElementById("lg-toolbar-next").addEventListener("click", () => {
    pluginInstance.goToNextSlide();
  });
});

lightGallery($galleryContainer, {
  speed: 500,
  controls: false,
  plugins: [lgZoom]
});

// type effect 
$(function(){

	$("#typed").typed({
		strings: ["Typed.js is a JavaScript library.", "It tyops out", "It types out sentences.", "And then deletes them.", "Try it out!"],
		typeSpeed: 30,
  callback: function(){
	shift();
  }
	});

});
function shift(){
  $(".head-wrap").addClass("shift-text");
  terminalHeight();
}

function terminalHeight(){
  var termHeight = $(".terminal-height");
  var value = termHeight.text();
  value = parseInt(value);
  setTimeout(function(){
	  if (value > 10){
		  value = value-1;
		  this.txtValue = value.toString();
		  termHeight.text(this.txtValue);
		  self.terminalHeight();
	  }
	  else{
		  clearTimeout();
	  }
  }, 10);
}