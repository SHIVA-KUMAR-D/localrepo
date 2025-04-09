// this calculater perform faulty calculations only 10 % of times 
// + ---> -
// - ---> /
// * ---> +
// / ---> **

let random=Math.random();
let a=prompt("enter the number");
let b=prompt("enter the second number");
let c=prompt("enter the operation number");

let obj={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**",
}

if(random  > 0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);    

}
else{
    c=obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);    

}