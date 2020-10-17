let credits = 23580;
let pricePerDroid = 3000;
let number = prompt("Введіть кількість");
let totalPrice = (pricePerDroid * number);

if (credits < totalPrice) {
    alert('Недостатньо коштів на рахунку!');
} else if (credits > totalPrice) {
    alert("Ви купил " + number + " дроїдів, на рахунку залишилося "+ (credits - totalPrice) + " кредитів.");
}