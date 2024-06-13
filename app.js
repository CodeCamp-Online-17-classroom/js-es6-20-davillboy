// write code here
function topSalaries(salaries) {
  if (Object.keys(salaries).length === 0) {
    return null; 
  }

  let maxSalary = 0;
  let topEarner = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarner = name;
    }
  }

  return topEarner; // 
}

let salaries1 = {
  John: 100,
  Pete: 300,
  Mary: 250
};
console.log(topSalaries(salaries1));

let salaries2 = {};
console.log(topSalaries(salaries2)); 
