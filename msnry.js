var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.note',
  columnWidth: '.note',
  percentagePosition: true,
  gutter: 20,
  fitWidth: true
});
window.addEventListener("resize", () => {
	msnry.layout();
})