function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42;
  }
  else {
    return 42 - location;
  }
}
