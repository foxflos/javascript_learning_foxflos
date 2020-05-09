'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
                expenseAmount = +prompt("Во сколько обойдется?", "");
            if ((typeof (expense) === 'string') && (typeof (expense) != null) && (expense != '') && (expense.length < 50) &&
                (!isNaN(expenseAmount)) && (typeof (expenseAmount) != null) && (expenseAmount != '') && (expense.length < 50)) {
                console.log("done");
                appData.expenses[expense] = expenseAmount;
            } else {
                alert("Вы допустили ошибку при вводе данных. Попробуйте снова", "");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.MoneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на 1 день " + appData.MoneyPerDay);
    },
    detectLevel: function () {
        if (appData.MoneyPerDay < 100) {
            console.log("Низкий уровень достатка");
        } else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.MoneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Ваша сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            appData.mounthIncome = save / 100 / 12 * percent;
            alert(`Ваш доход в месяц с депозита: ${appData.mounthIncome}`, "");
        }
    },
    chooseOptExpense: function () {
        for (let i = 1; i <= 3; i++) {
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесёт вам дополнительный доход? (Перечислите через запятую)", "");
        while (typeof (items) !== 'string' || items == null || items == "") {
            alert("Вы допустили ошибку при вводе данных. Попробуйте снова", "");
            items = prompt("Что принесёт вам дополнительный доход? (Перечислите через запятую)", "");
        }
        appData.income = items.split(", ");
        appData.income = items.split(",");
        let lastItem = prompt("Может что то ещё?", "");
        while (typeof (lastItem) !== 'string' || lastItem == null || lastItem == "") {
            alert("Вы допустили ошибку при вводе данных. Попробуйте снова", "");
            lastItem = prompt("Может что то ещё?", "");
        }
        appData.income.push(lastItem);
        appData.income.sort();
        let viewIncomeData = `Способы доп. заработка:\n`;
        appData.income.forEach(function (item, i) {
            viewIncomeData += `${i+1} - ${item}\n`;
        });
        alert(viewIncomeData);

    }
};

function viewObject(objectName) {
    let data = "Наша программа включает в себя данные: ";
    for (let key in objectName) {
        data += `Свойство ${key} имеет значение " ${objectName[key]} " \n`;
    }
    return data;
}

alert(viewObject(appData));






/* Функция chooseExpenses

 let
    expense1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expense1Amount = prompt("Во сколько обойдется?", ""),
    expense2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expense2Amount = prompt("Во сколько обойдется?", "");

appData.expenses.expense1 = expense1Amount;
appData.expenses.expense2 = expense2Amount;

alert("Ваш бюджет на 1 день " + appData.budget / 30);
*/

/* Функция chooseExpenses с помощью while

let i = 0, expense, expenseAmount;
while(i < 2) {
    i++;
    expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expenseAmount = +prompt("Во сколько обойдется?", "");
    if ((typeof (expense) === 'string') && (typeof (expense) != null) && (expense != '') && (expense.length < 50) &&
        (!isNaN(expenseAmount)) && (typeof (expenseAmount) != null) && (expenseAmount != '') && (expense.length < 50)) {
        console.log("done");
        appData.expenses[expense] = expenseAmount;
    } else {
        alert("Вы допустили ошибку при вводе данных. Попробуйте снова", "");
        i--;
    }
}
*/

/* 
Функция chooseExpenses с помощью do ... while
let i = 0, expense, expenseAmount;
do {
    i++;
    expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expenseAmount = +prompt("Во сколько обойдется?", "");
    if ((typeof (expense) === 'string') && (typeof (expense) != null) && (expense != '') && (expense.length < 50) &&
        (!isNaN(expenseAmount)) && (typeof (expenseAmount) != null) && (expenseAmount != '') && (expense.length < 50)) {
        console.log("done");
        appData.expenses[expense] = expenseAmount;
    } else {
        alert("Вы допустили ошибку при вводе данных. Попробуйте снова", "");
        i--;
    }
} while (i<2);
*/

/*
Сколько типов данных существует в JS?
6 в старом стандарте, в новом -7
число, объект, массив, null, undefined, булевый тип, строка

Как вывести информацию в консоль?
console.log();

Какая функция операторов || и &&?
Логическое "или" и логическое "и"

Сколько видов циклов существует в JS?
3 вида - for, while, do ... while
*/

/* Что значит () после названия функции? 
При создании функции, в круглых скобках указываются параметры функции. 
Так же, в коде, добавляя круглые скобки к имени функции, мы её вызываем - имя_функции().
При вызове можно передать аргументы, перечислив их в скобках. */

/* Как перебрать свойства объекта?
Можно с помощью цикла for..in,
либо с помощь метода  Object.keys() */