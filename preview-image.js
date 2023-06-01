document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("image-container");
    var previewImage = document.querySelector(".preview-image");
  
    previewImage.addEventListener("click", function() {
      var imageSrc = this.getAttribute("src");
  
      var previewOverlay = document.createElement("div");
      previewOverlay.className = "image-preview";
      var previewImage = document.createElement("img");
      previewImage.src = imageSrc;
  
      previewOverlay.appendChild(previewImage);
      document.body.appendChild(previewOverlay);
  
      previewOverlay.addEventListener("click", function() {
        document.body.removeChild(previewOverlay);
      });
    });
  });
  