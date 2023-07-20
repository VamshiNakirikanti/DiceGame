var randomNumber1 = 1 + Math.floor(Math.random() * 6);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = 1 + Math.floor(Math.random() * 6);
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🎌 Player one Wins!!!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player two Wins!!! 🎌"
}
else{
    document.querySelector("h1").innerHTML = "Draw!!"
}