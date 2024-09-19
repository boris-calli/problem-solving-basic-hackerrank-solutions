function minimumNumber(n, password) {
  let numberExists = false;
  let lowerCaseLetterExists = false;
  let upperCaseLetterExists = false;
  let specialCharExists = false;
  let count = 0;
  for (let i in password) {
    let charAscii = password.charCodeAt(i);
    if (charAscii <= 57 && charAscii >= 48) {
      numberExists = true;
    } else if (charAscii <= 90 && charAscii >= 65) {
      upperCaseLetterExists = true;
    } else if (charAscii <= 122 && charAscii >= 97) {
      lowerCaseLetterExists = true;
    } else if (charAscii === 33 || (charAscii <= 38 && charAscii >= 35) || (charAscii <= 43 && charAscii >= 40) || charAscii === 65 || charAscii === 45 || charAscii === 94) {
      specialCharExists = true;
    }
  }
  
  if (!numberExists) count++;
  if (!lowerCaseLetterExists) count++;
  if (!upperCaseLetterExists) count++;
  if (!specialCharExists) count++;
  
  if (n + count < 6) {
    let lengthPasswordNecessary = (6 - n) - count;
    count += lengthPasswordNecessary;
    return count;
  } else {
    return count;
  }
}

