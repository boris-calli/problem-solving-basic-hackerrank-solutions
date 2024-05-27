function timeConversion(s) {
  let n = s.length;
  let timeIndication = s.substring(n - 2, n);
  let time = s.substring(0, n - 2);
  n = time.length;
  if (timeIndication === "AM") {
    let hour = time.substring(0, 2);
    if (hour === "12") {
      time = "00" + time.substring(2, n);
      return time;
    }
    return time;
  }
  let hour = time.substring(0, 2);
  if (hour === "12") return time;
  hour = Number(hour) + 12;
  time = hour.toString() + time.substring(2, n);
  return time
}