// video paly on button click 
let home = document.querySelector(".home");
let video = document.querySelector(".home video");
let videoSrc = document.querySelector(".home video").getAttribute("src");
let clickButton = document.querySelector(".home button");


clickButton.addEventListener("click", displayVideo);
function displayVideo(){
    home.style.background = `url('/../${videoSrc}')`;
    video.style.display = "block";
    clickButton.style.display = 'none';
    video.addEventListener('ended', hideVideo);
}

function hideVideo(){
    let style = home.style;
    style.background = "url('/../img/main/dr-octopus-1.jpg')";
    style.backgroundRepeat = "no-repeat";
    style.backgroundSize = "cover";
    style.backgroundPosition = "center";
    video.style.display = "none";
    clickButton.style.display = 'block';
}
