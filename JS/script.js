var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}




const settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/users/pick-up-drop",
  "method": "GET",
  "headers": {
    "Accept": "*/*",
    "Access-Control-Allow-Origin": "*"
  }
};

$(function(){
  $('#browse_app').click(function(){
      $.load('services.html');
  });
});