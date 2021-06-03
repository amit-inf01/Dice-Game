randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";

randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png") ;

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 won!"
}
if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 won!"
}
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!"
}
