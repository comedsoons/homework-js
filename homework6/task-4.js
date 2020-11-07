const countTotalSalary = function (employees) {
    let sumSalary = 0;
    const values = Object.values(employees);
    for (let salary of values) {
        sumSalary += salary;
    }
    return sumSalary;
};
  
console.log(countTotalSalary({})); // 0
  
console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
); // 330
  
console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
); // 400