const video = document.querySelector("video");
const VIDEO_PATH = "videos"
video.controls = false;
let isFinished = true;

function switchVideo(key) {
    if (!isFinished)
        return;

    let videoLink = "";

    switch(key) {
        case 'a':
            videoLink =`${VIDEO_PATH}/a.mp4`
            break;
        case 'b':
            videoLink = `${VIDEO_PATH}/b.mp4`
            break;
        case 'c':
            videoLink = `${VIDEO_PATH}/c.mp4`
            break;

        default:
            break
    }

    if (!videoLink)
        return;

    isFinished = false;
    video.src = videoLink;
    video.load();

    video.addEventListener('canplaythrough', () => {
        video.muted = false;
        video.play().catch(error => {
            console.error("Playback failed:", error);
        });
    }, { once: true })
}

window.addEventListener('keydown', (event) => {switchVideo(event.key)});
video.addEventListener('ended', (event) => {
    isFinished = true;
    video.src = "";
});