// Array that stores all current notes, ordered by the DOM.
var notes  = [];

/**
 * A JavaScript object that handles all note functions. Inclusing editing, deleting and creating of notes.
 * @param ele The base note element that this object represents.
 */
function note(ele) {
	/*
		Quick rundown on how the JavaScript works here.
		We're using "note(ele)" to create an object. The arguments to this function are basically the constructor arguments, except that they are accessable throughout the entire object for its entire lifespan (while with Java, unless they're saved to local variables they're lost after the object is constructed.).
		All code inside this function is run:
			"let sidebar = ..." is creating a local variable. This is akin to a private variable, it can not be accessed outside note (in Chrome console, try "notes[0].sidebar"). This is because we defined it using "let" ("var" would also have the same effect, https://www.w3schools.com/js/js_let.asp).
			"this.remove = function() { ..." is creating a public function. It is public because we assigned it using "this" (try "notes[0].remove()"). If we wanted a private function, we could define it like so: "[let|var] remove = function() {..."
			"sidebar.getElement..." is not defining anything. Instead it is adding an event listener. As stated above, all code in "note(ele)" is run when the object is crated.
		
		tl;dr: Use "this.identifier = ..." to create a public identifier. Use "[let|var|const] identifier = ..." to create a private identifier.
	*/
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