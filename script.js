const videoBox = document.querySelector(".placeholder");
const newVideo = document.createElement("video");
    newVideo.setAttribute("src" , "media/Yorushika - Spring Thief.mp4");
    newVideo.setAttribute("id" , "vid-playing");
    
videoBox.appendChild(newVideo);

playMedia = () => {
    newVideo.mute = true;
    newVideo.play();
}

stopMedia = () => {
    newVideo.pause();

}

showControls = () => {
    newVideo.controls = true;
  
}


newVideo.addEventListener("mouseover", playMedia);
newVideo.addEventListener("mouseout", stopMedia);
newVideo.addEventListener("click", showControls);


thumbnail("#thumb-1" , "media/rickroll.mp4" , "Rickrollz");
thumbnail("#thumb-2" , "media/vid-2.mp4" , "Random Things");
thumbnail("#thumb-3" , "media/vid-3.mp4" , "Food cravings");
thumbnail("#thumb-4" , "media/vid-4.mp4" , "Group of Seagulls");

function thumbnail (parentID , mediaSource , thumbnailTitle) {
    const thumbnailVideo = document.querySelector(parentID);
    const video = document.createElement("video");
        video.setAttribute("src", mediaSource);
        video.setAttribute("class" , "vid-s");
        
    const title = document.createElement("span");
        title.setAttribute("class" , "video-title");
        title.innerHTML = thumbnailTitle;

    thumbnailVideo.append(video);
    thumbnailVideo.append(title);
}   

const myEvent = document.querySelector(".col-r");
    myEvent.addEventListener("mouseover", eventDelegation);
    // myEvent.addEventListener("mouseout", stopThumb);


function eventDelegation(e) {
    const target = e.target;
    if (target.matches("video")){
        playThumb(target);
    } 
    /* I don't know how do the else statement or mouseout event delegation to stop the video thumbnail */
}

function playThumb(target){
    target.muted = true;
    target.play();
}
