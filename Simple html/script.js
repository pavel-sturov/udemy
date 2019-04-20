let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}

start();

let appData = {
  buget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", '');
      let b = prompt("Во сколько обойдется?", '');

      if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
      } else {
        i -= 1;
      }
    }
  },
  detectDayBudget: function () {
    i = (appData.buget / 30).toFixed();
    alert("Ежедневный бюджет " + i);
    appData.moneyPerDay = i;
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Возникла ошибка");
    }
  },
  chooseSavings: function () { 
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накомлений?"),
        percent = +prompt("Под какой процент?");
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let answer = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = answer;
    }
  },
  chooseIncome: function(){
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

    if(typeof(items) != 'string' || items == ''|| items == null){
      items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    }
    else{
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-нибудь еще?'));
      appData.income.sort();
    }
    appData.income.forEach(function(elem, index){
      alert((index + 1) + '. Способы доп. заработка: '+ elem);
    });
  }

};

for (let elem in appData){
  console.log('Наша программа включает в себя данные: ' + elem + ':' + appData[elem]);
}





// let i = 0;
//   do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');

//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && 
//   a != '' && b != '' && a.length < 50){
//     console.log('done');
//     appData.expenses[a] = b;
//     i ++;
//   }
//   else{
//     i -= 1;
//   }
// }
//     while(i < 2);

// let i = 0;
// while (i < 2){
//   let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//   let b = prompt("Во сколько обойдется?", '');

//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && 
//   a != '' && b != '' && a.length < 50){
//     console.log('done');
//     appData.expenses[a] = b;
//     i ++;
//   }
//   else{
//     i -= 1;
//   }
// }