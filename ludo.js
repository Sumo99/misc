"use strict";
/**
The individual ludo pieces; they have a position on the board and can be pushed back to square zero
**/
const gameBoardArray=document.getElementsByClassName("gamedivision");
class piece{
    constructor(score) {
        this.score = score;
     }
     accumulate(diceRoll){
     	if(this.score<20 && this.score+diceRoll<=20){ //cant get a type error and will block user progress until they can roll the correct number
			this.score=this.score+diceRoll //the piece cant win if they they roll a six and then a five. They have to roll a six and then a four or two two, etc.
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
Every piece starts out with zero points
**/

var piece1=new piece(0);
var piece2=new piece(0);
var piece3=new piece(0);
var piece4=new piece(0);


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//simply show a dice face corresponding to the rolled dice number. It will also work with multiple dice that are laid side by side.
function dice(diceRoll,diceNumber){
 	document.getElementById("diceImage"+diceNumber).src=diceRoll+".png"; //simulate a sleep(350) for 1/4 second
 	console.log(diceRoll+".png"+" for dice number "+diceNumber);
}
/**
If two pieces of a different colour collide then the collided victim back to sqaure zero. This will also reset the score of the player to zero
**/

function collision(number,pieceNumber){
	var pieceToRemove=gameBoardArray[number-1].childNodes[0];
 	if(gameBoardArray[number-1].childElementCount!==0  && !number==20){ //allow collision with star
		gameBoardArray[0].appendChild(pieceToRemove);
		switch(pieceNumber){
		case 1:
			piece1.reset();
			break;
		case 2:
			piece2.reset();
			break;
		case 3:
			piece3.reset();
			break;
		case 4:
			piece4.reset();
			break;
	}
	}
}
/**
This function will check if a player is supposed to be trapped.
dicenumber, is the player number
scorenumber is the number of points scored
player is the piece information
trapped is the variable for the trapped piece
imageName, is the image of the piece itself
returns true if the player is trapped.
**/
function checkTrap(diceNumber,scoreNumber,player,trappedNum,imageName,pieceNumber,loc){
//	debugger;
	console.log("I am here");
	if(diceNumber===1 && scoreNumber<6){
		console.log("trapp 1");
		player.reset();
 		return true;
	}
	if(trappedNum && scoreNumber<6){
		console.log("trapp 2");
 		player.reset(); //stupid hack to make sure the piece cant win while trapped
		console.log("TRAPPED!")
		return true; //the player piece is still trapped
	}
	else if(trappedNum && diceNumber!=0){ //prevent pieces from spawning when another peice is freed. 
		console.log("trapp 3");
		console.log("The score number is "+scoreNumber);
		console.log("The dice number is "+diceNumber);
		console.log("The score number is "+scoreNumber);
		console.log("The score of the piece is "+player.score);
		console.log("The trapped num is "+trappedNum);
		console.log("The piece number is "+pieceNumber);
		console.log(loc)
		collision(scoreNumber-6,pieceNumber); //six is consumed by the moveout
		player.score=player.score-6; //six has to be subtracted
 		gameBoardArray[player.score-1].appendChild(imageName);
		trappedNum=false; //no longer trapped
		console.log(player.score);
		return false;
	}
 	console.log("Something else!!!");
	console.log(trappedNum+" "+scoreNumber+" "+diceNumber+" "+player.score);
}

/**
Determines if piece are eligible for movement, need to roll a six to get out!
**/
	var trapped1=true;
	var trapped2=true;
	var trapped3=true;
	var trapped4=true;

/**
This functions moves the pieces when the dice is rolled to the correct square. It needs the diceRoll to check if a player is eligible for exit
**/

function pieceMove(number,diceRoll,pieceNumber){
	//debugger;
	const redImage=document.getElementById("red");
	const greenImage=document.getElementById("green");
 	const blueImage=document.getElementById("blue");
	const yellowImage=document.getElementById("yellow");
	/**
	The first time the dice is rolled one needs a six to escape, and once one does escape, they will have to move six less
	**/
	if(pieceNumber==1){checkTrap(dice1,diceRoll,piece1,trapped1,redImage,pieceNumber,134); return;} //the first dice
	if(pieceNumber==2){checkTrap(dice2,diceRoll,piece2,trapped2,greenImage,pieceNumber,135);console.log("The value is "+trapped2);return;}
	if(pieceNumber==3){checkTrap(dice3,diceRoll,piece3,trapped3,yellowImage,pieceNumber,136);return;}
	if(pieceNumber==4){checkTrap(dice4,diceRoll,piece4,trapped4,blueImage,pieceNumber,137);return;}
	
	trapped1=false; //unfreeze the dice
	trapped2=false; //unfreeze the dice
	trapped3=false; //unfreeze the dice
	trapped4=false; //unfreeze the dice
	console.log("The boolean is now "+trapped2);
	console.log("Hammurabi "+piece1.score);
	console.log("The dice 2 number is "+dice2);

	collision(number,pieceNumber);
	switch(pieceNumber){ //this will reset the scores of the ludo pieces so that they will travel back
		case 1:
 		if(dice1==1){
 			gameBoardArray[number-7].appendChild(redImage);
 			piece1.score=piece1.score-6;  
 			return;
 			} //for the case where the piece gets lucky and gets a six on their first roll.
 			gameBoardArray[piece1.score-1].appendChild(redImage);
			break;
		case 2:
		if(dice2==1){
 			gameBoardArray[number-7].appendChild(greenImage);
 			piece2.score=piece2.score-6;  
 			return;
 			}
 			gameBoardArray[number-1].appendChild(greenImage);
			break;
		case 3:
			if(dice3==1){gameBoardArray[number-7].appendChild(yellowImage);}
			gameBoardArray[number-1].appendChild(yellowImage);
			break;
		case 4:
			if(dice4==1){gameBoardArray[number-7].appendChild(blueImage);}
			gameBoardArray[number-1].appendChild(blueImage);
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

/**
Rolls the dice and totals the number of moves a piece is allowed. If the piece rolls a six, they will be allowed to roll again.
If the piece rolls three sixes they will have forfieted their turn
**/
var score=0; //how far the piece piece is

var dice1=0;  
var dice2=0; 
var dice3=0; 
var dice4=0; 

function rollPlayerDice(diceNumber){
//debugger;
var diceRoll=rollDice(diceNumber);
var pieceNumber=diceNumber;
console.log(diceRoll);
console.log("The piece dice number is "+diceNumber);
console.log("The total the piece can move is "+diceRoll);
if(diceNumber==1){
	dice1++;
 	piece1.accumulate(diceRoll);
	pieceMove(piece1.score,diceRoll,diceNumber);
	piece1.reset();
	if(piece1.score==20){alert("You have won, piece1!")}
	return;
}
if(diceNumber==2){
	dice2++;
	piece2.accumulate(diceRoll);
	pieceMove(piece2.score,diceRoll,diceNumber)
	if(piece2.score==20){alert("You have won!, piece2")}
	return;
}if(diceNumber==3){
	dice3++;
	piece3.accumulate(diceRoll);
	pieceMove(piece3.score,diceRoll,diceNumber);
	if(piece3.score==20){alert("You have won!, piece3")}
	return;
}if(diceNumber==4){
	dice4++;
	piece4.accumulate(diceRoll);
	pieceMove(piece4.score,diceRoll,diceNumber);
	if(piece4.score==20){alert("You have won!, piece4")}
	return;
}
}
