import data from "./product.js";

const categories = data.map((item) => {
  const cat = {};
  cat.category = item.category;
  cat.cover = item.cover;
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
  // remove the digits at the end of the file name
  return name.replace(/[0-9]{1,2}$/, "");
}

function getProductImageUrl(cat, file) {
  return `/img/ps/${cat}/${file}`;
}

function tags() {
  const cats = categories.map((cat) => cat.category);
  // add the "all" category
  cats.unshift("all");
  return cats;
}

function filterProducts(category) {
  if (category === "all" || category === "") {
    return categories.map((cat) => cat.items).flat();
  }

  const list = categories.filter((product) => {
    return product.category === category;
  });
  return list.length > 0 ? list[0].items : [];
}

export default { categories, tags, filterProducts };
