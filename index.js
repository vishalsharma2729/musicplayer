
let val = 0;
let nex = document.querySelector("#next");
  let pre = document.querySelector("#prev")
  let audio = document.querySelector('#aud');
  let no = document.querySelector('#no');
  audio.addEventListener('ended', function() {
    next()
});
  let music = [
    "audio/Hanuman Chalisa-(PagalWorld).mp3",
    "music/WhatsApp Audio 2024-02-13 at 3.47.00 PM (1).mpeg",
    "music/WhatsApp Audio 2024-02-13 at 3.46.59 PM (10).mpeg",
    "music/128-Tere Naam - Tere Naam 128 Kbps.mp3",
    "music/Tune Jo Na Kaha (slowed + reverbed)(KoshalWorld.Com).mp3",
   "music/WhatsApp Audio 2024-02-13 at 3.46.59 PM.mpeg",
  "music/WhatsApp Audio 2024-02-13 at 3.46.59 PM (1).mpeg",
  "music/WhatsApp Audio 2024-02-13 at 3.46.59 PM (3).mpeg",
 " music/Hiriye_6.mp3",
 "music/Kyo Kisi Ko - Tere Naam 320 Kbps.mp3",
 "music/Main Vichara.mp3",
  "music/WhatsApp Audio 2024-02-13 at 3.46.59 PM (4).mpeg",
  "music/WhatsApp Audio 2024-02-13 at 3.46.59 PM (6).mpeg",
  "music/WhatsApp Audio 2024-02-13 at 3.46.59 PM (9).mpeg",
  "music/WhatsApp Audio 2024-02-13 at 3.47.00 PM (2).mpeg",
  "music/WhatsApp Audio 2024-02-13 at 3.47.00 PM (4).mpeg",
  "music/WhatsApp Audio 2024-02-13 at 3.47.00 PM (5).mpeg",
  "music/WhatsApp Audio 2024-02-13 at 3.47.00 PM (6).mpeg",
"music/WhatsApp Audio 2024-02-13 at 3.47.00 PM (8).mpeg",
"music/WhatsApp Audio 2024-02-13 at 3.47.00 PM (9).mpeg",
"music/WhatsApp Audio 2024-02-13 at 3.47.00 PM.mpeg"
 ]

 let sum =0;
audio.src = music[sum];
no.value=sum;

  const next = ()=>{
if(sum<music.length-1){
    audio.src=music[sum+=1]
    no.value=sum;
    audio.play();
    pre.disabled = false;
    pre.className="btn"
}else{
  nex.disabled = true;
  nex.className="butt";
}
  }

  const prev = ()=>{
if(sum>0){
    audio.src=music[sum-=1]
    no.value=sum;
    audio.play()
    nex.disabled=false;
    nex.className="btn";
}else{
  pre.className="butt"
  pre.disabled = true;
}
  }