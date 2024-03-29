import dried_floral from "./dried-floral";
import home_decor from "./home-decor";

const products = [...dried_floral, ...home_decor];

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
