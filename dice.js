button=document.querySelector(".btn");
button.addEventListener("click",dice);
function dice(){
let n,m;
n=Math.floor(Math.random()*6)+1;
m=Math.floor(Math.random()*6)+1;
let randomImage1="images/dice"+n+".png"
let randomImage2="images/dice"+m+".png"
document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randomImage2);
if(n>m){
    document.querySelector(".container h1").textContent="🚩Player 1 Wins!"
    document.querySelector(".container h1").classList.add("new-size");
} 
else if(n===m){
    document.querySelector(".container h1").textContent="Draw!"
    document.querySelector(".container h1").classList.add("new-size");
}
else{
    document.querySelector(".container h1").textContent="🚩Player 2 Wins!"
    document.querySelector(".container h1").classList.add("new-size");
}
}
