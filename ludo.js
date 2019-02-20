
class player{
    constructor(score) {
        this.score = score;
     }
     accumulate(diceRoll){
     	if(this.score<20 && this.score+diceRoll<=20){ //cant get a type error and will block user progress until they can roll the correct number
			this.score=this.score+diceRoll //the player cant win if they they roll a six and then a five. They have to roll a six and then a four or two two, etc.
     		console.log("The score is "+this.score);
     }
 }
 	/**
 	Reset the score of the player piece to zero after colliding with a piece of a different color
 	**/
     reset(){
     	console.log("reset");
     	this.score=0;
     }
 }

/**
Every player starts out with zero points
**/

function setup(){
	player1=new player(0);
	player2=new player(0);
	player3=new player(0);
	player4=new player(0);
}
setup();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
sleep(350) so that the dice can be seen
**/

/**

**/
//simply show a dice face corresponding to the rolled dice number. It will also work with multiple dice that are laid side by side.
async function dice(diceRoll,diceNumber){
 	document.getElementById("diceImage"+diceNumber).src=diceRoll+".png"; //simulate a sleep(350) for 1/4 second
 	console.log(diceRoll+".png"+" for dice number "+diceNumber);
}

function collision(number,playerNumber){
	const gameBoardArray=document.getElementsByClassName("gamedivision");
	var pieceToRemove=gameBoardArray[number-1].childNodes[0];
 	if(gameBoardArray[number-1].childElementCount!==0  && !number==20){ //allow collision with star
		gameBoardArray[0].appendChild(pieceToRemove);
		switch(playerNumber){
		case 1:
			player1.reset();
			break;
		case 2:
			player2.reset();
			break;
		case 3:
			player3.reset();
			break;
		case 4:
			player4.reset();
			break;
	}
	}
}

/**
Determines if peices are eligible for movement, need to roll a six to get out!
**/
	var trapped1=false;
	var trapped2=false;
	var trapped3=false;
	var trapped4=false;

function pieceMove(number,playerNumber){
	var redImage=document.getElementById("red");
	var greenImage=document.getElementById("green");
	greenImage.style =""
 	var blueImage=document.getElementById("blue");
	var yellowImage=document.getElementById("yellow");
	var gameBoardArray=document.getElementsByClassName("gamedivision");
	/**
	The first time the dice is rolled one needs a six to escape
	**/
	if(dice1===1 && number<6){
		 trapped1=true;
	 }
	if(trapped1){
		player1.reset(); //stupid hack to make sure the player cant win while trapped
		 console.log("TRAPPED!")
		return;
	}

	if(dice2===1 && number<6){
		 trapped2=true;
	 }
	if(trapped2){
		player2.reset(); //stupid hack to make sure the player cant win while trapped
		 console.log("TRAPPED!")
		return;
	}

	if(dice3===1 && number<6){
		 trapped3=true;
	 }
	if(trapped1){
		player1.reset(); //stupid hack to make sure the player cant win while trapped
		 console.log("TRAPPED!")
		return;
	}

	if(dice1===1 && number<6){
		 trapped1=true;
	 }
	if(trapped1){
		player1.reset(); //stupid hack to make sure the player cant win while trapped
		 console.log("TRAPPED!")
		return;
	}if(dice1===1 && number<6){
		 trapped1=true;
	 }
	if(trapped1){
		player1.reset(); //stupid hack to make sure the player cant win while trapped
		 console.log("TRAPPED!")
		return;
	}
	collision(number,playerNumber);
	switch(playerNumber){ //this will reset the scores of the ludo pieces so that they will travel back
		case 1:
		console.log("RED")
 			gameBoardArray[number-1].appendChild(redImage);
			break;
		case 2:
			gameBoardArray[number-1].appendChild(greenImage);
			break;
		case 3:
			gameBoardArray[number-1].appendChild(blueImage);
			break;
		case 4:
			gameBoardArray[number-1].appendChild(yellowImage);
			break;
	}

}
/**
This function does the actual dice rolling
**/
function rollDice(diceNumber){
	var diceRoll1 = Math.floor(Math.random() * 6) + 1;
	var diceRoll2 = Math.floor(Math.random() * 6) + 1;
	var diceRoll3 = Math.floor(Math.random() * 6) + 1;
	var totalMoves = 0;
	const diceRolls=new Array(diceRoll1,diceRoll2,diceRoll3);
	console.log(diceRolls);
    if(diceRolls[0]===6 && diceRolls[1]===6 && diceRolls[2]===6){ //the user got three sixes and invalidated their turn
    	alert("three sixes");
    	return 0;
    }
    else if(diceRolls[0]===6 && diceRolls[1]===6){
    	dice(6,diceNumber);
    	sleep(350);
    	dice(6,diceNumber);
    	sleep(350);
    	dice(diceRolls[2],diceNumber);
    	return 12+diceRolls[2];
    }
    else if(diceRolls[0]===6){
    	dice(6,diceNumber);
    	sleep(350);
    	dice(diceRolls[1],diceNumber);
    	return 6+diceRolls[1];
    }
    else{
     	dice(diceRolls[0],diceNumber);
    	return diceRolls[0];
    }
}

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

/**
Rolls the dice and totals the number of moves a player is allowed. If the player rolls a six, they will be allowed to roll again.
If the player rolls three sixes they will have forfieted their turn
**/
var score=0; //how far the player piece is

var dice1=0; 
var dice2=0; 
var dice3=0; 
var dice4=0; 

function rollPlayerDice(diceNumber){

var diceRoll =rollDice(diceNumber);
var playerNumber=diceNumber;
console.log(diceRoll);
console.log("The player dice number is "+diceNumber);
console.log("The total the player can move is "+diceRoll);
if(diceNumber==1){
	dice1++;
 	player1.accumulate(diceRoll);
	pieceMove(player1.score,diceNumber)
	if(player1.score==20){alert("You have won, player1!")}
}
if(diceNumber==2){
	player2.accumulate(diceRoll);
	pieceMove(player2.score,diceNumber)
	if(player2.score==20){alert("You have won!, player2")}
}if(diceNumber==3){
	player3.accumulate(diceRoll);
	pieceMove(player3.score,diceNumber)
	if(player3.score==20){alert("You have won!, player3")}
}if(diceNumber==4){
	player4.accumulate(diceRoll);
	pieceMove(player4.score,diceNumber)
	if(player4.score==20){alert("You have won!, player4")}
}
}