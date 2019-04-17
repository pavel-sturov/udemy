let start = document.getElementById('start'),
    value = document.querySelectorAll('.result-table div[class*="value"]'),
    expensesItem = document.querySelectorAll("input[class='expenses-item']"),
    utv = document.querySelector(".data button:first-of-type"),
    rasch = document.querySelector(".data button:nth-of-type(3)"),
    optionalexpenses = document.querySelectorAll("input[class='optionalexpenses-item']");
    day = document.querySelector(".day-value"),
    month = document.querySelector(".month-value"),
    year = document.querySelector(".year-value"),
    percent = document.querySelector("#percent"),
    sum = document.querySelector("#sum"),
    checkbox = document.querySelector("input[type='checkbox']"),
    chooseIncome = document.querySelector("input.choose-income");


    console.log(rasch);
    console.log(utv);
    console.log(value);
    console.log(expensesItem);
    console.log(optionalexpenses);
    console.log(day);
    console.log(percent);
    console.log(checkbox);
    console.log(chooseIncome);







    //  Получить кнопку "Начать расчет" через id

    //  ·        Получить все блоки в правой части программы через классы 
    // (которые имеют класс название-value, начиная с <div class="budget-value"></div> и 
    // заканчивая <div class="yearsavings-value"></div>)
     
    //  ·        Получить поля(input) c обязательными расходами через класс. 
    // (class=”expenses-item”)
     
    //  ·        Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в 
    // своей переменной. 
     
    //  ·        Получить поля для ввода необязательных расходов (optionalexpenses-item) 
    // при помощи querySelectorAll
     
    //  ·        Получить оставшиеся поля через querySelector (статьи возможного дохода, 
    // чекбокс, сумма, процент, год, месяц, день)
     
    //  3) Проверить, чтобы все работало и не было ошибок в консоли
     
    //  4) Добавить папку с уроком на свой GitHub