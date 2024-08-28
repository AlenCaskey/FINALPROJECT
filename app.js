
document.addEventListener("DOMContentLoaded", () => {
  
  const getStartedButton = document.querySelector(".left-section button");
 
  getStartedButton.addEventListener("click", () => {
   
    alert("Welcome! Let's explore the world of coffee.");
  });

  const topImage = document.querySelector(".top-image img");
  const bottomImage = document.querySelector(".bottom-image img");

  topImage.addEventListener("mouseover", () => {
    topImage.style.transform = "scale(1.1)";
    topImage.style.transition = "transform 0.3s ease";
  });

  topImage.addEventListener("mouseout", () => {
    topImage.style.transform = "scale(1)";
  });

  bottomImage.addEventListener("mouseover", () => {
    bottomImage.style.transform = "scale(1.1)";
    bottomImage.style.transition = "transform 0.3s ease";
  });

  bottomImage.addEventListener("mouseout", () => {
    bottomImage.style.transform = "scale(1)";
  });
});
