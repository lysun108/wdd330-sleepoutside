import { renderListWithTemplate } from "./utils.mjs";

const productPages = {
  "985PR": "cedar-ridge-rimrock-2.html",
  "344YJ": "marmot-ajax-3.html",
  "880RT": "northface-alpine-3.html",
  "985RF": "northface-talus-4.html",
};

function productCardTemplate(product) {
  const imageSrc = product.Image.startsWith("/")
    ? product.Image
    : `/${product.Image}`;

  const pageFile = productPages[product.Id];

  return `<li class="product-card">
    <a href="/product_pages/${pageFile}">
      <img
        src="${imageSrc}"
        alt="Image of ${product.Name}"
        onerror="this.src='/images/noun_Tent_2517.svg'"
      >
      <h2 class="card__brand">${product.Brand.Name}</h2>
      <h3 class="card__name">${product.NameWithoutBrand}</h3>
      <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(
      productCardTemplate,
      this.listElement,
      list,
      "afterbegin",
      true
    );
  }
}
