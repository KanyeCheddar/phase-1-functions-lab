// Code your solution in this file!

/*function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42);
}*/

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue-42);
}

/*function distanceFromHqInFeet(someValue) {
    let feet = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return feet*264;
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  */

  function distanceFromHqInFeet(someValue) {
    let feet = distanceFromHqInBlocks(someValue);
    return feet*264;
  }

  function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(destination - start);
    return distance*264;
  }

  function calculatesFarePrice(start, destination) {
    let feet2 = distanceTravelledInFeet(start, destination);

    if(feet2 < 400){
        return 0;
    } else if(feet2 <= 2000) {
        let offset = feet2 - 400;
        return offset *.02;
    } else if (feet2 < 2500) {
        return 25;
    } else if (feet2 > 2500) {
        return 'cannot travel that far';
    } 
  }
