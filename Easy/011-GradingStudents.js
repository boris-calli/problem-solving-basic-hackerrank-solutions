function gradingStudents(grades) {
  let n = grades.length;
  for (let i = 0; i < n; i++) {
    if (!(grades[i] < 38)) {
      let modulus = grades[i] % 10;
      let coeficient = Math.trunc(grades[i] / 10);
      let multiple = 0;
      if (modulus < 5) {
        multiple = (coeficient * 10) + 5;
      } else {
        multiple = (coeficient * 10) + 10;
      }
      let difference = multiple - grades[i];
      if (difference < 3) grades[i] = multiple;
    }
  }
  return grades;
}