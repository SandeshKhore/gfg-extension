window.onload = async () =>{
    await new Promise((resolve, reject) => {
        setTimeout(resolve,3000);
    })
    const videos = document.querySelector(".track_item__inner");
    let curr;
    if (videos) {
        console.log(videos);
        const videosList = videos.children[0].children[2];
        console.log(videosList);
        console.log(videosList.children);
        console.log(videosList.children.length);
        let links = [];
        for(let i = 0;i<videosList.children.length;i++){
            let pos = videosList.children[i].children[0];
            // console.log(pos.classList.length>1);
            if(pos.classList.length>1){
                curr = i;
            }
            links = [...links,pos.href];
        }

        const video = document.querySelector("video");
        video.setAttribute("autoplay","");
        // video.setAttribute("muted","");
        video.autoplay = true; // This sets the intent for autoplay
        // video.muted = true; // Optionally mute the video to avoid autoplay restrictions
        video.volume = 0;
        video.play().catch(error => {
          console.error('Error attempting to play the video:', error);
        });
        video.addEventListener("ended",()=>{
            if(curr<videosList.children.length-1){
                curr++;
                window.location.href = links[curr];
            }
            
        })
        console.log(video);
        console.log(links);
        console.log(curr);
    } else {
        console.log("Videos element not found.");
    }
};