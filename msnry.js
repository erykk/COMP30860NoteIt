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
});

document.querySelector('#new-note-ta').addEventListener("focus", () => {
  setTimeout(msnry.layout(), 1000);
});

document.querySelector('#new-note-ta').addEventListener("focusout", () => {
  setTimeout(msnry.layout(), 1000);
})
