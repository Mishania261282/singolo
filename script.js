window.onload = function() {
  // Phone
  addPhoneClickHandler();

  // Slider
  addSliderClickHandler();

  // Tags
  addTagsClickHandler();

  // Gallery images
  addGalleryImgClickHandler();

  // Modal
  addModalClickHandler();

  // Button to top
  clickButtonTop();

  // Scroll
  scrollPage();
};

// Phone
const addPhoneClickHandler = () => {
  let phoneV = document.querySelector(".vertical-phone");
  let phoneH = document.querySelector(".horizontal-phone");
  let displayV = phoneV.querySelector(".vertical-phone-screen");
  let displayH = phoneH.querySelector(".horizontal-phone-screen");
  
  phoneV.addEventListener("click", () => {
    displayV.classList.toggle("display-off");
    });

  phoneH.addEventListener("click", () => {
    displayH.classList.toggle("display-off");
     });
};

