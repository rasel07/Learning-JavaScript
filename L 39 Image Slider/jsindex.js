var imagess = ["img/01.jpg", "img/02.jpg", "img/03.jpg",];
var imagTag = document.querySelector("img");

var count = 0;
function next() {
    count++;
    if (count >= imagess.length) {
        count = 0;
        imagTag.src = imagess[count];

    } else {
        imagTag.src = imagess[count]
    }
    imagTag.src = imagess[count]
}

function perv() {

    count--;
    if (count < 0) {
        count = imagess.length - 1;
        imagTag.src = imagess[count];

    } else {
        imagTag.src = imagess[count]
    }
    imagTag.src = imagess[count]

}