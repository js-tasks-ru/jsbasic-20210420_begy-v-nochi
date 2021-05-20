function sumSalary(salaries) {
  let newArray = Object.values(salaries);
  let sumSalaries = 0;

  for (i = 0; i < newArray.length; i++) {
    if(isFinite(newArray[i]) && typeof newArray[i] == "number") {
      sumSalaries += newArray[i];
    }
  }
  return sumSalaries;
}
