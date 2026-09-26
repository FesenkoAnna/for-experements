// let randomNumber = Math.floor(Math.random() * 21);
// let probabilityNegative = 0;
// let probabilityPositive = 0;
// let quantity_attempts = 15;
// let message = "";
// let gamer = 0;
// let lastNumber = 0;
//
// while (true) {
//     gamer = Number(prompt(`Компьютер загадал число от 0 до 20 попробуй угадать!\n У вас попыток: ${quantity_attempts}`));
//
//     if ((gamer>=0 && gamer<=20) && (gamer !== randomNumber)) {
//         lastNumber = gamer;
//         quantity_attempts--
//         alert("Вы не угадали число");
//         break;
//     } else if (gamer === randomNumber) {
//         alert(`Вы победили с первого раза! У вас невероятная удача!\nЧисло компьютера: ${randomNumber}`);
//         break;
//     } else {
//         alert("Неверный синтаксис");
//     }
// }
//
// while (true) {
//     if (quantity_attempts <= 0) {
//         alert(`К сожелению вы проиграли. \nЧисло компьютера: ${randomNumber}`);
//         break;
//     }
//
//     probabilityNegative = Math.floor(Math.random() * 21);
//     probabilityPositive = Math.floor(Math.random() * 21);
//
//     if (probabilityNegative > 15){
//         message = "\nВнимание! Если вы не приблизитесь к загаданному числу у вас отнимутся 3 попытки!";
//     }
//     else if (probabilityNegative < 15 && probabilityPositive > 15){
//         message = "\nВнимание! Если вы приблизитесь к загаданному числу у вас добавятся 2 попытки!";
//     }
//     else {
//         message = "";
//     }
//
//     gamer = Number(prompt(`Компьютер загадал число от 0 до 20 попробуй угадать! ${message} \n У вас попыток: ${quantity_attempts}`));
//
//     if ((gamer>=0 && gamer<=20) && (gamer !== randomNumber)) {
//
//         if ((gamer > randomNumber && gamer < lastNumber) || (gamer < randomNumber && gamer > lastNumber)) {
//             if (probabilityNegative < 15 && probabilityPositive > 15) {
//                 quantity_attempts = quantity_attempts + 2;
//             }
//             else {quantity_attempts--}
//
//             alert("Вы не угадали число. Но вы стали ближе к загадоному числу!");
//         }
//         else {
//             if (probabilityNegative > 15) {
//                 quantity_attempts = quantity_attempts - 3;
//             }
//             else {quantity_attempts--}
//
//             alert("Вы не угадали число. И вы не приблизились к загаданному числу!");
//         }
//
//         lastNumber = gamer;
//     } else if (gamer === randomNumber) {
//         alert(`Поздравляю! Вы угадали число! \nЧисло компьютера: ${randomNumber} \nВаше число: ${gamer}`);
//         break;
//     } else {
//         alert("Неверный синтаксис");
//     }
// }











// function hello () {
//     console.log("Hello!")
// }
//
// hello()

// let x = hello()
// x()

// const x = function () {
//     console.log("+")
// }
// x()

// function print() {
//     printHello()
//
//     function printHello () {
//         console.log("Hello!")
//     }
// }
//
// print()
// printHello()

// let x = "yyyy"
//
// function sayHello(qwe){
//     console.log("Hello!",qwe)
// }
//
// sayHello(x)
// sayHello("yyyy")

// function sum(a,b) {
//     let result=a+b
//     console.log(result);
// }
//
// sum(2,3)

// function sum(a,b) {
//     return a+b
// }
//
// sum(2,3)

// int sum_1(int x,int y){
//     return
// }

// function hello () {
//     console.log("Hello!")
// }

// const hi = (name) => console.log("Hello!");

// function sum(a,b) {
//     let result=a+b
//     console.log(result);
// }

// const sum = (x,y) => console.log("Sum = ", x+y);

// sum(5,6)
// const show = (a,b,c,d,e,g,i) => console.log(`Ваше ФИО: ${a} ${b} ${c} \nВаш возраст: ${d} \nВаш год рождения: ${e} \nВаше хобби: ${g} \nВаше любимое произведение: ${i}`)
//
// let first_name = prompt("Введите своё имя: ")
// let last_name = prompt("Введите свою фамилию: ")
// let middle_name = prompt("Введите своё отчество: ")
// let old = prompt("Введите свой возраст: ")
// let birthday = prompt("Введите свой год рождения: ")
// let hobby = prompt(`${last_name} ${first_name} ${middle_name} ваше хобби?`)
// let movie = prompt(`${first_name} какое ваше любимое произведение (фильм,мультфильм,игра)?`)
//
// show(last_name,first_name, middle_name,old,birthday,hobby,movie)



// function calculator(a, b, c) {
//     const sum = (x, y) => {
//         let result = x + y;
//         alert(`${x} + ${y} = ${result}`);
//     }
//     const sub = (x, y) => {
//         let result = x - y;
//         alert(`${x} - ${y} = ${result}`);
//     }
//     const mul = (x, y) => {
//         let result = x * y;
//         alert(`${x} * ${y} = ${result}`);
//     }
//     const div = (x, y) => {
//         if (y === 0) {
//             alert("Ошибка: деление на ноль!");
//             return;
//         }
//         let result = x / y;
//         alert(`${x} / ${y} = ${result}`);
//     }
//
//     if (c === '+') {sum(a, b); }
//     else if (c === '-') {sub(a, b);}
//     else if (c === '/') {div(a, b);}
//     else if (c === '*') {mul(a, b);}
//     else { alert("неверный синтаксис"); }
// }
//
// let num_1 = Number(prompt("Введите первое число: "));
// let num_2 = Number(prompt("Введите второе число: "));
// let symvol = prompt("Введите знак (+,-,*,/): ");
//
// calculator(num_1, num_2, symvol);

// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(2,3))

function pin_check (a) {
    if (a !== "1234") {return false;}
    else {return true;}
}

const money_check = (a) => alert(`Ваш баланс на данный момент составляет: ${a}`)

function money_withdraw(a,b) {
    if (a <= 0) {}
    else if (b <= 0) {}
    else if (a < b) {}
    else {return a-b;}
}

function money_top_up(a,b) {
    return a+b;
}

let money = 10000
let right_pin = false

for (let q = 3;q >=0;q--){
    let pin_input = prompt("Введите свой пин-код: ")
    let pin_out = pin_check(pin_input)

    if (pin_out === true) {
        right_pin = true
        alert("Вы успешно зашли.")
        break;
    }
    else {alert(`Неверный пин-код. У вас осталось ${q} попыток.`)}
}
if (right_pin === false){
    alert("Доступ к банкомату отказано. Ваша карта заблокированна.")
}
else {
    while (true) {
        let opcion = prompt("Выберете действие:\n\nПросмотр баланса (1)\nСнятия средств (2)\nПополнить счет (3)\nВыход (4)")

        if (opcion === '1') {money_check(money)}
        else if (opcion === '2') {
            let take_away_money = Number(prompt("Введите количество средств для снятие со счета: "))
            money_withdraw(money,take_away_money)
            alert(`Ваш счет состовляет: ${money} грн`)
        }
        else if (opcion === '3') {
            let add_money = Number(prompt("Введите количество средств для пополнения счета: "))
            money = money_top_up(money,add_money)
            alert(`Ваш счет состовляет: ${money} грн`)
        }
        else if (opcion === '4') {break}
    }
}