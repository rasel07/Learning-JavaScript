// DragEvent Object

//ondragstart
//ondrag
//ondragend
//ondragenter
//ondragleave
//ondragover
// ondrop

const box = document.querySelector("#div1");
const textp = document.querySelector("#drag1")

textp.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("text", e.target.id)
});

box.addEventListener("dragover", function (e) {
    e.preventDefault()
});

box.addEventListener("drop", function (e) {
    let id = e.dataTransfer.getData("text");
    box.appendChild(document.getElementById(id));
    e.preventDefault()
})