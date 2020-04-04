'use strict';
let money,
    time;
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let howMuch;
let appData = {
    dataMoney: money,
    dataTime: time,
    expenses: {
        necessary: howMuch
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
appData.expenses.necessary = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses.howMuch = prompt("Во сколько обойдется?");
alert("Ваш бюджет на 1 день " + appData.dataMoney / 30);

/*
Сколько типов данных существует в JS?
6 в старом стандарте, в новом -7
число, объект, массив, null, undefined, булевый тип, строка

Как вывести информацию в консоль?
console.log();

Какая функция операторов || и &&?
Логическое "или" и логическое "и"
*/