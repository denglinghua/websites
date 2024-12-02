import data from "./product.js";

const categories = data.map((item) => {
  const cat = {};
  cat.category = item.category;
  cat.items = item.files.map((file) => {
    const item = {};
    item.id = file;
    item.name = getProductName(file);
    item.imgUrl = getProductImageUrl(cat.category, file);
    return item;
  });
  return cat;
});

function getProductName(file) {
  // remove the sequence number from the file name
  // xx, -xx, _xx
  const name = file.replace(/[-_]\d+$/, "");
  return name;
}

function getProductImageUrl(cat, file) {
  return `/img/ps/${cat}/${file}.jpg`;
}

function tags() {
  return categories.map((cat) => cat.category);
}

function filterProducts(tags) {
  const list = categories.filter((product) => {
    return product.category === tags[0];
  });
  return list.length > 0 ? list[0].items : [];
}

export default { categories, tags, filterProducts };
