// PriceRange.js
class PriceRange {
  constructor(container) {
    this.container = container;
    this.rangeInput = container.querySelectorAll(".range-input input");
    this.priceInput = container.querySelectorAll(".price-input input");
    this.range = container.querySelector(".slider .progress");
    this.priceGap = 1000;
    this.initEvents();
  }

  initEvents() {
    this.priceInput.forEach((input) => {
      input.addEventListener("input", (e) => this.handlePriceInput(e));
    });

    this.rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => this.handleRangeInput(e));
    });
  }

  handlePriceInput(e) {
    let minPrice = parseInt(this.priceInput[0].value);
    let maxPrice = parseInt(this.priceInput[1].value);

    if (
      maxPrice - minPrice >= this.priceGap &&
      maxPrice <= this.rangeInput[1].max
    ) {
      if (e.target.classList.contains("input-min")) {
        this.rangeInput[0].value = minPrice;
        this.range.style.left = (minPrice / this.rangeInput[0].max) * 100 + "%";
      } else {
        this.rangeInput[1].value = maxPrice;
        this.range.style.right =
          100 - (maxPrice / this.rangeInput[1].max) * 100 + "%";
      }
    }
  }

  handleRangeInput(e) {
    let minVal = parseInt(this.rangeInput[0].value);
    let maxVal = parseInt(this.rangeInput[1].value);

    if (maxVal - minVal < this.priceGap) {
      if (e.target.classList.contains("range-min")) {
        this.rangeInput[0].value = maxVal - this.priceGap;
      } else {
        this.rangeInput[1].value = minVal + this.priceGap;
      }
    } else {
      this.priceInput[0].value = minVal;
      this.priceInput[1].value = maxVal;
      this.range.style.left = (minVal / this.rangeInput[0].max) * 100 + "%";
      this.range.style.right =
        100 - (maxVal / this.rangeInput[1].max) * 100 + "%";
    }
  }
}

// Initialize all instances
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".price-range").forEach((container) => {
    new PriceRange(container);
  });
});
