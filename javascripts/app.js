// Rover Object Goes Here
// ======================
var rover = {
  direction: "N"
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
  console.log("The actual position is " + rover.direction);
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
  console.log("The actual position is " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
}
