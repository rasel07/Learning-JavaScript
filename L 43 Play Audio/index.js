for (var i = 0; i < 3; i++) {

    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);

        switch (text) {
            case "a":
                var audio = new Audio("sounds/1.mp3");
                audio.play();
                break;

            case "b":
                var audio = new Audio("sounds/2.mp3");
                audio.play();
                break;

            case "c":
                var audio = new Audio("sounds/3.mp3");
                audio.play();
                break;
        }

    })

}

