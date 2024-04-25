import basket from "./basket";
import wreath from "./wreath";
import bouquet from "./bouquet";
import wedding from "./wedding";

const products = [...basket, ...wreath, ...bouquet, ...wedding];

function tags() {
  let tags = [];
  products.forEach((product) => {
    product.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
  return tags;
}

function filterProducts(tags) {
  return products.filter((product) => {
    return product.tags.some((tag) => tags.includes(tag));
  });
}

export default { products, tags, filterProducts };
