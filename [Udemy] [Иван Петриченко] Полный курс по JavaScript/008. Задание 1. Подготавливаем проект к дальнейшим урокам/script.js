'use strict';
let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let
    expense1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expense1Amount = prompt("Во сколько обойдется?", ""),
    expense2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expense2Amount = prompt("Во сколько обойдется?", "");

appData.expenses.expense1 = expense1Amount;
appData.expenses.expense2 = expense2Amount;

alert("Ваш бюджет на 1 день " + appData.budget / 30);

/*
Сколько типов данных существует в JS?
6 в старом стандарте, в новом -7
число, объект, массив, null, undefined, булевый тип, строка

Как вывести информацию в консоль?
console.log();

Какая функция операторов || и &&?
Логическое "или" и логическое "и"
*/