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
  if (start > end) {
    return (start - end) * 264;
  }
  else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0;
  }
  else if (400 > distance < 2000) {
    return (distance - 400) * .02
  }
}
