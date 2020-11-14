//task - 2

// const countProps = function (obj) {
//     const values = Object.values(obj);
//     return values.length;
// };
  
// console.log(countProps({})); // 0
  
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3








//task - 3

 const findBestEmployee = function (employees) {
     let totalTasksDone = 0;
     let theMostProductive = '';
     for (const key in employees) {
         if (employees[key] > totalTasksDone) {
             totalTasksDone += employees[key];
             theMostProductive = key;
         }
     }
     return theMostProductive;
 };

 console.log(
     findBestEmployee({
       ann: 29,
       david: 35,
       helen: 1,
       lorence: 99,
     }),
 ); // lorence
  
 console.log(
     findBestEmployee({
       poly: 12,
       mango: 17,
       ajax: 4,
     }),
 ); // mango
  
 console.log(
     findBestEmployee({
       lux: 147,
       david: 21,
       kiwi: 19,
      chelsy: 38,
     }),
 ); // lux