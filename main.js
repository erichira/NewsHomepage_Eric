const closeButton = document.getElementById("close-btn");
const openButton = document.getElementById("open-btn");
const featureImg = document.getElementById("feature-img");

closeButton.addEventListener("click", toggleOffCanvas);
openButton.addEventListener("click", toggleOffCanvas);

function toggleOffCanvas() {
  const offCanvas = document.getElementsByClassName("off-canvas")[0];
  console.log("click");
  if (offCanvas.style.display === "none") {
    offCanvas.style.display = "block";
  } else {
    offCanvas.style.display = "none";
  }
}

function changeImage(x) {
  if (x.matches) {
    // If media query matches
    featureImg.src = "./assets/images/image-web-3-mobile.jpg";
  } else {
    featureImg.src = "./assets/images/image-web-3-desktop.jpg";
  }
}

const x = window.matchMedia("(max-width: 768px)");
changeImage(x); // Call listener function at run time
x.addListener(changeImage); // Attach listener function on state changes
