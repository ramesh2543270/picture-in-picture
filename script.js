const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass to vide element , then ply

async function selectMediaStream(){
    try{
            const mediaStream = await navigator.mediaDevices.getDisplayMedia();
            videoElement.srcObject = mediaStream;
            videoElement.onloadedmetadata = () => {
                videoElement.play();
            }
    }catch(e){
        // Catch our errors
        console.log('Whoops, error here ', e);
    }
}

button.addEventListener('click' , async () => {
    //Disable
    button.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset 
    button.disabled = false;
});

// On LOA
selectMediaStream();