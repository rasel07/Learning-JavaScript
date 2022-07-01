// DOE Events
/* 1. Event Object
Event Type : change, submit, load, unload, opne, play
canplay, pause, playing, progress, ended, resize, scroll, toggle etc.
- properties: type, target, preventDefaults () */

//2. MouseEvent object
//3 KeyboardEvent Object
//4. FocusEvent Object
//5. ClipboardEvent Object
//6. DragEvent Object

const input = document.querySelector("input[name=name]")
input.addEventListener("change", changeHandler);

function changeHandler(e) {
    console.log(e.target.value)

}

