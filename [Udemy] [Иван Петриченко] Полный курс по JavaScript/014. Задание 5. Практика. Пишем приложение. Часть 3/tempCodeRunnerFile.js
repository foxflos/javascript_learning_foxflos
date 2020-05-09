       alert (appData.income.forEach(function (item, i) {
            let viewIncomeData;
            viewIncomeData += (`Способы доп. заработка: ${i+1} - ${item}`, "");
            return viewIncomeData;
        }));