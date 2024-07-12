let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let btns=["red","blue","green","yellow"];
let h3=document.querySelector('h3');
let h2=document.querySelector('h2');



document.addEventListener("keypress",function(){
    if(start==false)
       {
           console.log("game started");
           start=true;
           levelup();
       }
})
function gameFlash(event){
    event.classList.add("flash");
    console.log("event added");
    setTimeout(function(){
        event.classList.remove("flash");
        console.log("event deleted");
    },250)
}
function userFlash(event){
    event.classList.add("user");
    console.log("event added");
    setTimeout(function(){
        event.classList.remove("user");
        console.log("event deleted");
    },250)
}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*3);
    let randcolor=btns[random];
    let ranbtn=document.querySelector(`.${randcolor}`);
    gameFlash(ranbtn);
    console.log(random);
    console.log(randcolor);
    console.log(ranbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    highscore();
}

function check(idx){
    if(userseq[idx]==gameseq[idx])
        {
            if(userseq.length==gameseq.length)
            setTimeout(levelup(),1000);
        }
        else
        {
            h3.innerText=`Game over Your Score:${level}`;
            let body=document.querySelector('body');
            body.classList.add("gameover");
            setTimeout(function(){
                body.classList.remove("gameover");
            },250)
            start=false;
            level=0;
            gameseq=[];
            userseq=[];
        }
}
function btnpress(){
    let btn=this;
    userFlash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    check(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");

for(let btn of allbtns)
{
     btn.addEventListener("click",btnpress);
}

let maxi=0;
function highscore(){
    if(level>=maxi)
        maxi=level;
    h2.innerText=`High Score:${maxi}`;
}

