"use strict";
let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-06-25"),

    appData = {
        myMoney: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };

for (let index = 0, a1, a2; index < 2; index++) {
    a1 = prompt("Введите обязательную статью расходов в этом месяце", 'Покупка ...');
    a2 = +prompt("Во сколько обойдется?", '');
    appData.expenses[a1] = a2;
}

alert(appData.myMoney/30);

//-----Ответы на вопросы:-----

// 1) 6 простых типов данных + объект

// 2) Вот:
console.log(money);
console.log(time);
console.log(appData);

// 3) Используются для построения логических выражений
// && - логическое И (выражение истинно, когда оба аргумента истинны)
// || - логическое ИЛИ (выражение истинно, когда хотя бы один аргумент истинен)