let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let PI = Math.PI;
let E = Math.E;

function cos(num){
    sol = eval(num);
    return Math.cos(sol);
}

function acos(num){
    sol = eval(num);
    return Math.acos(sol);
}

function sin(num){
    sol = eval(num);
    return Math.sin(sol);
}

function asin(num){
    sol = eval(num);
    return Math.asin(sol);
}

function tan(num){
    sol = eval(num);
    return Math.tan(sol);
}

function atan(num){
    sol = eval(num);
    return Math.atan(sol);
}

function sqrt(num){
    sol = eval(num);
    return Math.sqrt(sol);
}

function ln(num){
    sol = eval(num);
    return Math.log(sol);
}

function log(num){
    sol = eval(num);
    return Math.log10(sol);
}

buttons.map( button => {
    button.addEventListener("click", (e) =>{
        switch(e.target.innerText){
            case "^":
                display.innerText += "**";
                break;
            case "C":
                display.innerText = "";
                break;
            case "←":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                 break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = "ERROR";
                }
                break;
            default:
              display.innerText += e.target.innerText;
              break;
        }
    });
}); 
