// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var mars = {
  direction: "S",
  x: 9,
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
    if (rover.y != 0) {
      if (board[rover.y - 1][rover.x] == "O"){
        console.log("The rover has crushed with a obstacle");
      } else {
        rover.y -= 1;
      }
    }
    break;
    case "E":
    if (rover.x != 9) {
      if (board[rover.y][rover.x + 1] == "O"){
        console.log("The rover has crushed with a obstacle");
      } else {
        rover.x += 1;
      }
    }
    break;
    case "S":
    if (rover.y != 9) {
      if (board[rover.y + 1][rover.x] == "O"){
        console.log("The rover has crushed with a obstacle");
      } else {
        rover.y += 1;
      }
    }
    break;
    case "W":
    if (rover.x != 0) {
      if (board[rover.y ][rover.x - 1] == "O"){
        console.log("The rover has crushed with a obstacle");
      } else {
        rover.x -= 1;
      }
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
     if (rover.y != 9) {
        if (board[rover.y + 1][rover.x] == "O"){
            console.log("The rover has crushed with a obstacle");
        } else {
            rover.y += 1;
        }
     }
     break;
     case "E":
     if (rover.x != 0) {
       if (board[rover.y][rover.x -1] == "O"){
          console.log("The rover has crushed with a obstacle");
       } else {
        rover.x -= 1;
       }
     }
     break;
     case "S":
     if (rover.y != 0) {
        if (board[rover.y - 1][rover.x] == "O") {
          console.log("The rover has crushed with a obstacle");
        } else {
          rover.y -= 1;
        }
     }
     break;
     case "W":
     if (rover.x != 9) {
        if (board[rover.y][rover.x +1] == "O"){
          console.log("The rover has crushed with a obstacle");
        } else {
          rover.x += 1;
        }
     }
     break;
   }
   //console.log("The current position is [" + rover.x + ", " + rover.y + "]");
   rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
 }

function executeCommand(robot, command){
  for (var i = 0; i < command.length; i++){
    if (command[i] !== "r" && command[i] !== "l" && command[i] !== "f" && command[i] !== "b") {
      console.log("The value is incorrect");
      return;
    }
  }
    
  for (var i = 0; i < command.length; i++){
    switch (command[i]) {
      case "r":
      turnRight(robot);
      break;
      case "l":
      turnLeft(robot);
      break;
      case "f":
      moveForward(robot);
      break;
      case "b":
      moveBackward(robot);
      break;
    }
  }

  // console.log(rover.travelLog);
  printGrid();
  
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



function printGrid() {
  var text = ""
  for (var i = 0; i < 10; i++) {
    text += "\n---------------------------------------------------";
    text += "\n|";
    for (var j = 0; j < 10; j++) {

      if (rover.y === i && rover.x === j) {
        if (rover.direction == "N") {
          text += " R↑ |";
        } else if (rover.direction == "W") {
         text += " ←R |" 
        } else if (rover.direction == "E") {
          text += " R→ |" 
        } else {
          text += " R↓ |" 
        }
      } else 

      if (mars.y === i && mars.x === j) {
        if (mars.direction == "N") {
          text += " M↑ |";
        } else if (mars.direction == "W") {
          text += " ←M |" 
        } else if (mars.direction == "E") {
          text += " M→ |" 
        } else {
          text += " M↓ |" 
        }

      } else if (board[i][j] === "O") {
        text += " OB |";
      } else {
        text += "    |";
      }
    }
  }
  text += "\n---------------------------------------------------";
  console.log(text);
}