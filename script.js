function show(n){
document.querySelectorAll(".card").forEach(x=>x.classList.add("hidden"));
document.getElementById("s"+n).classList.remove("hidden");
}

function check(){
let v=document.getElementById("q1").value.toLowerCase();
document.getElementById("result").innerHTML="Съдът приема отговора. Архивът потвърждава: Relax, Надежда - 2018 ❤️";
}

function timer(){
let start=new Date("2019-09-26T00:00:00");
let now=new Date();
let s=Math.floor((now-start)/1000);
let years=Math.floor(s/(365.25*24*3600));
s%=Math.floor(365.25*24*3600);
let days=Math.floor(s/(24*3600)); s%=86400;
let h=Math.floor(s/3600); s%=3600;
let m=Math.floor(s/60); let sec=s%60;
document.getElementById("time").innerHTML=
years+" години<br>"+days+" дни<br>"+h+" часа "+m+" минути "+sec+" секунди";
}
setInterval(timer,1000); timer();

let icons=["❤️","🔨","🔩","✨"];
setInterval(()=>{
let e=document.createElement("span");
e.innerHTML=icons[Math.floor(Math.random()*icons.length)];
e.style.left=Math.random()*100+"%";
e.style.animationDuration=(3+Math.random()*5)+"s";
document.getElementById("falling").appendChild(e);
setTimeout(()=>e.remove(),8000);
},300);
