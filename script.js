let current=0;
const screens=document.querySelectorAll(".screen");

function next(){
screens[current].classList.remove("active");
current++;
screens[current].classList.add("active");
}

function answer(ok){
let f=document.getElementById("feedback");
let c=document.getElementById("continue");
if(ok){
f.innerHTML="Правилно. Архивът потвърждава: Relax, Надежда - 2018 ❤️";
}else{
f.innerHTML="Съдът има съмнения в паметта на обвиняемия 😄";
}
c.classList.remove("hidden");
}

function fireworks(){
next();
for(let i=0;i<80;i++){
let s=document.createElement("div");
s.className="spark";
s.style.left="50%";
s.style.top="50%";
s.style.setProperty("--x",(Math.random()*600-300)+"px");
s.style.setProperty("--y",(Math.random()*600-300)+"px");
document.body.appendChild(s);
}
}
