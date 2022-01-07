function next(){
    window.location="game_maths_quiz.html";
    player_1=document.getElementById("player1text").value;
    player_2=document.getElementById("player2text").value;

    localStorage.setItem("player_1",player_1);
    localStorage.setItem("player_2",player_2);
}  
