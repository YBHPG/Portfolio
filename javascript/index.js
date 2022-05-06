var lastKnownScrollY = 0;
var currentScrollY = 0;
var ticking = false;
var idOfHeader = "block-1_content";
var eleHeader = null;
const classes = {
  pinned: "header-pin",
  unpinned: "header-unpin",
};
function onScroll() {
  currentScrollY = window.pageYOffset;
  if (currentScrollY < lastKnownScrollY) {
    pin();
  } else if (currentScrollY > lastKnownScrollY) {
    unpin();
  }
  lastKnownScrollY = currentScrollY;
}
function pin() {
  if (eleHeader.classes.contains(classes.unpinned)) {
    eleHeader.classes.remove(classes.unpinned);
    eleHeader.classes.add(classes.pinned);
  }
}
function unpin() {
  if (
    eleHeader.classes.contains(classes.pinned) ||
    !eleHeader.classes.contains(classes.unpinned)
  ) {
    eleHeader.classes.remove(classes.pinned);
    eleHeader.classes.add(classes.unpinned);
  }
}
window.onload = function () {
  eleHeader = document.getElementById(idOfHeader);
  document.addEventListener("scroll", onScroll, false);
};
