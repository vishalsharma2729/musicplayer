
let val = 0;
let nex = document.querySelector("#next");
  let pre = document.querySelector("#prev")
  let audio = document.querySelector('#aud');
  let no = document.querySelector('#no');
  let display = document.querySelector('#display');
  let ul = document.querySelector('#list');
  audio.addEventListener('ended', function() {
    next()
});
  let music = [
    "audio/Hanuman Chalisa-(PagalWorld).mp3",
    "audio/Ram-Aayenge(PaglaSongs).mp3",
    "audio/Bajrang Baan Lofi(PagalWorld.com.cm).mp3",
    "audio/Allah Ke Bande Waisa Bhi Hota Hai Part 2 320 Kbps.mp3",
    "audio/Meri Bheegi Bheegi Si Anamika 320 Kbps.mp3",
    "audio/Pal Pal Dil Ke Pas.mp3",
    "audio/Tune Jo Na Kaha (slowed + reverbed)(KoshalWorld.Com).mp3",
    "audio/Bam Lahiri Shor In The City Original Motion Picturetrack 320 Kbps.mp3"
 ]

 let sum =0;
audio.src = music[sum];
no.value=sum+1;
let d = music[sum].split("/");
display.value = d[1]

  const next = ()=>{
if(sum<music.length-1){
    audio.src=music[sum+=1]
    no.value=sum+1;
    let d = music[sum].split("/");
display.value = d[1]
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
    let d = music[sum].split("/");
display.value = d[1]
    audio.play()
    nex.disabled=false;
    nex.className="btn";
}else{
  pre.className="butt"
  pre.disabled = true;
}
  }
  
  const song = (e)=>{
    audio.src =`audio/${e.target.innerHTML}`
    display.value = e.target.innerHTML
    audio.play()
  }

  for (let index = 0; index < music.length; index++) {
    let btn = document.createElement("button")
    btn.className="btn"
    let br = document.createElement("br")
let d = music[index].split("/");
btn.innerHTML = d[1]
    ul.append(btn,br)
    btn.addEventListener("click",song)
  }
