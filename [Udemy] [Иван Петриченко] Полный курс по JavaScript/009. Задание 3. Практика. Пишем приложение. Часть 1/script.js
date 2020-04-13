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

for (let i = 0; i < 2; i++) {
    let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
        expenseAmount = +prompt("Во сколько обойдется?", "");
    if ((typeof (expense) === 'string') && (typeof (expense) != null) && (expense != '') && (expense.length < 50) &&
        (!isNaN(expenseAmount)) && (typeof (expenseAmount) != null) && (expenseAmount != '') && (expense.length < 50)) {
        console.log("done");
        appData.expenses[expense] = expenseAmount;
    } else {
        alert("Вы допустили ошибку при вводе данных. Попробуйте снова ");
        i--;
    }
}

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
        alert("Вы допустили ошибку при вводе данных. Попробуйте снова ");
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
        alert("Вы допустили ошибку при вводе данных. Попробуйте снова ");
        i--;
    }
} while (i<2);
*/


appData.MoneyPerDay = appData.budget / 30;

alert("Ваш бюджет на 1 день " + appData.MoneyPerDay);

if (appData.MoneyPerDay < 100) {
    console.log("Низкий уровень достатка");
} else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000) {
        console.log("Средний уровень достатка");        
    } else if (appData.MoneyPerDay > 2000) {
            console.log("Высокий уровень достатка");            
        } else {
                 console.log("Произошла ошибка");
        }



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