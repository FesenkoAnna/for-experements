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






















let health = 150
let experience = 0
let gold = 0

let damage = 10
let defender = 0
let items = ["у вас пока нет предметов"]

let choise = 0
let cycle_1 = 2 // Лимит повторов для 1 комнаты
let cycle_2 = 5 // Лимит повторов для остальных комнат
let healthItem = 0
let goldChest = 0

// 3. Ограничение жизней (максимум 150)
const MAX_HEALTH = 150

// Переменные для отслеживания купленного оружия и брони в текущей комнате
let currentWeaponLevel = 0
let currentArmorLevel = 0

// Переменные для отслеживания текущих остатков повторов
let room_repeats_left = 0

// Показать статус/инвентарь
function showStatus() {
    // Гарантируем, что здоровье не превысит 150
    if (health > MAX_HEALTH) {
        health = MAX_HEALTH
    }

    while (true) {
        gamer = prompt(`Ты:\n------------\nЗдоровье: ${health}/${MAX_HEALTH}\nОпыт: ${experience}\nЗолото: ${gold}\n------------\nИнвентарь: (нажмите на i, либо нажмите Enter для продолжения)`)

        if (gamer === 'i') {
            let gamer_1 = '0'
            while (true) {
                gamer_1 = prompt(`Инвентарь:\n------------\nЗдоровье: ${health}/${MAX_HEALTH}\nУрон: ${damage}\nБроня: ${defender}\nПредметы: ${items.join(", ")}\n\n(нажмите на s чтобы выличится) (нажмите на Enter для выхода)`)
                if (gamer_1 === 's') {
                    let pIndex = items.findIndex(item => item.includes("Зелье"))
                    health += 25
                    if (health > MAX_HEALTH) health = MAX_HEALTH // 3. Ограничение 150 HP
                    alert(`🧪 Вы выпили ${items[pIndex]} и восстановили 25 HP! Текущее HP: ${health}/${MAX_HEALTH}`)
                    items.splice(pIndex, 1)
                    if (items.length === 0) items.push("у вас пока нет предметов")
                }
                else if (gamer_1 === '') {
                    break
                }
                else {
                    alert("У вас нет зелий!")
                }
            }
        }
        else {
            break
        }
    }
}

// БИТВА С МОНСТРОМ
function fight(monsterName, monsterHp, monsterMinDmg, monsterMaxDmg, expReward, goldReward, isBoss = false) {
    alert(`⚔️ Встреча с монстром: ${monsterName}!\nHP: ${monsterHp}, Урон: ${monsterMinDmg}-${monsterMaxDmg}`)

    while (monsterHp > 0 && health > 0) {
        let action = prompt(`Бой с ${monsterName}!\nТвое HP: ${health}/${MAX_HEALTH} | HP Монстра: ${monsterHp}\n\n1 - Атаковать\n2 - Выпить зелье (если есть)\n3 - Убежать`)

        if (action === "1") {
            let curDmg = damage
            if (Math.random() < 0.2) {
                curDmg = Math.floor(damage * 1.8)
                alert("💥 Критический удар!")
            }
            monsterHp -= curDmg
            alert(`Вы нанесли ${curDmg} урона!`)

            if (monsterHp <= 0) {
                alert(`🎉 Вы победили ${monsterName}!`)
                gold += goldReward
                experience += expReward
                alert(`Получено золота: ${goldReward}, опыта: ${expReward}`)
                break
            }
        } else if (action === "2") {
            let pIndex = items.findIndex(item => item.includes("Зелье"))
            if (pIndex !== -1) {
                health += 25
                if (health > MAX_HEALTH) health = MAX_HEALTH // 3. Ограничение 150 HP
                alert(`🧪 Вы выпили ${items[pIndex]} и восстановили 25 HP! Текущее HP: ${health}/${MAX_HEALTH}`)
                items.splice(pIndex, 1)
                if (items.length === 0) items.push("у вас пока нет предметов")
            } else {
                alert("У вас нет зелий!")
                continue
            }
        } else if (action === "3") {
            if (isBoss) {
                alert("От босса нельзя сбежать!")
            } else {
                if (Math.random() < 0.5) {
                    alert("🏃 Вы успешно сбежали!")
                    return
                } else {
                    alert("Побег не удался!")
                }
            }
        }

        // Ответный урон монстра
        let enemyDmg = Math.floor(Math.random() * (monsterMaxDmg - monsterMinDmg + 1)) + monsterMinDmg
        let finalDmg = Math.max(1, enemyDmg - defender)
        health -= finalDmg
        alert(`👹 ${monsterName} наносит вам ${finalDmg} урона! Ваше HP: ${health}/${MAX_HEALTH}`)
    }
}

// ЛОВУШКА
function trap() {
    let trapDmg = Math.floor(Math.random() * 15) + 10
    health -= trapDmg
    alert(`⚠️ Вы попали в ловушку! Получено ${trapDmg} урона. Остаток HP: ${health}/${MAX_HEALTH}`)
}

// 4. Обновленный МАГАЗИН с заменой экипировки и проверкой уровня
function shop(roomNum) {
    alert(`🏪 МАГАЗИН (Комната №${roomNum})`)
    let shopping = true

    let priceMult = roomNum
    let weaponDmg = 3 + roomNum * 3
    let armorDef = 2 + roomNum * 2

    let weaponCost = 20 * priceMult
    let armorCost = 20 * priceMult
    let potionCost = 10 + (roomNum - 1) * 5

    while (shopping) {
        let buy = prompt(`Обычный Магазин (Ваше золото: ${gold}):\n1 - Зелье лечения [${potionCost} золота]\n2 - Броня ур.${roomNum} (+${armorDef} Броня) [${armorCost} золота]\n3 - Оружие ур.${roomNum} (+${weaponDmg} Урон) [${weaponCost} золота]\n4 - Выйти`)

        if (buy === "1") {
            if (gold >= potionCost) {
                gold -= potionCost
                if (items[0] === "у вас пока нет предметов") items.shift()
                items.push("Зелье лечения")
                alert("Куплено Зелье лечения!")
            } else alert("Не хватает золота!")
        } else if (buy === "2") {
            // Проверка: нельзя купить броню того же или более низкого уровня
            if (currentArmorLevel >= roomNum) {
                alert("❌ У вас уже куплена эта броня!")
            } else if (gold >= armorCost) {
                gold -= armorCost
                // 4. Заменяем показатель брони, а не суммируем
                defender = armorDef
                currentArmorLevel = roomNum
                alert(`Куплена Броня ур.${roomNum}! Защита установлена на ${defender}.`)
            } else {
                alert("Не хватает золота!")
            }
        } else if (buy === "3") {
            // Проверка: нельзя купить оружие того же или более низкого уровня
            if (currentWeaponLevel >= roomNum) {
                alert("❌ У вас уже куплено это или более сильное оружие!")
            } else if (gold >= weaponCost) {
                gold -= weaponCost
                // 4. Заменяем базовый урон (+ прирост), а не суммируем
                damage = 10 + weaponDmg
                currentWeaponLevel = roomNum
                alert(`Куплено Оружие ур.${roomNum}! Общий урон установлен на ${damage}.`)
            } else {
                alert("Не хватает золота!")
            }
        } else if (buy === "4" || buy === null) {
            shopping = false
        }
    }
}

// ТОРГОВЕЦ
function dealer() {
    alert("🧙 Вы встретили Бродячего Торговца! Он предлагает скидки и обмен!")
    let dealing = true
    while (dealing) {
        let buy = prompt(`Бродячий Торговец (Ваше золото: ${gold}):\n1 - Дешёвое зелье лечения [7 золота]\n2 - Обменять 30 HP на 40 Золота\n3 - Выйти`)

        if (buy === "1") {
            if (gold >= 7) {
                gold -= 7
                if (items[0] === "у вас пока нет предметов") items.shift()
                items.push("Зелье лечения")
                alert("Выгодно куплено Зелье лечения за 7 золота!")
            } else alert("Не хватает золота!")
        } else if (buy === "2") {
            if (health > 30) {
                health -= 30
                gold += 40
                alert(`Вы отдали 30 HP кровью и получили 40 золота! (Текущее HP: ${health}/${MAX_HEALTH})`)
            } else alert("У вас слишком мало здоровья для обмена!")
        } else if (buy === "3" || buy === null) {
            dealing = false
        }
    }
}

// СУНДУК
function chest() {
    goldChest = Math.floor((Math.random() * 100) + 15)
    healthItem = Math.floor((Math.random() * 20) + 5)

    let rand = Math.random()
    if (rand < 0.5) {
        gold += goldChest
        alert(`🎁 Вы открыли сундук и нашли ${goldChest} золота!`)
    } else if (rand < 0.8) {
        if (items[0] === "у вас пока нет предметов") items.shift()
        items.push("Зелье лечения")
        alert("🎁 В сундуке нашлось Зелье лечения!")
    } else {
        alert("🎁 Сундук оказался пуст...")
    }
}


// ОСНОВНОЙ ИГРОВОЙ ЦИКЛ ПО КОМНАТАМ И ВЕТКАМ

for (let q = 1; q <= 6; q++) {

    // Сброс счетчика повторов для текущей комнаты
    if (q === 1) {
        room_repeats_left = cycle_1
    } else {
        room_repeats_left = cycle_2
    }

    // БОСС И КОНЦОВКИ В КОМНАТЕ №6
    if (q === 6) {
        alert("🔥 ВХОД К БОССУ: Вы вошли в залу Босса! Предстоит финальная битва!")
        fight("Древний Дракон", 1200, 30, 60, 150, 500, true)

        if (health <= 0) {
            alert("💀 КОНЦОВКА 1: Вы погибли в подземелье...")
        } else if (gold >= 1000) {
            alert(`👑 КОНЦОВКА 3: Вы победили Дракона и вынесли ${gold} золота! Вы сказочно богаты!`)
        } else {
            alert(`⚔️ КОНЦОВКА 2: Вы победили Дракона и выбрались живым! Слава герою!`)
        }
        break
    }

    for (let w = 0; w <= 3; w++) {

        showStatus()

        if (health <= 0) {
            alert("💀 Вы погибли от полученных ран...")
            q = 7
            break
        }

        // Выпадение случайного события по веткам w
        if (w === 0) {
            alert(`🚪 === НАЧАЛО КОМНАТЫ №${q} ===`)

            if (q === 1) {
                chest()
            } else if (q === 2) {
                fight("Гоблин", 75, 9, 17, 20, 50)
            } else if (q === 3) {
                let rnd = Math.random()
                if (rnd < 0.25) fight("Скелет", 105, 11, 21, 30, 75)
                else if (rnd < 0.5) trap()
                else if (rnd < 0.75) dealer()
                else chest()
            } else if (q === 4) {
                let rnd = Math.random()
                if (rnd < 0.5) fight("Орк", 150, 17, 27, 45, 105)
                else if (rnd < 0.6) trap()
                else chest()
            } else if (q === 5) {
                let rnd = Math.random()
                if (rnd < 0.25) fight("Пещерный Тролль", 205, 20, 32, 60, 165)
                else if (rnd < 0.65) trap()
                else if (rnd < 0.75) dealer()
                else chest()
            }
        }
        else if (w === 1) {
            alert(`🧭 === СЕРЕДИНА КОМНАТЫ №${q} ===`)

            if (q === 1) {
                let rnd = Math.random()
                if (rnd < 0.5) chest()
                else dealer()
            } else if (q === 2) {
                let rnd = Math.random()
                if (rnd < 0.25) fight("Гоблин", 75, 9, 17, 20, 50)
                else if (rnd < 0.5) trap()
                else if (rnd < 0.75) dealer()
                else chest()
            } else if (q === 3) {
                let rnd = Math.random()
                if (rnd < 0.25) fight("Скелет", 105, 11, 21, 30, 75)
                else if (rnd < 0.5) trap()
                else if (rnd < 0.75) dealer()
                else chest()
            } else if (q === 4) {
                let rnd = Math.random()
                if (rnd < 0.3) fight("Орк", 150, 17, 27, 45, 105)
                else if (rnd < 0.7) trap()
                else chest()
            } else if (q === 5) {
                let rnd = Math.random()
                if (rnd < 0.25) fight("Пещерный Тролль", 205, 20, 32, 60, 165)
                else if (rnd < 0.5) trap()
                else if (rnd < 0.75) dealer()
                else chest()
            }
        }
        else if (w === 2) {
            alert(`🏁 === КОНЕЦ КОМНАТЫ №${q} ===`)

            if (q === 1) {
                let rnd = Math.random()
                if (rnd < 0.5) chest()
                else dealer()
            } else if (q === 2) {
                let rnd = Math.random()
                if (rnd < 0.25) fight("Гоблин", 75, 9, 17, 20, 50)
                else if (rnd < 0.5) trap()
                else if (rnd < 0.75) dealer()
                else chest()
            } else if (q === 3) {
                let rnd = Math.random()
                if (rnd < 0.25) fight("Скелет", 105, 11, 21, 30, 75)
                else if (rnd < 0.5) trap()
                else if (rnd < 0.75) dealer()
                else chest()
            } else if (q === 4) {
                let rnd = Math.random()
                if (rnd < 0.33) fight("Орк", 150, 17, 27, 45, 105)
                else if (rnd < 0.66) trap()
                else chest()
            } else if (q === 5) {
                let rnd = Math.random()
                if (rnd < 0.25) fight("Пещерный Тролль", 205, 20, 32, 60, 165)
                else if (rnd < 0.5) trap()
                else if (rnd < 0.75) dealer()
                else chest()
            }

            // Выбор в конце исследуемой комнаты
            while (true) {
                choise = prompt(`Пройти ещё раз эту комнату? (Осталось повторов: ${room_repeats_left}) (1)\nМагазин (2)\nИдти дальше (3)`)

                if (choise === '1') {
                    if (room_repeats_left > 0) {
                        room_repeats_left--
                        // 2. Сброс цикла на смену с w = w - 3
                        w = w - 3
                        break
                    } else {
                        alert("❌ У вас больше не осталось повторов для этой комнаты!")
                        while (true) {
                            let subChoice = prompt("Магазин (2)\nИдти дальше (3)")
                            if (subChoice === '2') shop(q)
                            else if (choise === '3') break
                        }
                    }
                } else if (choise === '2') {
                    shop(q)
                } else if (choise === '3') {
                    break
                }
            }
        }
    }
}