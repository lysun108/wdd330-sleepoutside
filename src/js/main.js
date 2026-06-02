import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");

const productList = new ProductList("tents", dataSource, listElement);
productList.init();

const newsletterForm = document.querySelector("#newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.querySelector("#newsletter-email");
    const message = document.querySelector("#newsletter-message");

    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    message.textContent =
      "Thank you for signing up for the SleepOutside newsletter!";
    emailInput.value = "";
  });
}
