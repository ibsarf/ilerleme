let line= document.getElementById("line");
let circles=document.querySelectorAll(".circle");
let btnGeri=document.querySelector(".geri");
let btnİleri=document.querySelector(".ileri");


// console.log(btnİleri);

let currentAction=1;

btnİleri.addEventListener("click",()=>{
    currentAction++;

    if(currentAction>circles.length){
        currentAction=circles.length
    }
    lineUp();
});

btnGeri.addEventListener("click",()=>{
    currentAction--;
    
    if(currentAction<1){
        currentAction=1
    }
    lineUp();
});

function lineUp(){
    circles.forEach((circle,index) => {
        if(index<currentAction){
            //index i currentAction dan küçük olanlara active classı ekliyecek
            circle.classList.add("active");
            // console.log(line);
        } 
        else{
            //index i currentAction dan büyük olanların active class ı silinecek.
            circle.classList.remove("active")
        }
    });
    let active = document.querySelectorAll(".active");
    
    line.style.width= (active.length-1)/(circles.length-1)*100 + "%";

        // console.log(active.length-1, circles.length-1);  3 tane ara olduğu için -1 çıkardık
        // console.log((active.length-1)/(circles.length-1)*100 + "%");

    // currentAction===1 ? btnGeri.disabled=true : currentAction===circles.length ? btnİleri.disabled=true : (btnİleri.disabled=false , btnGeri.disabled=false);

    if(currentAction===1){
        btnGeri.disabled=true;
    }else if(currentAction===circles.length){
        btnİleri.disabled=true;
    }else{
        btnGeri.disabled=false;
        btnİleri.disabled=false;
    }


}


