// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

// ======================
function turnLeft(rover){
 // console.log("The start position is " + rover.direction);
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
 // console.log("The current position is " + rover.direction);
}

function turnRight(rover){
 // console.log("The start position is " + rover.direction);
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
 // console.log("The current position is " + rover.direction);
}

function moveForward(rover){
 // console.log("The start position is [" + rover.x + ", " + rover.y + "]");
  switch (rover.direction) {
    case "N":
    if (board[rover.y - 1][rover.x] == "O"){
      console.log("The rover has crushed with a obstacle");
    } else if (rover.y != 0) {
      rover.y -= 1;
    }
    break;
    case "E":
    if (board[rover.y][rover.x + 1] == "O"){
      console.log("The rover has crushed with a obstacle");
    } else if (rover.x != 9) {
      rover.x += 1;
    }
    break;
    case "S":
    if (board[rover.y + 1][rover.x] == "O"){
      console.log("The rover has crushed with a obstacle");
    } else if (rover.y != 9) {
      rover.y += 1;
    }
    break;
    case "W":
    if (board[rover.y ][rover.x - 1] == "O"){
      console.log("The rover has crushed with a obstacle");
    } else if (rover.x != 0) {
      rover.x -= 1;
    }
    break;
  }
  //console.log("The current position is [" + rover.x + ", " + rover.y + "]");
  rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
}

function moveBackward(rover){
  // console.log("The start position is [" + rover.x + ", " + rover.y + "]");
   switch (rover.direction) {
     case "N":
     if (board[rover.y + 1][rover.x] == "O"){
      console.log("The rover has crushed with a obstacle");
      } else if (rover.y != 9) {
       rover.y += 1;
     }
     break;
     case "E":
     if (board[rover.y][rover.x -1] == "O"){
      console.log("The rover has crushed with a obstacle");
      } else if (rover.x != 0) {
       rover.x -= 1;
     }
     break;
     case "S":
     if (board[rover.y - 1][rover.x] == "O"){
      console.log("The rover has crushed with a obstacle");
     } else if (rover.y != 0) {
       rover.y -= 1;
     }
     break;
     case "W":
     if (board[rover.y][rover.x +1] == "O"){
      console.log("The rover has crushed with a obstacle");
     } else if (rover.x != 9) {
       rover.x += 1;
     }
     break;
   }
   //console.log("The current position is [" + rover.x + ", " + rover.y + "]");
   rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
 }

function executeCommand(command){
  for (var i = 0; i < command.length; i++){
    if (command[i] !== "r" && command[i] !== "l" && command[i] !== "f" && command[i] !== "b") {
      console.log("The value is incorrect");
      return;
    }
  }
    
  for (var i = 0; i < command.length; i++){
    switch (command[i]) {
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
    }
  }

  // console.log(rover.travelLog);
  printGrid(rover);
  
}

var board = [
  [" ","O"," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," ","O"," "," "," "],
  [" "," ","O"," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
];

/*function obstacles(rover) {

  for (var i = 0; i < board.length; i++){
    var row = board[i];

    for (var j = 0; j < board.length; j++){
      var column = row[j];
      if (column === "O"){
      console.log("There is an obstacle in " + i + ", " + j);
      }
    }
  }
}*/



function printGrid(rover) {
  var text = ""
  for (var i = 0; i < 10; i++) {
    text += "\n-----------------------------------------";
    text += "\n|";
    for (var j = 0; j < 10; j++) {
      if (rover.y === i && rover.x === j) {
        if (rover.direction == "N") {
          text += " ↑ |";
        } else if (rover.direction == "W") {
         text += " ← |" 
        } else if (rover.direction == "E") {
          text += " → |" 
        } else {
          text += " ↓ |" 
        }
      } else if (board[i][j] === "O") {
        text += " O |";
      } else {
        text += "   |";
      }
    }
  }
  text += "\n-----------------------------------------";
  console.log(text);
}