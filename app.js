var images = [
    "https://placebear.com/200/300",
    "https://placebear.com/g/200/300"
  ];
  
  var currentIndex = 0;
  
  var imgElement = document.getElementById("bear-image");
  var loadingText = document.getElementById("loading-text");
  var errorMessage = document.getElementById("error-message");
  
  function changeImage(index) {
    loadingText.style.display = "block";
    imgElement.style.display = "none";
    errorMessage.style.display = "none";
  
    imgElement.src = images[index];
  
    imgElement.onload = function() {
      loadingText.style.display = "none";
      imgElement.style.display = "block";
    };
  
    imgElement.onerror = function() {
      loadingText.style.display = "none";
      errorMessage.style.display = "block";
    };
  }
  
  document.getElementById("prev-btn").onclick = function() {
    if (currentIndex > 0) {
      currentIndex--;
      changeImage(currentIndex);
      document.getElementById("next-btn").disabled = false;
      if (currentIndex === 0) {
        document.getElementById("prev-btn").disabled = true;
      }
    }
  };
  
  document.getElementById("next-btn").onclick = function() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      changeImage(currentIndex);
      document.getElementById("prev-btn").disabled = false;
      if (currentIndex === images.length - 1) {
        document.getElementById("next-btn").disabled = true;
      }
    }
  };
  
  changeImage(currentIndex);