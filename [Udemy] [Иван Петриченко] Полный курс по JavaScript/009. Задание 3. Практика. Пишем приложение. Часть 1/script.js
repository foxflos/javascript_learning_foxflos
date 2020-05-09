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

};
/* let
    expense1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expense1Amount = prompt("Во сколько обойдется?", ""),
    expense2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expense2Amount = prompt("Во сколько обойдется?", "");

appData.expenses.expense1 = expense1Amount;
appData.expenses.expense2 = expense2Amount;

alert("Ваш бюджет на 1 день " + appData.budget / 30);
*/

//Наш основной цикл используя конструкцию for
function chooseExpenses() {
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
}
chooseExpenses();

//С помощью while
/* let i = 0, expense, expenseAmount;
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

//C помощью do ... while
/*
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
function detectDayBudget() {
    appData.MoneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на 1 день " + appData.MoneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.MoneyPerDay < 100) {
        console.log("Низкий уровень достатка");
    } else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.MoneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();



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

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Ваша сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        appData.mounthIncome = save / 100 / 12 * percent;
        alert(`Ваш доход в месяц с депозита: ${appData.mounthIncome}`);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
    }
}
chooseOptExpenses();
/* Что значит () после названия функции? 
При создании функции, в круглых скобках указываются параметры функции. 
Так же, в коде, добавляя круглые скобки к имени функции, мы её вызываем - имя_функции().
При вызове можно передать аргументы, перечислив их в скобках.
 */