// Array that stores all current notes, ordered by the DOM.
var notes  = [];

/**
 * A JavaScript object that handles all note functions. Inclusing editing, deleting and creating of notes.
 * @param ele The base note element that this object represents.
 */
function note(ele) {
	let sidebar = ele.getElementsByClassName("note-sidebar")[0]
	
	this.remove = function() {
		ele.parentNode.removeChild(ele);
		for (let i = 0; i < notes.length; i++) {
			if (notes[i] == this) {
				notes.splice(i, 1)
			}
		}
		msnry.layout();
	}
	
	sidebar.getElementsByClassName("btn btn-outline-danger")[0].addEventListener("click", this.remove)
}

function createNoteObjects() {
	let grid = document.getElementById("grid");
	for (let i = 0; i < grid.childNodes.length; i++) {
		let child = grid.childNodes[i];
		if (child.nodeType != Node.ELEMENT_NODE) {
			// We're not interested in text nodes etc.
			continue;
		}
		if (!child.className.startsWith("note")) {
			throw "Unexpected class type: " + child.className;
		}
		notes.push(new note(child));
	}
}
createNoteObjects();