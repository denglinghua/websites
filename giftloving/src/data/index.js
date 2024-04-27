import basket from "./basket";
import wreath from "./wreath";
import bouquet from "./bouquet";
import wedding from "./wedding";

import { getImgDomain } from "src/g";

const products = [...basket, ...wreath, ...bouquet, ...wedding];

function setSubImgs(product, imgDomain) {
  if (product.slides) {
    return;
  }

  let slides = [product.image];
  if (product.subImages) {
    for (let i = 1; i <= product.subImages; i++) {
      slides.push(subImgName(product.image, i));
    }
  }
  product.slides = slides.map((img) => getImgUrl(img, imgDomain));
}

function subImgName(mainName, seqNo) {
  const [name, extension] = mainName.split(".");
  return `${name}_${seqNo}.${extension}`;
}

function getImgUrl(img, imgDomain) {
  return `${imgDomain}img/ps/${img}`;
}

function initProducts() {
  const imgDomain = getImgDomain();
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.id = i;
    product.imgUrl = getImgUrl(product.image, imgDomain);
    setSubImgs(product, imgDomain);
  }
}

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

initProducts();

export default { products, tags, filterProducts };
