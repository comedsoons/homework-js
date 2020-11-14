// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true,
//   };
  
//   user.mood = "happy";
//   // user["hobby"] = "skydiving";
//   user.hobby = "skydiving";
//   user.premium = false;
//   // console.log(user);
//   // const keys = Object.keys(user);
  
//   // for (const key of keys) {
//   //   // console.log(key);
//   //   // console.log(user[key]);
//   // console.log(`${key} : ${user[key]}`);
//   // }
  
//   // for...in
  
//    for (const key in user) {
//   //   // console.log(key);
//   //   // console.log(user[key]);
//      console.log(`${key} : ${user[key]}`);
//    }
  
//   // console.log(keys);
  


























const countTotalSalary = function (employees) {
  // let total = 0;
  // const values = Object.values(employees);
  // for (const val of values){
  //   total += val;
  // }
  // return total;

  let total = 0;
  for (const key in employees){
    total += employees[key];
  }
return total;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
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

