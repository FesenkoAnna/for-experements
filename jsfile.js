//console.log("Hello Word");

//let age =20;
//console.log(age);
//
//age =22;
//console.log(age);
//
//const Pi = 3.14;
//Pi =23;
//console.log(Pi);
//
//var x =12;

//let max_health
//let maxHealth

//let name = "Alex"
//let age = 23;
//
//console.log(name, age);
//console.log("Name: " + name + " Age: " + age);
//console.log(`Name: ${name} \nAge: ${age + 23}`);
//
//console.log(typeof(age));

// + - = * / ** %
// ++ --
// Math.random() -floor - ceil - round - max - min - sqrt
// < > != == >= <=
// === !==

// if else (else if)
// || &&

// switch case

//for(счетчик;условие;итерация)
//for(let q = 1; q <=100; q+=10)
//{
//    console.log(q);
//}

//while()
//break continue

//let name = prompt("Enter your name");
//alert(name)

//console.log("Мини викторина!");
//console.log("Как вас зовут?");
//let name = prompt("Введите ваше имя: ");
//alert(name);
//console.log("Сколько вам лет?");
//let age = prompt("Введите ваш возраст: ");
//alert(age);
//console.log("Какое ваше увлечение?");
//let hobby = prompt("Введите ваше увлечение: ");
//alert(hobby);
//
//console.log(`Викторина окончена!  \nВаше имя: ${name} \nВаш возраст: ${age} \nВаше увлечение: ${hobby}`)


// #1 викторина

//alert("Мини викторина!");
//
//let answer1 = prompt(`Столица Норвегии: \nA) Тронхейм \nB) Осло \nC) Сундсвалль`);
//alert(`Ваш ответ: ${answer1}`);
//let answer2 = prompt(`Какая планета Солнечной системы самая горячая?: \nA) Меркурий \nB) Марс \nC) Венера`);
//alert(`Ваш ответ: ${answer2}`);
//let answer3 = prompt(`Какой элемент составляет около 78% атмосферы Земли?: \nA) Азот \nB) Водород \nC) Кислород`);
//alert(`Ваш ответ: ${answer3}`);
//let answer4 = prompt(`Какая страна имеет больше всего часовых поясов в мире (с учётом заморских территорий)?: \nA) Франция \nB) США \nC) Китай`);
//alert(`Ваш ответ: ${answer4}`);
//let answer5 = prompt(`Единственное млекопитающее, способное к настоящему и длительному полёту — это…: \nA) Летучая белка \nB) Шерстокрыл \nC) Летучая мышь`);
//alert(`Ваш ответ: ${answer5}`);
//
//
//alert(`Ваш ответ: Правельный ответ: \n ${answer1}        =       B Осло\n ${answer2}        =       C Венера\n ${answer3}        =      A Азот\n ${answer4}        =        A Франция\n ${answer5}        =         C Летучая мышь`);
//
//// #2 калькулятор
//
//while(true)
//{
//let a = prompt("Первое число: ");
//let b = prompt("Второе число: ");
//
//let operator = prompt("Действие с цифрами: прибавление(+), убавление(-), умножение(*), деление(/)");
//
//let result;
//
//switch(operator)
//{
//    case '+':
//        result = a + b;
//        break;
//    case '-':
//        result = a - b;
//        break;
//    case '*':
//        result = a * b;
//        break;
//    case '/':
//        if (b === 0) {
//            alert("Ошибка: деление на ноль!");
//        } else {
//            result = a / b;
//        }
//        break;
//    default:
//        alert("Ошибка: неизвестный оператор");
//        break;
//}
//
//if (result !== undefined)
//{
//    alert(`Результат: ${result}`);
//}
//
//let answer = prompt("Продолжить? да/нет");
//
//if (answer === "да")
//{
//    continue;
//}
//else
//{
//    break;
//}
//}
//
////№3 палиндром
//
//while(true)
//{
//let originalText = prompt("Введите текст: ");
//
//let cleanText = originalText.toLowerCase().replaceAll(' ', '');
//
//let reversedText = cleanText.split('').reverse().join('');
//
//if (cleanText === reversedText)
//{
//    alert("Это палиндром.");
//}
//else
//{
//    alert("Это не палиндром.");
//}
//
//let answer = prompt("Продолжить? да/нет");
//
//if (answer === "да")
//{
//    continue;
//}
//else
//{
//    break;
//}
//}

//№4 крестики нолики

//console.log(`---------\n`);


// alert(`---------\n| ${listCell[0]} | ${listCell[1]} | ${listCell[2]} |\n| ${listCell[3]} | ${listCell[4]} | ${listCell[5]} |\n| ${listCell[6]} | ${listCell[7]} | ${listCell[8]} |\nВведите ваш ход:`);

    // for (let q = 0; q < 3; q++) {
    //     console.log(`---------\n`);
    //     if (q === 0)
    //         console.log(`| ${listCell[0]} | ${listCell[1]} | ${listCell[2]} |\n`);
    //     else if (q === 1)
    //         console.log(`| ${listCell[3]} | ${listCell[4]} | ${listCell[5]} |\n`);
    //     else
    //         console.log(`| ${listCell[6]} | ${listCell[7]} | ${listCell[8]} |\n`);
    // }

    // let move = prompt("Введите ваш ход: ");

let gamer = true;

let quantityMove = 0;

let listCell = [a = '1', b = '2', c = '3', d = '4', e = '5', f = '6', g = '7', h = '8', i = '9'];

while (true) {
    if (quantityMove === 9) {
        break;
    }

    let move = prompt(`| ${listCell[0]} | ${listCell[1]} | ${listCell[2]} |\n| ${listCell[3]} | ${listCell[4]} | ${listCell[5]} |\n| ${listCell[6]} | ${listCell[7]} | ${listCell[8]} |\nВведите ваш ход:`);

    if (move > 0 && move < 10) {
        move = move - 1;

        if (listCell[move] === 'O' || listCell[move] === 'X') {
            alert("Вы выбрали повторную цифру, повторите свой ход: ");
        } else {
            if (gamer === true) {
                listCell[move] = 'O';
                gamer = false;
            } else {
                listCell[move] = 'X';
                gamer = true;
            }

            if (listCell[0] === 'O' && listCell[1] === 'O' && listCell[2] === 'O') {
                break;
            } else if (listCell[3] === 'O' && listCell[4] === 'O' && listCell[5] === 'O') {
                break;
            } else if (listCell[6] === 'O' && listCell[7] === 'O' && listCell[8] === 'O') {
                break;
            } else if (listCell[0] === 'O' && listCell[3] === 'O' && listCell[6] === 'O') {
                break;
            } else if (listCell[1] === 'O' && listCell[4] === 'O' && listCell[7] === 'O') {
                break;
            } else if (listCell[2] === 'O' && listCell[5] === 'O' && listCell[8] === 'O') {
                break;
            } else if (listCell[0] === 'O' && listCell[4] === 'O' && listCell[8] === 'O') {
                break;
            } else if (listCell[2] === 'O' && listCell[4] === 'O' && listCell[6] === 'O') {
                break;
            }


            if (listCell[0] === 'X' && listCell[1] === 'X' && listCell[2] === 'X') {
                break;
            } else if (listCell[3] === 'X' && listCell[4] === 'X' && listCell[5] === 'X') {
                break;
            } else if (listCell[6] === 'X' && listCell[7] === 'X' && listCell[8] === 'X') {
                break;
            } else if (listCell[0] === 'X' && listCell[3] === 'X' && listCell[6] === 'X') {
                break;
            } else if (listCell[1] === 'X' && listCell[4] === 'X' && listCell[7] === 'X') {
                break;
            } else if (listCell[2] === 'X' && listCell[5] === 'X' && listCell[8] === 'X') {
                break;
            } else if (listCell[0] === 'X' && listCell[4] === 'X' && listCell[8] === 'X') {
                break;
            } else if (listCell[2] === 'X' && listCell[4] === 'X' && listCell[6] === 'X') {
                break;
            }

            if (gamer === true) {
                alert("Ходят нули");
            } else {
                alert("Ходят кресты");
            }
            quantityMove++
        }
    }
    else
    {
        alert("Неверный символ или цифра вне рамок клеток.");
    }
}

if (gamer === true && quantityMove < 8)
{
    alert("Победили кресты");
}
else if (gamer === false && quantityMove < 8)
{
    alert("Победили нули");
}
else
{
    alert("Вышла ничья");
}


// let health = 150
// let experience = 0
// let gold = 0
//
// let damage= 0
// let defender= 0
// let items= ["у вас пока нет предметов"]
//
// let choise = 0
// let cycle_1 = 2
// let cycle_2 = 5
// let healthItem = 0
// let goldChest = 0
// let armor = 0
// let weapon = 0
// let string = ""
//
//
// gamer = prompt(`Ты:\n------------\nЗдоровье: ${health}\nОпыт: ${experience}\nЗолото: ${gold}\n------------\nИнвентарь:(нажмите на i)`)
//
// if (gamer === 'i'){
//     alert(`Инвентарь:\n------------\nУрон: ${damage}\nБроня: ${defender}\nПредметы: ${items}\n\n(выйти на x)`)
// }
//
// function event () {
//     //монстр
//     //ловушка
//     //торговец
//     //сундук
// }
//
// //монстр
// function fight () {
//
// }
// //ловушка
// function trap () {
//
// }
// //торговец\магазин
// function dealer () {
//
// }
// //сундук
// function chest () {
//     goldChest = Math.floor((Math.random() * 100)+15)
//     healthItem = Math.floor((Math.random() * 20)+5)
//     armor = 0.15
//     weapon = Math.floor((Math.random() * 5)+3)
// }
//
// for (let q = 1; q<=6; q++) {
//     alert(string)
//     for (let w = 0; w<=3; w++) {
//         alert(string)
//
//         //выпадения случайного события
//         if (w===0) {
//             //первая комната
//             if (q===1) {
//
//                 //сундук
//             }
//             //вторая комната
//             else if (q===2) {
//                 //монстр
//             }
//             //третяя комната
//             else if (q===3) {
//                 //монстр
//                 //ловушка
//                 //торговец
//                 //сундук
//             }
//             //четвёртая комната
//             else if (q===4) {
//                 //монстр
//                 //ловушка
//                 //сундук
//             }
//             //пятая комната
//             else if (q===5) {
//                 //монстр
//                 //ловушка
//                 //торговец
//                 //сундук
//             }
//         }
//         else if (w===1) {
//             //первая комната
//             if (q===1) {
//                 //сундук
//                 //торговец
//             }
//             //вторая комната
//             else if (q===2) {
//                 //монстр
//                 //ловушка
//                 //торговец
//                 //сундук
//             }
//             //третяя комната
//             else if (q===3) {
//                 //монстр
//                 //ловушка
//                 //торговец
//                 //сундук
//             }
//             //четвёртая комната
//             else if (q===4) {
//                 //монстр
//                 //ловушка
//                 //сундук
//             }
//             //пятая комната
//             else if (q===5) {
//                 //монстр
//                 //ловушка
//                 //торговец
//                 //сундук
//             }
//         }
//         else if (w===2) {
//             //первая комната
//             if (q===1) {
//                 //сундук
//                 //торговец
//             }
//             //вторая комната
//             else if (q===2) {
//                 //монстр
//                 //ловушка
//                 //торговец
//                 //сундук
//             }
//             //третяя комната
//             else if (q===3) {
//                 //монстр
//                 //ловушка
//                 //торговец
//                 //сундук
//             }
//             //четвёртая комната
//             else if (q===4) {
//                 //монстр
//                 //ловушка
//                 //сундук
//             }
//             //пятая комната
//             else if (q===5) {
//                 //монстр
//                 //ловушка
//                 //торговец
//                 //сундук
//             }
//
//             if (q===1) {
//                 choise = prompt("Пройти ещё раз?(Осталось )(1) \nМагазин (2)\nИдти дальше (3)")
//                 if (choise === 1) {
//                     w=w-2
//                 }
//                 else if (choise === 2) {
//                     //открыть магазин
//                 }
//                 else if (choise === 3) {}
//             }
//             else {choise = prompt("Пройти ещё раз?(Осталось )(1) \nМагазин (2)\nИдти дальше (3)")}
//         }
//
//     }
// }
