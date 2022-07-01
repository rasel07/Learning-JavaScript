// audio / video events
// canplay, play, playing, pause, progress, ended, volumechange, waitoing
const video = document.querySelector('video');
video.addEventListener("canplay", function () {
    console.log("canplay")
});

video.addEventListener("play", function () {
    console.log("play")
});

video.addEventListener("pause", function () {
    console.log("pause")
})

video.addEventListener("playing", function () {
    console.log("playing")
})

video.addEventListener("ended", function () {
    console.log("Thanks For Watching")
})