function isSmallScreen() {
  return window.innerWidth < window.innerHeight;
}

function getImgDomain() {
  return process.env.DEV ? "/" : "https://img.giftloving.ca/";
}

export { isSmallScreen, getImgDomain };
