let add =[]

let val = 0;
let nex = document.querySelector("#next");
  let pre = document.querySelector("#prev")
  let audio = document.querySelector('#aud');
  let no = document.querySelector('#no');
  let display = document.querySelector('#display');
  let ul = document.querySelector('#list');
  let listbtn = document.querySelector('#showbtn');

  audio.addEventListener('ended', function() {
    if(add.length>0){
       audio.src=`audio/${add[0]}`
       display.value=add[0]
     let ind=music.indexOf(`audio/${add[0]}`)
       no.value=++ind
       audio.play()
       add.length=0;
    }else{
      next()
    }
});
  let music = [
    "audio/Hanuman Chalisa-(PagalWorld).mp3",
    "audio/Ram-Aayenge(PaglaSongs).mp3",
    "audio/Bajrang Baan Lofi(PagalWorld.com.cm).mp3",
    "audio/Allah Ke Bande Waisa Bhi Hota Hai Part 2 320 Kbps.mp3",
    "audio/Meri Bheegi Bheegi Si Anamika 320 Kbps.mp3",
    "audio/Pal Pal Dil Ke Pas.mp3",
    "audio/Tune Jo Na Kaha (slowed + reverbed)(KoshalWorld.Com).mp3",
    "audio/Bam Lahiri Shor In The City Original Motion Picturetrack 320 Kbps.mp3",
    "audio/Bhaang Ragad Ke.mp3"
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
    let n = e.target.className.split(" ")[1]
    no.value=++n
    audio.play()
  }

  listbtn.addEventListener("click",()=>{
    ul.classList.toggle("show")
  })
  
  for (let index = 0; index < music.length; index++) {
    let playbtn = document.createElement("button")
    let addbtn = document.createElement("button")
    playbtn.className=`bt ${index}`
    addbtn.innerText="Add to next"
    addbtn.className="btnadd"
    let br = document.createElement("br")
let d = music[index].split("/");
playbtn.innerText = d[1]
ul.append(playbtn,addbtn,br)
ul.classList.add("show")
playbtn.addEventListener("click",song);
addbtn.addEventListener("click",function(){
  add.length=0
  add.push(d[1])
     })
  }
