/*
Задание - Создать поток, которому данные для работы передаются как параметр.
Программа написана в VS code, использует установленный nodejs
Моя программа передает из основного потока в дочерний параметр вводимый пользователем
в переменную num.
Далее проверяет в дочернем потоке ввёденное число на натуральность.
(можно сделать еще проверку на тип (если пишет NaN - снова запрос на ввод), 
но нет смысла так как нет возможности продемонстрировать работу
в браузере/с вводом напрямую в консоль - для браузера нужно разворачивать сервер nodejs,
а ввод в консоль не заработал)
*/

const {
    Worker,
    isMainThread,
    parentPort
} = require('worker_threads');

//var prompt = require('syncprompt'); - плагин для ввода текста в консоль, не работает в многопоточном режиме

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.once('message', (message) => {
        console.log(message); // Печать вывода.
    });
    console.log(`Основной поток? - ${isMainThread}`);
    let num = 23 //    +prompt('Введите число для проверки ');
    console.log(`Ваше число - ${num}`);
    worker.postMessage(num);
} else {
    // Когда получено число от род. потока, проверяет его и отправляет обратно результат.
    parentPort.once('message', (message) => {
        for (let i = 0; i < message; i++) {
            if (message % i == 0) {
                message += " - Не натуральное";
                break;
            } else if (i == message - 1 || message == 2) {
                message += " - Натуральное";
            } else {
                i++;
            }
        }
        parentPort.postMessage(`Основной поток? - ${isMainThread} 
${message}`);
    });
}