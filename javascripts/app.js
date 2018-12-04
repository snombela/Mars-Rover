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
    if (rover.y != 0) {
      rover.y -= 1;
    }
    break;
    case "E":
    if (rover.x != 9) {
      rover.x += 1;
    }
    break;
    case "S":
    if (rover.y != 9) {
      rover.y += 1;
    }
    break;
    case "W":
    if (rover.x != 0) {
      rover.x -= 1;
    }
    break;
  }
  //console.log("The current position is [" + rover.x + ", " + rover.y + "]");
  rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
}

function executeCommand(command){
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
    }
  }

  console.log(rover.travelLog);
}



