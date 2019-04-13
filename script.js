var money, time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
  money: money,
  timeData: time,
  expenses: {

  },
  optionalExpenses: {

  },
  income: [],
  savings: false
};
var cash = prompt("Введите обязательную статью расходов в этом месяце");
var cash2 = prompt("Во сколько обойдется?");
appData.optionalExpenses.name = cash;
appData.optionalExpenses.param = cash2;
alert()