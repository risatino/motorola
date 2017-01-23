function changeColor(box) {
  console.log(box);
  // .style["CSS-ATTRIBUTE"] can change the styling of the element
  box.style["background-color"] = "gray";
}

function addText(box) {
  box.innerHTML = "Lorem Ipsum test test test button ";
}

function addClass(box) {
  box.className += " light";
}

function readText() {
  var boxWithText = document.getElementById("textbox");
  alert(boxWithText.innerHTML);
}

function fillwithtext(text, elementID) {
    document.getElementById(elementID).innerHTML = text;
}
