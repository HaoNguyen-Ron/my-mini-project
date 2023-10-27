const progress = document.getElementById('progress');
const song = document.getElementById('song');
const ctrlIcon = document.getElementById('ctrlIcon');
const spinStop = document.getElementById('spinStop');
const like = document.getElementById('like')
const songDuration = document.querySelector('.duration')
const songRemain = document.querySelector('.remain');
const btnNext = document.querySelector('.fa-forward');
const btnPre = document.querySelector('.fa-backward');
let musicName =  document.querySelector('.song-title h3');
let musicArtist = document.querySelector('.song-title p');
let indexSong = 0;

const musicLists = [
    {
        id:'1',
        image: 'DiscThumbnail.jpg',
        title: 'Voice of No Return',
        arttist:'Keiichi Okabe',
        totalTime:'2:53',
        file: 'VoiceOfNoReturnNormal.mp3',
    },
    {
        id:'2',
        image: 'DiscThumbnail.jpg',
        title:'Amusement Park',
        arttist:'Keigo Hoashi',
        totalTime:'6:19',
        file: 'AmusementPark.mp3'
    },
    {
        id:'3',
        image: 'DiscThumbnail.jpg',
        title:'Birth of A Wish',
        arttist:'Keiichi Okabe',
        totalTime:'4:40',
        file: 'BirthOfAWish.mp3'
    },
    {
        id:'4',
        image: 'DiscThumbnail.jpg',
        title:'Blissful Death',
        arttist:'Keiichi Okabe',
        totalTime:'2:36',
        file: 'BlissfulDeath.mp3'
    },
    {
        id:'5',
        image: 'DiscThumbnail.jpg',
        title:'City Ruin Ray of Light',
        arttist:'Keiichi Okabe',
        totalTime:'6:22',
        file: 'CityRuinsRaysOfLight.mp3'
    },
    {
        id:'6',
        image: 'DiscThumbnail.jpg',
        title:'Copied City',
        arttist:'Keigo Hoashi',
        totalTime:'4:00',
        file: 'CopiedCity.mp3'
    },
    {
        id:'7',
        image: 'DiscThumbnail.jpg',
        title:'Peacefull Sleep',
        arttist:'Keiichi Okabe',
        totalTime:'6:52',
        file: 'PeacefulSleep.mp3'
    },
    {
        id:'8',
        image: 'DiscThumbnail.jpg',
        title:'Song of The Ancients',
        arttist:'Keiichi Okabe',
        totalTime:'5:10',
        file: 'SongOfTheAncientsAtonement.mp3'
    },
    {
        id:'9',
        image: 'DiscThumbnail.jpg',
        title:'Vague Hope',
        arttist:'Keigo Hoashi',
        totalTime:'3:36',
        file: 'VagueHopeColdRain.mp3'
    },
    {
        id:'10',
        image: 'DiscThumbnail.jpg',
        title:'Voice of No Return 2',
        arttist:'Keiichi Okabe',
        totalTime:'3:52',
        file:'VoiceOfNoReturnGuitar.mp3',
        
    }
]


//loop to create a playlist from the above musicList array 
let html = '';
for(let i =0; i<musicLists.length; i++){
    html += `
        <div class="d-grid gap-2 music-list-wrapper">
            <button class="btn btn-light music-list row d-flex justify-content-center align-items-center rounded-4" type="button" onclick="chosenMusic(this)">
                <div class="col-1">
                    <h4>${musicLists[i].id}</h4>
                </div>
                <div class="col-2">
                    <img src="${musicLists[i].image}" alt="music-pic" class="music-pic">
                </div>
                <div class="col-3 d-flex align-items-center">
                    <span class="name-icon"> <i class="fa-solid fa-caret-right"></i></span>

                    <b>${musicLists[i].title}</b>
                </div>  

                <div class="col-3">
                    <p>${musicLists[i].arttist}</p>
                </div>
                
                <div class="col-2">
                    <p>${musicLists[i].totalTime}</p>
                </div>
                <div class="col-1">
                    <i class="fa-solid fa-heart" id="like" onclick="clicktolike(this)"></i>
                </div>
            </button>
        </div>
    `
}
document.querySelector('.button-warpper').innerHTML=html;


            // rightside
//set default song in the array
song.setAttribute('src',`./Musics/${musicLists[indexSong].file}`);


//timer
function showtimer(){
    const {duration,currentTime} = song
    songRemain.innerHTML=formatTime(song.currentTime);
    if (!duration){
        songDuration.innerHTML='00:00'
    }else {
        songDuration.innerHTML= formatTime(song.duration);
    }
}
function formatTime(number){
    const min = Math.floor(number/60);
    const sec = Math.floor(number - min *60)
    return `${min<10 ? '0' + min:min}:${sec<10?'0' + sec:sec}`;
}
showtimer()
setInterval(showtimer,300);


// play and pause button
song.onloadedmetadata = ()=>{
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        spinStop.classList.add("music-disc-stop");
        spinStop.classList.remove("music-disc-spin")
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        spinStop.classList.add("music-disc-spin");
        spinStop.classList.remove("music-disc-stop");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
}
progress.onchange =()=>{
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
};

// next & previous button
btnNext.addEventListener('click', function(){
    changeSong(1);

})
btnPre.addEventListener('click', function(){
    changeSong(-1);

})
function changeSong(clickchange){
    if(clickchange ==1){
        indexSong++;
        if(indexSong>=musicLists.length){
            indexSong=0
        }
    } else if (clickchange ==-1){
        indexSong--
        if(indexSong < 0){
            indexSong=musicLists.length-1;
        }
    }
    const selectedMusic = musicLists[indexSong];
    song.setAttribute('src', `./Musics/${selectedMusic.file}`);
    musicName.textContent = selectedMusic.title;
    musicArtist.textContent = selectedMusic.arttist;

    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
};



            // leftside
// liked song
function clicktolike(heart) {
    heart.classList.toggle("heart-liked");
};

//choose song to hear
function chosenMusic(button) {
    const index = parseInt(button.querySelector('h4').textContent) -1 ;
    const selectedMusic = musicLists[index];
    song.setAttribute('src', `./Musics/${selectedMusic.file}`);
    musicName.textContent = selectedMusic.title;
    musicArtist.textContent = selectedMusic.arttist;
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

//song automatically change to new song when end
song.addEventListener('ended',handleEndedSong);
function handleEndedSong(){
    changeSong(1);
}

