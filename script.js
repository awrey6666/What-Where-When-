const pannel = document.querySelector(".sound_pannel")
const sounds_arr = ["theme", "gimn", "game", "gong", "volchok", "minute", "blic", "black", "point 1", "point 2", "point 3", "lose 1", "lose 2",  "win", "ending"]
const images_arr=["jazz", "gimn", "table", "gong", "volchok2","clock", "time",  "black", "point", "point", "point", "lose", "lose", "win", "ending",]
////////////////////////////////////////////////////////////////////////////////////////
sounds_arr.forEach((element, index) => {
    let sound_box = document.createElement("div")
    sound_box.classList.add("sound_box")
    sound_box.innerHTML = `
                <div class="sound"> 
                    <audio src="sounds/${element}.mp3" class="audio"></audio>
                    <div class="red_circle"> </div>
                     <h3 class="sound_name">${element}</h3>
                </div>
                <div class="button_panel">
                    <div class="control_buttons start_stop">   <i class="fa fa-play" aria-hidden="true"></i>         </div>
                    <div class="control_buttons reset">        <i class="fa fa-undo" aria-hidden="true"></i>         </div>
                    <div class="control_buttons volume">       <i class="fa fa-volume-up" aria-hidden="true"></i>    </div>
                    <div class="control_buttons X2">           <i class="fa fa-step-forward" aria-hidden="true"></i> </div>
                </div>`
    sound_box.style.backgroundImage=`url(images/${images_arr[index]}.jpg)`
    pannel.append(sound_box)
});
////////////////////////////////////////////////////////////////////////////////////////
const reds=document.querySelectorAll(".red_circle")
const audios = document.querySelectorAll(".audio")
const starts = document.querySelectorAll(".start_stop")
const resets = document.querySelectorAll(".reset")
const volumes = document.querySelectorAll(".volume")
const X2s = document.querySelectorAll(".X2")

//////////////////////////////////////////////////////////////////////////////////////
starts.forEach((e, i) => {
    e.addEventListener("click", function () {
        if (audios[i].classList.contains("played")) {
            e.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`
            audios[i].pause()
            audios[i].classList.remove("played")
            reds[i].style.display="none"
        }
        else {
            e.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>`
            audios[i].play()
            audios[i].classList.add("played")
            reds[i].style.display="flex"
        }
    })
});
//////////////////////////////////////////////////////////////////////////////////////
resets.forEach((e, i) => {
    e.addEventListener("click", function () {
        if (audios[i].currentTime !== 0) {
            starts[i].innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`
            audios[i].currentTime = 0;
            audios[i].pause()
            audios[i].classList.remove("played")
            reds[i].style.display="none"
        }
    })
});
// //////////////////////////////////////////////////////////////////////////////////////
volumes.forEach((e, i) => {
    let valume = 1
    e.addEventListener("click", function () {
        if (valume == 1) {
            e.innerHTML = `<i class="fa fa-volume-off" aria-hidden="true"></i>`
            audios[i].volume = 0
            valume = 0
        }
        else {
            e.innerHTML = `<i class="fa fa-volume-up" aria-hidden="true"></i>`
            audios[i].volume = 1
            valume = 1
        }
    })
});
// //////////////////////////////////////////////////////////////////////////////////////
X2s.forEach((e, i) => {
    e.addEventListener("mousedown", function () {
        if (audios[i].classList.contains("played")) {
            audios[i].playbackRate = 1.75
            e.innerHTML =`<i class="fa fa-fast-forward" aria-hidden="true"></i>`
        }
    })
    e.addEventListener("mouseup", function () {
        audios[i].playbackRate = 1
        e.innerHTML = `<i class="fa fa-step-forward" aria-hidden="true"></i>`
    })
});
////////////////////////////////////////////////////////////////////////////////////////
audios.forEach((e, i) => {
    e.addEventListener("ended", function () {
        starts[i].innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`
        audios[i].classList.remove("played")
        reds[i].style.display="none"
    })
});

////////////////////////////////////////////////////////////////////////////////////////
