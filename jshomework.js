const pin_check = (a) => {if (a === "1234") {return true;}}

const money_check = (a) => alert(`Ваш баланс на данный момент составляет: ${a}`)

function money_withdraw(a,b) {
    const check_commission = (a) => {
        if (a >= 3000) {
            let commission = b * 0.02
            a = a + commission
            alert(`Коммисия составляет ${commission}грн.`)
        }
        return a;
    }

    if (a <= 0) {
        alert("На счету у вас нулевой баланс!")
        return a-0;
    }
    else if (b <= 0) {
        alert("Вы не можете снять меньше 1 гривны!")
        return a-0;
    }
    else if (b <= 5000) {
        if (a < b) {
            let money_all = prompt("Сумма ведённая вами превышает наличие денег на вашем счету! \nСнять все деньги на вашем счету?\n\n Да(1) Нет(2)")
            if (money_all === '1') {
                check_commission(a)
                return a - a;
            }
            else if (money_all === '2') {
                return a - 0;
            }
        }
        else {
            b = check_commission(b)
            return a-b;
        }
    }

    else {
        alert("Сумма ведённая вами превышает 5000 гривен!")
        return a-0;
    }
}

const money_top_up = (a,b) => {return a + b;}

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
        let option = prompt("Выберете действие:\n\nПросмотр баланса (1)\nСнятия средств (2)\nПополнить счет (3)\nВыход (4)")

        if (option === '1') {money_check(money)}
        else if (option === '2') {
            let take_away_money = Number(prompt("Введите количество средств для снятие со счета: "))
            let old_money = money
            money = money_withdraw(money,take_away_money)
            if (old_money === money) alert("Операция отклонена.")
            else alert(`Ваш счет состовляет: ${money} грн`)
        }
        else if (option === '3') {
            let add_money = Number(prompt("Введите количество средств для пополнения счета: "))
            money = money_top_up(money,add_money)
            alert(`Ваш счет состовляет: ${money} грн`)
        }
        else if (option === '4') {break}
    }
}