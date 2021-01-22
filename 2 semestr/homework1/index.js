
const sum = people.filter(function(allMoney){

     return allMoney.money>100;
});
console.log(sum);

const price = people.reduce(function(acc, current){
  return acc + current.money;
}, 0)
console.log(price);
