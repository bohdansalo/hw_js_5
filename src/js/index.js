//  1

// const drink = "coffe";

// switch (drink) {
//   case "coffe":
//     console.log("Кава на ваший вибір: ");
//     break;
//   case "tea":
//     console.log("Чай на ваший вибір: ");
//     break;
//   case "juice":
//     console.log("Сік на ваший вибір: ");
//   default:
//     console.log("Ви щось обираєте?");
//     break;
// }

//  2

// const day = "sunday";

// switch (day.toLowerCase()) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log("Це мої робочі дні");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Це мої вихідні:", day);

//     break;

//   default:
//     console.log("");
//     break;
// }

// 3

// const season = 9;

// switch (season) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Літо");
//     break;

//   case 9:
//   case 10:
//   case 11:
//     console.log("Осінь");
//     break;

//   default:
//     console.log("Такої пори не існує");
//     break;
// }

// 4

// const color = "green";

// switch (color) {
//   case "green":
//     console.log("йти");
//     break;
//   case "red":
//     console.log("стоп");
//     break;
//   case "yellow":
//     console.log("чекати");
//     break;
// }

// 5

const firstNumber = 15;
const sumNumber = 5;

const operator = "+";

switch (operator) {
  case "*":
    console.log(firstNumber * sumNumber);
    break;
  case "/":
    console.log(firstNumber / sumNumber);
    break;
  case "+":
    console.log(firstNumber + sumNumber);
    break;
  case "-":
    console.log(firstNumber - sumNumber);
    break;
  default:
    console.log("Такого оператора немає");
}
