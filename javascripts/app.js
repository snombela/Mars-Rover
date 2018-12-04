// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0
}

// ======================
function turnLeft(rover){
  console.log("The start position is " + rover.direction);
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
  console.log("The current position is " + rover.direction);
}

function turnRight(rover){
  console.log("The start position is " + rover.direction);
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
  console.log("The current position is " + rover.direction);
}

function moveForward(rover){
  console.log("The start position is [" + rover.x + ", " + rover.y + "]");
  switch (rover.direction) {
    case "N":
    rover.y -= 1;
    break;
    case "E":
    rover.x += 1;
    break;
    case "S":
    rover.y += 1;
    break;
    case "W":
    rover.x -= 1;
    break;
  }
  console.log("The current position is [" + rover.x + ", " + rover.y + "]");
  
}
