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

//finding the elements
const form = document.querySelector('form');
const name = form.querySelector('#name');
const email = form.querySelector('#email');
const password = form.querySelector('#password');

form.addEventListener('submit', formHandler);
function formHandler(e) {
    e.preventDefault();
    //console.log(name.value)
    //console.log(email.value)
    //console.log(password.value)

    const unserInfo = {
        Name: name.value,
        Email: email.value,
        Password: password.value,
    }
    console.log(unserInfo);
    name.value = "";
    email.value = "";
    password.value = "";


}


