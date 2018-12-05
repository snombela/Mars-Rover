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
function turnLeft(robot){
 // console.log("The start position is " + robot.direction);
  switch (robot.direction) {
    case "N":
    robot.direction = "W";
    break;
    case "W":
    robot.direction = "S";
    break;
    case "S":
    robot.direction = "E";
    break;
    case "E":
    robot.direction = "N";
    break;
  }
 // console.log("The current position is " + rover.direction);
}

function turnRight(robot){
 // console.log("The start position is " + robot.direction);
  switch (robot.direction) {
    case "N":
    robot.direction = "E";
    break;
    case "E":
    robot.direction = "S";
    break;
    case "S":
    robot.direction = "W";
    break;
    case "W":
    robot.direction = "N";
    break;
  }
 // console.log("The current position is " + robot.direction);
}

function moveForward(robot){
 // console.log("The start position is [" + robot.x + ", " + robot.y + "]");

 other = (robot == rover) ? mars : rover;

  switch (robot.direction) {
    case "N":
    if (robot.y != 0) {
      if (board[robot.y - 1][robot.x] == "O"){
        console.log("The robot has crushed with a obstacle");
      } else if (robot.y -1 == other.y && robot.x == other.x) {
        console.log("The robot has crushed with another robot");
      } else {
        robot.y -= 1;
      }
    }
    break;
    case "E":
    if (robot.x != 9) {
      if (board[robot.y][robot.x + 1] == "O"){
        console.log("The rover has crushed with a obstacle");
      } else if (robot.y == other.y && robot.x +1 == other.x) {
        console.log("The robot has crushed with another robot");
      } else {
        robot.x += 1;
      }
    }
    break;
    case "S":
    if (robot.y != 9) {
      if (board[robot.y + 1][robot.x] == "O"){
        console.log("The rover has crushed with a obstacle");
      } else if (robot.y + 1 == other.y && robot.x == other.x) {
        console.log("The robot has crushed with another robot");
      } else {
        robot.y += 1;
      }
    }
    break;
    case "W":
    if (robot.x != 0) {
      if (board[robot.y][robot.x - 1] == "O"){
        console.log("The rover has crushed with a obstacle");
      } else if (robot.y == other.y && robot.x -1 == other.x) {
        console.log("The robot has crushed with another robot");
      } else {
        robot.x -= 1;
      }
    } 
    break;
  }
  //console.log("The current position is [" + robot.x + ", " + robot.y + "]");
  robot.travelLog.push("[" + robot.x + ", " + robot.y + "]");
}

function moveBackward(robot){
  // console.log("The start position is [" + robot.x + ", " + robot.y + "]");

  other = (robot == rover) ? mars : rover;

   switch (robot.direction) {
     case "N":
     if (robot.y != 9) {
        if (board[robot.y + 1][robot.x] == "O") {
            console.log("The rover has crushed with a obstacle");
        } else if (robot.y +1 == other.y && robot.x == other.x) {
            console.log("The robot has crushed with another robot");
        } else {
          robot.y += 1;
        }
     }
     break;
     case "E":
     if (robot.x != 0) {
       if (board[robot.y][robot.x -1] == "O"){
          console.log("The robot has crushed with a obstacle");
      } else if (robot.y== other.y && robot.x -1 == other.x) {
        console.log("The robot has crushed with another robot");
      } else {
        robot.x -= 1;
       }
     }
     break;
     case "S":
     if (robot.y != 0) {
        if (board[robot.y - 1][robot.x] == "O") {
          console.log("The robot has crushed with a obstacle");
        } else if (robot.y -1 == other.y && robot.x == other.x) {
          console.log("The robot has crushed with another robot");
        } else {
          rover.y -= 1;
        }
     }
     break;
     case "W":
     if (rover.x != 9) {
        if (board[robot.y][robot.x +1] == "O"){
          console.log("The robot has crushed with a obstacle");
        } else if (robot.y== other.y && robot.x +1 == other.x) {
          console.log("The robot has crushed with another robot");
        } else {
          robot.x += 1;
        }
     }
     break;
   }
   //console.log("The current position is [" + robot.x + ", " + robot.y + "]");
   robot.travelLog.push("[" + robot.x + ", " + robot.y + "]");
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

  // console.log(robot.travelLog);
  printGrid();
}

var board = [
  [" ","O"," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," ","O"," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
  [" "," "," "," "," "," ","O"," "," "," "],
  [" "," ","O"," "," "," "," "," "," "," "],
  [" "," "," "," "," "," "," "," "," "," "],
];

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