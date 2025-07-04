const again=document.querySelector(".again");
const num=document.querySelector(".number");
const guess=document.querySelector(".guess");
const check=document.querySelector(".check");
const message=document.querySelector(".message");
let score=document.querySelector(".score");
let score_value=20;
const highscore=document.querySelector(".highscore");
let rand_num=Math.trunc(Math.random()*20+1);
console.log(rand_num);
console.log(score_value);
const checkfunc=()=>{
    const guess_num=guess.value;
    console.log(score_value);
    if(rand_num===guess_num){
        message.textContent="Correct Number";
        num.textContent=rand_num;
        document.body.style.backgroundColor="#60b347";
        if(score.textContent>highscore.textContent){
            highscore.textContent="high"+score.textContent;
        }
        score_value++;
    }
    else if(rand_num>guess_num)
    {
        document.body.style.backgroundColor="#000000";
        message.textContent="too low";
        score_value--;
    }
    else{
        document.body.style.backgroundColor="#000000";
        message.textContent="too high";
        score_value--;
    }
    if(score_value==0){
        message.textContent="You lost the game";
        score.textContent=0;
        check.remove();
    }
}
check.addEventListener("click",checkfunc);
