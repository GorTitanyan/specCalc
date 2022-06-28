let numbers=document.getElementsByClassName("num")
let screen1=document.getElementById("first")
let screen2=document.getElementById("second")
let systemsBottom=document.getElementById("chooseBottom")
let systemsTop=document.getElementById("chooseTop")
let symbols=document.getElementsByClassName("nshan")
let clean=document.getElementById("maqrel")
let back=document.getElementById("jnjel")
let display=""
let workPlace=[]


systemsTop.onclick=function(){
    workPlace=[]
    display=""
    screen1.innerText=display
    for(let i=0;i<numbers.length;i++){

        if(i>=0  && i<systemsTop.value){
            numbers[i].onmouseenter=enter
            numbers[i].onmouseleave=out
            numbers[i].onclick=write
        }else{
            numbers[i].onclick=null
            numbers[i].onmouseenter=null
            numbers[i].onmouseleave=null
        }
    }
} 



function write(e){
    let click=e.target.innerText
    if(display==="0"){
        display=""
    }
    display+=click
    screen1.innerText=display
}

screen1.onclick=translate

function translate(){
    let num=Number(systemsTop.value)
    let a=screen1.innerText.fromXto10(num)
    console.log(a)
    screen2.innerText=a.toString(systemsBottom.value)
}





for(let i=0;i<symbols.length;i++)[
    symbols[i].addEventListener("click",gorcoxutyun)
]

function gorcoxutyun(e){
    let op=e.target.innerText
    let num=Number(systemsTop.value)
    switch(op){
        
        case "+":
            
            workPlace.push(screen1.innerText.fromXto10(num))
            workPlace.push("+")
            display=""
            screen1.innerText=display
            
            break;
        case "=":  
            workPlace.push(display.fromXto10(num))
            let arjeq=eval(workPlace.join(" "))
            
           
            display=arjeq.toString(num)+""
            screen1.innerText=display
            workPlace=[]
    }
    
}

back.onclick=function(){
    display=display.slice(0,display.length-1)
    screen1.innerText=display
}

clean.onclick=function(){
    display=""
    screen1.innerText=display
    screen2.innerText=""
    workPlace=[]
}


function toDisable(e){
 
}



String.prototype.fromXto10=function(o){
    let z=0
    y=Array.from(this.toString())
    beta=y.length-1
    for(let i=0;i<y.length;i++){
        switch(y[i]){
            case "a": y[i]=10
            break;
            case "b": y[i]=11
            break;
            case "c": y[i]=12
            break;
            case "d": y[i]=13
            break;
            case "e": y[i]=14
            break;
            case "f": y[i]=15
            break;
        }
        if(y[i]>=0 && y[i]<2 && o===2){
            z+=y[i]*Math.pow(2,beta)
            beta--
        }
        else if(y[i]>=0 && y[i]<8 && o===8){
            z+=y[i]*Math.pow(8,beta)
            beta--
        }else if(y[i]>=0 && y[i]<16 && o===16){
            z+=y[i]*Math.pow(16,beta)
            beta--
        }else if(y[i]>=0 && y[i]<10 && o===10){
            return Number(this)
        }
        else{
            return "wrong number"
        }
    }
    return z
}

function enter(e){
    e.target.style.backgroundColor="black"
    e.target.style.color="white"
}

function out(e){
    e.target.style.backgroundColor="white"
    e.target.style.color="black"
}
