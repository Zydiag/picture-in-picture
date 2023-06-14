const videoElement = document.getElementById('video');
const button = document.getElementById('button');


async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetada = () => {
            videoElement.play();
        }
        console.log(mediaStream);
    } catch (error) {
        console.log('error here:', error);
    }
}

//On load
selectMediaStream();