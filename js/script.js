// company and product slider start
let swiper = new Swiper(".home-service .service-slider", {
  slidesPerView: 6,
  spaceBetween: 40,
  centeredSlides: false,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".home-service .service-slider-container .swiper-button-next",
    prevEl: ".home-service .service-slider-container .swiper-button-prev",
  },
  breakpoints: {
    1600: {
      spaceBetween: 35,
      slidesPerView: 7,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
    1100: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

/* pannel slide */
// Client slider of home page
var home_client_slider = new Swiper(
  ".home-service .home-client-slider-container .slide-content",
  {
    slidesPerView: 4,
    spaceBetween: 35,
    centeredSlides: false,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".home-service .home-client-slider-container .swiper-pagination",
    },
    navigation: {
      nextEl: ".home-service .home-client-slider-container .swiper-button-next",
      prevEl: ".home-service .home-client-slider-container .swiper-button-prev",
    },
    breakpoints: {
      1600: {
        spaceBetween: 35,
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      850: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1,
      },
    },
  }
);

// pannel slide
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".pannel .carousel-slide");
  const totalSlides = slides.length;

  // Ensure the index loops infinitely
  currentSlide = (index + totalSlides) % totalSlides;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentSlide) {
      slide.classList.add("active");
    }
  });
}

function moveSlide(direction) {
  if (direction === "next") {
    showSlide(currentSlide + 1);
  } else if (direction === "prev") {
    showSlide(currentSlide - 1);
  }
}

// Auto-slide functionality
setInterval(() => {
  moveSlide("next");
}, 3000); // Adjust the time interval as needed

// Initialize the carousel
showSlide(currentSlide);

// solar design slides
let solarCurrentSlide = 0;

function showSolarSlide(index) {
  const slides = document.querySelectorAll(
    ".solar-design .solar-carousel-slide"
  );
  const totalSlides = slides.length;

  // Ensure the index loops infinitely
  solarCurrentSlide = (index + totalSlides) % totalSlides;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === solarCurrentSlide) {
      slide.classList.add("active");
    }
  });
}

function moveSolarSlide(direction) {
  if (direction === "next") {
    showSolarSlide(solarCurrentSlide + 1);
  } else if (direction === "prev") {
    showSolarSlide(solarCurrentSlide - 1);
  }
}

// Auto-slide functionality
setInterval(() => {
  moveSolarSlide("next");
}, 3000); // Adjust the time interval as needed

// Initialize the carousel
showSolarSlide(solarCurrentSlide);

// 1. Toggle Password Visibility
document.querySelectorAll(".toggle-password").forEach((button) => {
  button.addEventListener("click", function () {
    const passwordField = this.closest(".custom-input-group").querySelector(
      "input"
    );
    const eyeIcon = this.querySelector("img");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.src = "./assests/login/eye.svg";
    } else {
      passwordField.type = "password";
      eyeIcon.src = "./assests/login/eye-close.svg";
    }
  });
});

// cart calculation

// solar pannel
function product(isIncrease) {
  const productInput = document.getElementById("productInput");
  let productInputText = productInput.value;

  if (isIncrease == true) {
    productInputText = parseInt(productInputText) + 1;
  } else if (productInputText > 0) {
    productInputText = parseInt(productInputText) - 1;
  }

  productInput.value = productInputText;

  // total calculation
  const productTotal = document.getElementById("total");
  productTotal.innerText = productInputText * 1060;
  console.log(productTotal);
}

// ran product: product 2
function ranProduct(ranIncrease) {
  const ranInput = document.getElementById("ranInput");
  let ranInputText = ranInput.value;
  if (ranIncrease == true) {
    ranInputText = parseInt(ranInputText) + 1;
  } else if (ranInputText > 0) {
    ranInputText = parseInt(ranInputText) - 1;
  }
  ranInput.value = ranInputText;
  // total
  const rantotal = document.getElementById("updateTotal");
  rantotal.innerText = ranInputText * 940;
}

function totalCalculation() {
  // solar product
  const productIn = document.getElementById("productInput");
  const productInText = productIn.value;
  const productInAmount = parseInt(productInText);
  const productTotalPrice = productInAmount * 1060;

  // ran product
  const ranIn = document.getElementById("ranInput");
  const ranInText = ranIn.value;
  const ranInAmount = parseInt(ranInText);
  const ranTotalPrice = ranInAmount * 940;

  const grandPrice = productTotalPrice + ranTotalPrice;
  // update on html page
  document.getElementById("gTotal").innerText = grandPrice;
}

// product plus
document.getElementById("iplus").addEventListener("click", function () {
  product(true);
  totalCalculation();
});

// product minus
document.getElementById("iminus").addEventListener("click", function () {
  product(false);
  totalCalculation();
});

// ran product  plus
document.getElementById("plusbtn").addEventListener("click", function () {
  ranProduct(true);
  totalCalculation();
});

// ran product  minus
document.getElementById("minusbtn").addEventListener("click", function () {
  ranProduct(false);
  totalCalculation();
});

// parallax

// add products upload handle
$(document).ready(function () {
  $("#fileInput").change(function (event) {
    let file = event.target.files[0];

    if (file) {
      let reader = new FileReader();
      reader.onload = function (e) {
        $("#uploadBox").html(
          `<img src="${e.target.result}" class="uploaded-image">`
        );
        $("#dropdownMenu").fadeIn();
      };
      reader.readAsDataURL(file);
    }
  });

  // Replace Image
  $("#replaceImage").click(function () {
    $("#fileInput").click();
  });

  // Delete Image
  $("#deleteImage").click(function () {
    $("#uploadBox").html(
      `<img src="./assests/add_edit_product/upload-icon.svg" alt="Upload Icon" class="upload-icon">`
    );
    $("#dropdownMenu").fadeOut();
    $("#fileInput").val("");
  });
});

// header for navbar transition
const toggler = document.getElementById("navbarToggler");
const navbar = document.getElementById("navbarNav");

toggler.addEventListener("click", () => {
  if (navbar.classList.contains("show")) {
    // CLOSE
    navbar.style.maxHeight = navbar.scrollHeight + "px"; // set height first
    requestAnimationFrame(() => {
      navbar.classList.remove("show");
      navbar.style.maxHeight = "0px"; // start collapse
    });
  } else {
    // OPEN
    navbar.classList.add("show");
    navbar.style.maxHeight = navbar.scrollHeight + "px"; // expand height

    navbar.addEventListener("transitionend", function handler() {
      navbar.style.maxHeight = ""; // reset
      navbar.removeEventListener("transitionend", handler);
    });
  }
});
