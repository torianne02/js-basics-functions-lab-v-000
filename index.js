function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42;
  }
  else {
    return 42 - location;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
  let distanceTravelled = 0;
  if (start > end) {
    distanceTravelled = start - end;
  }
  else {
    return (end - start) * 264;
  }
}
