function isTouchDevice() {
  return !!("ontouchstart" in window || navigator.maxTouchPoints);
}

function hoursToMilliseconds(hours) {
  const hourInMilliseconds = 3600000;
  return hours * hourInMilliseconds;
}

export { isTouchDevice, hoursToMilliseconds };
