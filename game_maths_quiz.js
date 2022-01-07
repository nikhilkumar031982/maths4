player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");

player1_score=0;
player2_score=0;

document.getElementById("player1").innerHTML=player1_name+":";
document.getElementById("player2").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;



function send(){
    number1=document.getElementById("textinput1").value;
        number2=document.getElementById("textinput2").value;
        actual_anwser=parseInt(number1)*parseInt(number2);
    
    
    
        question="<h4>"+number1 +"   X   "+ number2+"</h4>";
        input="<br>Answer : <input type='text' id='input_check_box'>";
        check_button="<br><br><button class='btn btn-info'  onclick='check()'>Check</button>";
        row=question+input+check_button;
        document.getElementById("output").innerHTML=row;
    
        document.getElementById("player_1").value="";
        document.getElementById("player_2").value="";
    }

    question_turn= "player1";
    answer_turn="player2" ;

   

function check(){
 get_answer=document.getElementById("input_check_box").value;

 if(get_answer == actual_anwser)
 {
    if(answer_turn == "player1")
    {
update_player_1_score=player1_score+1;
     document.getElementById("player1_score").innerHTML=update_player_1_score;
    }
else{
    update_player_2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=update_player_2_score;   
    }
 }






 if(question_turn == "player1")
 {
question_turn="player2";
answer_turn="player1";
  document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
  document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name;
 }
else{
 question_turn="player1";
 answer_turn="player2";
 document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
 document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;   
 }
}
    
    