// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    let feet = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return feet*264;
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (Math.abs(destination-start)*264);
  }

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let feet = ((Math.abs(destination-start))*264);

    if (feet < 400) {
        return 0;
    } else if (feet < 2000) {
        return ((feet-400) * 0.02);
    } else if (feet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }

  }