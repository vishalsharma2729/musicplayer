
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
    "audio/Ram-Aayenge(PaglaSongs).mp3",
    "audio/Bajrang Baan Lofi(PagalWorld.com.cm).mp3"
 ]

 let sum =0;
audio.src = music[sum];
no.value=sum+1;

  const next = ()=>{
if(sum<music.length-1){
    audio.src=music[sum+=1]
    no.value=sum+1;
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
    no.value=sum+1;
    audio.play()
    nex.disabled=false;
    nex.className="btn";
}else{
  pre.className="butt"
  pre.disabled = true;
}
  }

  