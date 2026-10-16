// product slider with thumbnail
let swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

let swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: swiper,
  },
});

//mouse hover zoom effect for slide
document.addEventListener("DOMContentLoaded", function () {
  const zoomViewer = document.getElementById("zoom-viewer");
  const zoomImage = document.getElementById("zoom-image");
  const productSlides = document.querySelectorAll(".mySwiper2 .swiper-slide");

  function showZoom(e, image) {
    const imgSrc = image.getAttribute("src");
    zoomImage.setAttribute("src", imgSrc);

    const rect = image.getBoundingClientRect();
    zoomViewer.style.top =
      window.innerWidth <= 768
        ? `${rect.bottom + window.scrollY}px`
        : `${rect.top + window.scrollY}px`;

    zoomViewer.style.left =
      window.innerWidth <= 768 ? `50%` : `${rect.right + 20}px`;

    zoomViewer.style.transform =
      window.innerWidth <= 768 ? "translateX(-50%)" : "none";
    zoomViewer.style.display = "block";
  }

  function moveZoom(e, image) {
    const rect = image.getBoundingClientRect();
    const pageX = e.pageX || e.touches?.[0]?.pageX;
    const pageY = e.pageY || e.touches?.[0]?.pageY;

    const x = pageX - rect.left - window.scrollX;
    const y = pageY - rect.top - window.scrollY;

    const xPercent = x / rect.width;
    const yPercent = y / rect.height;

    const zoomX = -(
      (zoomImage.offsetWidth - zoomViewer.clientWidth) *
      xPercent
    );
    const zoomY = -(
      (zoomImage.offsetHeight - zoomViewer.clientHeight) *
      yPercent
    );

    zoomImage.style.transform = `translate(${zoomX}px, ${zoomY}px)`;
  }

  function hideZoom() {
    zoomViewer.style.display = "none";
  }

  productSlides.forEach((slide) => {
    const image = slide.querySelector("img");

    if (!image) return;

    image.addEventListener("mouseenter", () => showZoom(null, image));
    image.addEventListener("mousemove", (e) => moveZoom(e, image));
    image.addEventListener("mouseleave", hideZoom);

    //  Mobile support
    image.addEventListener("touchstart", (e) => showZoom(e, image));
    image.addEventListener("touchmove", (e) => moveZoom(e, image));
    image.addEventListener("touchend", hideZoom);
  });
});

// Our Product Slider
let our_product_slider = new Swiper(
  ".our-product .our-product-slider-container .slide-content",
  {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".our-product .our-product-slider-container .swiper-pagination",
    },
    navigation: {
      nextEl: ".our-product .our-product-slider-container .swiper-button-next",
      prevEl: ".our-product .our-product-slider-container .swiper-button-prev",
    },
    breakpoints: {
      1600: { slidesPerView: 4, spaceBetween: 30 },
      1024: { slidesPerView: 3.5, spaceBetween: 30 },
      850: { slidesPerView: 2.5, spaceBetween: 20 },
      650: { slidesPerView: 2, spaceBetween: 20 },
      480: { slidesPerView: 1, spaceBetween: 10 },
      0: { slidesPerView: 1 },
    },
  }
);
