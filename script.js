let time=60;
let score=0;
let hitval;

document.querySelector(".pbottom").addEventListener("click",function(e){
  let hit=Number(e.target.textContent);
  if(hit==hitval){
     incScore();
     makeBubble();
     newHit();
    

  }
  
})


function newHit(){
  hitval=Math.floor(Math.random()*10);
  document.querySelector("#newhit").textContent=hitval;
} 
function incScore(){
  score+=10;
  document.querySelector("#scoreVal").textContent=score;
}

function makeBubble(){
  let clutter='';
  for(let i=1;i<=160;i++){
    let ran=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${ran}</div>`;

  }
  document.querySelector(".pbottom").innerHTML=clutter;
}

function timer(){
  let stop=setInterval(function(){
    if(time>0){
      time--;
      document.querySelector("#timer").innerHTML=time;
    }
    else{
      clearTimeout(stop);
      document.querySelector(".pbottom").innerHTML=`<h1 id="gane">Game over</h1> <button id="replay" onclick="location.reload()">Play again</button>`;
    }

  },1000)
  
}
// document.querySelector("#replay").addEventListener("click",function()){
//   window.location.reload();
// }




makeBubble();
timer();
newHit();








