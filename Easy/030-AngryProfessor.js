function angryProfessor(k, a) {
  let attendanceCount = 0;
  a.forEach(time => {
    if (time <= 0) attendanceCount++;
  });
  if (attendanceCount >= k) {
    return 'NO';
  } else {
    return 'YES';
  }
}