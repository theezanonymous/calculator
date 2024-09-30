/*const nB = document.querySelector(".numberBox");
for(let i = 9; i >=0; i--){
    const temp = document.createElement("div")
    temp.class = i.toString(); temp.id = "number";
    temp.innerText = i.toString();
    nB.appendChild(temp)

}*/
let eval = "0"; let temp = "0"; let op = "=";
const number = document.querySelectorAll("#number").forEach(item=>{
item.addEventListener("click", ()=>{
    if(num(temp).toString().length <=8){
            if(temp=="0"){
            temp = "";
        }
        temp+=item.innerText; }
        display(temp); 
    })
});
const sign = document.querySelector("#sign").addEventListener("click", ()=>{
    if(num(temp).toString().length <=8){
        if(temp[0]!='-'&& temp[0]!='0'){
            temp = "-" + temp; 
            }
            else{
                temp = temp.slice(1);
            }
        }
        display(temp); 
    });
const operator = document.querySelectorAll(".operator").forEach(item=>{
    item.addEventListener("click", ()=>{
        if(item.textContent == "="){
            display( solve(op, eval, temp).toString());
        }
        if(op == "="){
            eval = temp;
            //display( solve(op, eval, temp).toString());
        }
        else{
            eval = solve(op, eval, temp).toString();
        }
        op = item.textContent; temp = "0";
        display(eval)


    })
})
const clear = document.querySelector(".clear").addEventListener("click", ()=>{
    eval = "0"; temp = "0"; op = "="; display(eval);
})

const decimal = document.querySelector(".decimal")
decimal.addEventListener("click", ()=>{
    if(!temp.includes(".")){
        temp+="."
    }
});
function display(eval){
    const output = document.querySelector(".output")
    output.innerText = eval.toString()
}
function num(curr){
    curr = curr.toString()
    if(curr.includes(".")){
        return parseFloat(curr)
    }
    return parseInt(curr)
}
function solve(op, eval, temp){
    eval = num(eval); temp = num(temp);
    if(op=="+"){
        return num(eval + temp);
    }
    else if(op == "-"){
        return num(eval-temp);
    }
    else if(op == "*"){
        return num(eval*temp);
    }
    else if(op == "/"){
        return num(eval/temp);
    }
    else if(op== "%"){
        return num(eval%temp);
    }
}
