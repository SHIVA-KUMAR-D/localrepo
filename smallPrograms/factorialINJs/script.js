function fac(n){
    if (n==0){
        return 1;
    }
    else{
        let fact=n;
        for(let i=n-1;i>0;i--){
            fact=fact*i;
        }
        return fact;
    }
}
let n=prompt("enter the number for factorial");
alert(fac(n));