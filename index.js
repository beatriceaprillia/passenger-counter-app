// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el"); //pass in the argument
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

/* DOM: Document Object Model (aka how u use JS to modify a web)
-> Document: because what we're interacting with is HTML document
-> Object: bcs the document keyword in JS is of data type object, 
meaning they've taken the HTML doc and shoved it into JS object
-> Model: representation (HTML as the real thing, and JS as the representation)
*/

function save() {
  let countStr = count + " - "; //Create a variable that contains both the count and the dash separator, i.e. "12 - "
  saveEl.textContent += " " + countStr; //Render the variable in the saveEl using innerText
  countEl.textContent = 0; //When we press SAVE, count is automatically become 0 again
  count = 0;
}
