let a=Math.floor(Math.random() * 3) + 1;
let b=Math.floor(Math.random() * 3) + 1;
let c=Math.floor(Math.random() * 3) + 1;

const Adjectives ={
    1 : "carzy",
    2 : "Amazing",
    3 : "Fire"
}
const ShopName={
    1 : "Engine",
    2 : "Food",
    3 : "Garments"
}
const Another_word={
    1 :"Bros",
    2 :"Limited",
    3:"hub"
}
alert(a,b,c);
alert(`${Adjectives[a]} ${ShopName[b]} ${Another_word[c]}`);