player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

player1_score = 0
player2_score = 0

document.getElementById("player_1").innerHTML = player1 + ":";
document.getElementById("player_2").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1;
document.getElementById("player_answer").innerHTML = player2;