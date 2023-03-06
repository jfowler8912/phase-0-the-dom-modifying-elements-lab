// Write your code here!
// body.removeChild (main)
// const html = body.getElementsByTagName("main")[0];
// const secondChild = ul.querySelector("main");
// ul.removeChild(secondChild);
const main = document.querySelector("main#main")
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent = "Josh is the champion";
console.log(newHeader.textContent)