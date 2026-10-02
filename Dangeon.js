let health = 150
let experience = 0
let gold = 0

let damage = 10
let defender = 0
let items = ["у вас пока нет предметов"]

let choise = 0
let cycle_1 = 2
let cycle_2 = 5
let healthItem = 0
let goldChest = 0

const MAX_HEALTH = 150

let currentWeaponLevel = 0
let currentArmorLevel = 0

let hasBossArmor = false
let hasBossWeapon = false
let hasClairvoyantOrb = false

let room_repeats_left = 0

// инвентарь
function showStatus() {
    if (health > MAX_HEALTH) {
        health = MAX_HEALTH
    }

    let effectiveDamage = (damage * (1 + experience * 0.00001)).toFixed(2)

    while (true) {
        gamer = prompt(`Ты:\n------------\nЗдоровье: ${health}/${MAX_HEALTH}\nОпыт: ${experience}\nЗолото: ${gold}\nУрон: ${Number(effectiveDamage)}\n------------\nИнвентарь: (нажмите на i, либо нажмите Enter для продолжения)`)

        if (gamer === 'i' || gamer === 'ш') {
            let gamer_1 = '0'
            while (true) {
                let armorDisplay = hasBossArmor ? "Броня Босса (-85% урона)" : defender
                gamer_1 = prompt(`Инвентарь:\n------------\nЗдоровье: ${health}/${MAX_HEALTH}\nУрон: ${effectiveDamage}\nЗащита: ${armorDisplay}\nПредметы: ${items.join(", ")}\n\n(нажмите на s чтобы вылечиться) (нажмите на Enter для выхода)`)
                if (gamer_1 === 's' || gamer_1 === 'ы' || gamer_1 === 'і') {
                    let pIndex = items.findIndex(item => item.includes("Зелье"))
                    if (pIndex !== -1) {
                        health += 25
                        if (health > MAX_HEALTH) health = MAX_HEALTH
                        alert(`Вы выпили ${items[pIndex]} и восстановили 25 HP! Текущее HP: ${health}/${MAX_HEALTH}`)
                        items.splice(pIndex, 1)
                        if (items.length === 0) items.push("у вас пока нет предметов")
                    } else {
                        alert("У вас нет зелий!")
                    }
                }
                else if (gamer_1 === '') {
                    break
                }
            }
        }
        else {
            break
        }
    }
}

// бой с монстром
function fight(monsterName, monsterHp, monsterMinDmg, monsterMaxDmg, expReward, goldReward, isBoss = false) {
    alert(`Встреча с монстром: ${monsterName}!\nHP: ${monsterHp}, Урон: ${monsterMinDmg}-${monsterMaxDmg}`)

    let finalExpReward = hasClairvoyantOrb ? expReward * 2 : expReward

    while (monsterHp > 0 && health > 0) {
        let currentDamageWithExp = damage * (1 + experience * 0.00001)

        let talkChance = Math.min(100, 5 + experience * 0.1)

        let action = prompt(`Бой с ${monsterName}!\nТвое HP: ${health}/${MAX_HEALTH} | HP Монстра: ${monsterHp}\n\n1 - Атаковать\n2 - Выпить зелье (если есть)\n3 - Убежать\n4 - Переговоры (Шанс: ${talkChance.toFixed(1)}%)`)

        if (action === '1') {
            let curDmg = currentDamageWithExp
            if (Math.random() < 0.2) {
                curDmg = curDmg * 1.8
                alert("Критический удар!")
            }
            curDmg = Math.floor(curDmg)
            monsterHp -= curDmg
            alert(`Вы нанесли ${curDmg} урона!`)

            if (monsterHp <= 0) {
                alert(`Вы победили ${monsterName}!`)
                experience += finalExpReward

                let dropLootMessage = ""
                if (Math.random() < 0.5) {
                    gold += goldReward
                    dropLootMessage = `Получено золота: ${goldReward}`
                } else {
                    let potionCount = Math.floor(Math.random() * 4) + 3 // от 3 до 6
                    if (items[0] === "у вас пока нет предметов") items.shift()
                    for (let p = 0; p < potionCount; p++) {
                        items.push("Зелье лечения")
                    }
                    dropLootMessage = `Выпали предметы: Зелье лечения x${potionCount}`
                }

                alert(`Победа! ${dropLootMessage}\nПолучено опыта: ${finalExpReward}${hasClairvoyantOrb ? " (x2 Шар Ясновидящего)" : ""}`)
                return "win"
            }
        } else if (action === '2' || action === 's' || action === 'ы' || action === 'і') {
            let pIndex = items.findIndex(item => item.includes("Зелье"))
            if (pIndex !== -1) {
                health += 25
                if (health > MAX_HEALTH) health = MAX_HEALTH
                alert(`Вы выпили ${items[pIndex]} и восстановили 25 HP! Текущее HP: ${health}/${MAX_HEALTH}`)
                items.splice(pIndex, 1)
                if (items.length === 0) items.push("у вас пока нет предметов")
            } else {
                alert("У вас нет зелий!")
                continue
            }
        } else if (action === '3') {
            if (isBoss) {
                alert("От босса нельзя сбежать!")
            } else {
                if (Math.random() < 0.5) {
                    alert("Вы успешно сбежали!")
                    return "escaped"
                } else {
                    alert("Побег не удался!")
                }
            }
        } else if (action === '4') {
            if (isBoss) {
                alert("Переговоры с боссом проходят особым образом!")
                return "boss_talk"
            }

            let roll = Math.random() * 100
            if (roll <= talkChance) {
                let talkExp = finalExpReward * 2
                let talkGold = Math.floor(goldReward / 2)
                experience += talkExp
                gold += talkGold
                alert(`ПЕРЕГОВОРЫ УСПЕШНЫ!\nВы убедили ${monsterName} разойтись миром.\nПолучено опыта: ${talkExp} (в 2 раза больше!), золота: ${talkGold} (в 2 раза меньше).`)
                return "talk_success"
            } else {
                alert(`Переговоры провалились! ${monsterName} разозлился и нападает!`)
            }
        }

        let enemyDmg = Math.floor(Math.random() * (monsterMaxDmg - monsterMinDmg + 1)) + monsterMinDmg
        let finalDmg = 0

        if (hasBossArmor) {
            finalDmg = Math.max(1, Math.floor(enemyDmg * 0.15))
        } else {
            finalDmg = Math.max(1, enemyDmg - defender)
        }

        health -= finalDmg
        alert(`${monsterName} наносит вам ${finalDmg} урона! Ваше HP: ${health}/${MAX_HEALTH}`)
    }
}

// ловушка
function trap() {
    let trapType = Math.random() < 0.5 ? 1 : 2

    if (trapType === 1) {
        alert("Вы попали в МАТЕМАТИЧЕСКУЮ ловушку!\nЧтобы спастись, решите 3 примера подряд.")

        let operations = ["+", "-", "*"]

        for (let i = 1; i <= 3; i++) {
            let num1 = Math.floor(Math.random() * 15) + 1
            let num2 = Math.floor(Math.random() * 15) + 1
            let op = operations[Math.floor(Math.random() * operations.length)]

            let correctAnswer = 0
            if (op === "+") correctAnswer = num1 + num2
            else if (op === "-") correctAnswer = num1 - num2
            else if (op === "*") correctAnswer = num1 * num2

            let userAnswer = prompt(`Пример ${i}/3:\nСколько будет ${num1} ${op} ${num2}?`)

            if (userAnswer !== null && Number(userAnswer.trim()) === correctAnswer) {
                let expGained = Math.floor(Math.random() * 16) + 15
                if (hasClairvoyantOrb) expGained *= 2
                experience += expGained
                alert(`Верно! Получено ${expGained} опыта.${hasClairvoyantOrb ? " (x2 от Шара)" : ""}`)
            } else {
                let trapDmg = Math.floor(Math.random() * 5) + 2
                health -= trapDmg
                alert(`Ошибка! Правильный ответ был: ${correctAnswer}.\nПолучено ${trapDmg} урона! Остаток HP: ${health}/${MAX_HEALTH}`)
            }

            if (health <= 0) break
        }
    } else {
        alert("Вы попали в УГАДЫВАТЕЛЬНУЮ ловушку!\nЛовушка загадала число от 1 до 3. Угадайте его, чтобы избежать урона.")

        let targetNumber = Math.floor(Math.random() * 3) + 1
        let userGuess = prompt("Выберите число от 1 до 3:")

        if (userGuess !== null && Number(userGuess.trim()) === targetNumber) {
            let expGained = Math.floor(Math.random() * 10) + 10
            if (hasClairvoyantOrb) expGained *= 2
            experience += expGained
            alert(`Поздравляем! Вы угадали число (${targetNumber}) и обошли ловушку!\nПолучено ${expGained} опыта.${hasClairvoyantOrb ? " (x2 от Шара)" : ""}`)
        } else {
            let trapDmg = Math.floor(Math.random() * 11) + 10
            health -= trapDmg
            alert(`Не угадали! Было загадано число ${targetNumber}.\nЛовушка сработала и нанесла ${trapDmg} урона! Остаток HP: ${health}/${MAX_HEALTH}`)
        }
    }
}

// магазин
function shop(roomNum) {
    alert(`МАГАЗИН (Комната №${roomNum})`)
    let shopping = true

    let priceMult = roomNum
    let weaponDmg = 3 + roomNum * 3
    let armorDef = 2 + roomNum * 2

    let weaponCost = 20 * priceMult
    let armorCost = 20 * priceMult
    let potionCost = 10 + (roomNum - 1) * 5

    while (shopping) {
        let armorText = (currentArmorLevel >= roomNum) ? "[ПРОДАНО]" : `[${armorCost} золота]`
        let weaponText = (currentWeaponLevel >= roomNum) ? "[ПРОДАНО]" : `[${weaponCost} золота]`

        let orbText = hasClairvoyantOrb ? "[ПРОДАНО]" : "[300 золота]"
        let bossArmorText = hasBossArmor ? "[ПРОДАНО]" : (roomNum === 5 ? "[500 золота]" : "[Цель: копить 500 золота]")
        let bossWeaponText = hasBossWeapon ? "[ПРОДАНО]" : (roomNum === 5 ? "[500 золота]" : "[Цель: копить 500 золота]")

        let buy = prompt(`Магазин (Ваше золото: ${gold}):\n1 - Зелье лечения [${potionCost} золота]\n2 - Броня ур.${roomNum} (+${armorDef} Броня) ${armorText}\n3 - Оружие ур.${roomNum} (+${weaponDmg} Урон) ${weaponText}\n4 - 🔮 Шар ясновидящего (Опыт x2) ${orbText}\n5 - 🛡️ Броня для босса (85% защиты) ${bossArmorText}\n6 - ⚔️ Оружие для босса (50 урона) ${bossWeaponText}\n7 - Выйти`)

        if (buy === '1') {
            if (gold >= potionCost) {
                gold -= potionCost
                if (items[0] === "у вас пока нет предметов") items.shift()
                items.push("Зелье лечения")
                alert("Куплено Зелье лечения!")
            } else alert("Не хватает золота!")
        } else if (buy === '2') {
            if (currentArmorLevel >= roomNum) {
                alert("У вас уже куплена эта броня! [ПРОДАНО]")
            } else if (gold >= armorCost) {
                gold -= armorCost
                defender = armorDef
                currentArmorLevel = roomNum
                alert(`Куплена Броня ур.${roomNum}! Защита установлена на ${defender}.`)
            } else alert("Не хватает золота!")
        } else if (buy === '3') {
            if (currentWeaponLevel >= roomNum) {
                alert("У вас уже куплено это оружие! [ПРОДАНО]")
            } else if (gold >= weaponCost) {
                gold -= weaponCost
                damage = 10 + weaponDmg
                currentWeaponLevel = roomNum
                alert(`Куплено Оружие ур.${roomNum}! Общий урон установлен на ${damage}.`)
            } else alert("Не хватает золота!")
        } else if (buy === '4') {
            if (hasClairvoyantOrb) {
                alert("Вы уже приобрели Шар ясновидящего!")
            } else if (gold >= 300) {
                gold -= 300
                hasClairvoyantOrb = true
                if (items[0] === "у вас пока нет предметов") items.shift()
                items.push("Шар ясновидящего")
                alert("Куплен Шар ясновидящего! Весь получаемый опыт теперь удваивается!")
            } else alert("Не хватает золота! Нужно 300 монет.")
        } else if (buy === '5') {
            if (roomNum < 5) {
                alert("Броня для босса недоступна в этой комнате! Накапливайте 500 золота для покупки в 5-й комнате.")
            } else if (hasBossArmor) {
                alert("Броня для босса уже куплена!")
            } else if (gold >= 500) {
                gold -= 500
                hasBossArmor = true
                if (items[0] === "у вас пока нет предметов") items.shift()
                items.push("Броня для босса")
                alert("Куплена Броня для босса! Защищает на 85% от любого урона!")
            } else alert("Не хватает золота! Нужно 500 монет.")
        } else if (buy === '6') {
            if (roomNum < 5) {
                alert("Оружие для босса недоступно в этой комнате! Накапливайте 500 золота для покупки в 5-й комнате.")
            } else if (hasBossWeapon) {
                alert("Оружие для босса уже куплено!")
            } else if (gold >= 500) {
                gold -= 500
                hasBossWeapon = true
                damage = 50
                if (items[0] === "у вас пока нет предметов") items.shift()
                items.push("Оружие для босса")
                alert("Куплено Оружие для босса! Базовый урон установлен на 50!")
            } else alert("Не хватает золота! Нужно 500 монет.")
        } else if (buy === '7' || buy === null) {
            shopping = false
        }
    }
}

// торговец
function dealer() {
    alert("Вы встретили Бродячего Торговца!")
    let dealing = true
    while (dealing) {
        let buy = prompt(`Бродячий Торговец (Ваше золото: ${gold}):\n1 - Дешёвое зелье лечения [7 золота]\n2 - Обменять 30 HP на 40 Золота\n3 - Выйти`)

        if (buy === '1') {
            if (gold >= 7) {
                gold -= 7
                if (items[0] === "у вас пока нет предметов") items.shift()
                items.push("Зелье лечения")
                alert("Выгодно куплено Зелье лечения за 7 золота!")
            } else alert("Не хватает золота!")
        } else if (buy === '2') {
            if (health > 30) {
                health -= 30
                gold += 40
                alert(`Вы отдали 30 HP кровью и получили 40 золота! (Текущее HP: ${health}/${MAX_HEALTH})`)
            } else alert("У вас слишком мало здоровья для обмена!")
        } else if (buy === '3' || buy === null) {
            dealing = false
        }
    }
}

// сундук
function chest() {
    goldChest = Math.floor((Math.random() * 100) + 15)
    healthItem = Math.floor((Math.random() * 20) + 5)

    let rand = Math.random()
    if (rand < 0.5) {
        gold += goldChest
        alert(`Вы открыли сундук и нашли ${goldChest} золота!`)
    } else if (rand < 0.8) {
        if (items[0] === "у вас пока нет предметов") items.shift()
        items.push("Зелье лечения")
        alert("В сундуке нашлось Зелье лечения!")
    } else {
        alert("Сундук оказался пуст...")
    }
}

// основная игра

for (let q = 1; q <= 6; q++) {

    if (q === 1) {
        room_repeats_left = cycle_1
    } else {
        room_repeats_left = cycle_2
    }

    if (q === 6) {
        alert("🔥 ВХОД К БОССУ: Вы вошли в залу Босса! Предстоит финальная битва!")

        let bossResult = fight("Древний Дракон", 1200, 30, 40, 150, 500, true)

        if (bossResult === "boss_talk") {
            if (experience >= 900) {
                alert("📜 КОНЦОВКА 4 (ДИПЛОМАТИЯ): Дракон потрясён вашей мудростью и богатым жизненным опытом! Он пощадил вас, и вы заключили вечный мир с подземным царством!")
                break
            } else if (experience >= 500 && gold >= 1000) {
                gold -= 1000
                alert("💰 КОНЦОВКА 5 (ОТКУП ОТ ДРАКОНА): Вы проявили красноречие и откупились от Дракона 1000 монет! Дракон принял дань и отпустил вас с миром.")
                break
            } else {
                alert("❌ Дракон отказался с вами разговаривать! Ваш опыт слишком мал (нужно хотя бы 900 опыта, либо 500 опыта и 1000 золота). Переговоры сорваны, начинается обычный бой!")

                let bossHp = 1200
                while (bossHp > 0 && health > 0) {
                    let currentDamageWithExp = damage * (1 + experience * 0.00001)
                    let action = prompt(`Бой с Древним Драконом!\nТвое HP: ${health}/${MAX_HEALTH} | HP Дракона: ${bossHp}\n\n1 - Атаковать\n2 - Выпить зелье`)

                    if (action === "1") {
                        let curDmg = currentDamageWithExp
                        if (Math.random() < 0.2) curDmg *= 1.8
                        curDmg = Math.floor(curDmg)
                        bossHp -= curDmg
                        alert(`Вы нанесли ${curDmg} урона!`)
                    } else if (action === "2" || action === "s") {
                        let pIndex = items.findIndex(item => item.includes("Зелье"))
                        if (pIndex !== -1) {
                            health += 25
                            if (health > MAX_HEALTH) health = MAX_HEALTH
                            items.splice(pIndex, 1)
                            if (items.length === 0) items.push("у вас пока нет предметов")
                            alert("🧪 Вы выпили Зелье лечения!")
                        } else alert("У вас нет зелий!")
                    }

                    if (bossHp <= 0) break

                    let enemyDmg = Math.floor(Math.random() * (40 - 30 + 1)) + 30
                    let finalDmg = hasBossArmor ? Math.max(1, Math.floor(enemyDmg * 0.15)) : Math.max(1, enemyDmg - defender)
                    health -= finalDmg
                    alert(`👹 Дракон наносит ${finalDmg} урона!`)
                }
            }
        }

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
            alert("Вы погибли от полученных ран...")
            q = 7
            break
        }

        if (w === 0) {
            alert(`=== НАЧАЛО КОМНАТЫ №${q} ===`)

            if (q === 1) {
                chest()
            } else if (q === 2) {
                fight("Гоблин", 75, 9, 17, 10, 50)
            } else if (q === 3) {
                let rnd = Math.random()
                if (rnd < 0.35) fight("Скелет", 105, 11, 21, 15, 75)
                else if (rnd < 0.60) trap()
                else if (rnd < 0.80) dealer()
                else chest()
            } else if (q === 4) {
                let rnd = Math.random()
                if (rnd < 0.50) fight("Орк", 150, 17, 27, 25, 105)
                else if (rnd < 0.75) trap()
                else chest()
            } else if (q === 5) {
                let rnd = Math.random()
                if (rnd < 0.35) fight("Пещерный Тролль", 205, 20, 32, 30, 165)
                else if (rnd < 0.60) trap()
                else if (rnd < 0.80) dealer()
                else chest()
            }
        }
        else if (w === 1) {
            alert(`=== СЕРЕДИНА КОМНАТЫ №${q} ===`)

            if (q === 1) {
                let rnd = Math.random()
                if (rnd < 0.5) chest()
                else dealer()
            } else if (q === 2) {
                let rnd = Math.random()
                if (rnd < 0.35) fight("Гоблин", 75, 9, 17, 10, 50)
                else if (rnd < 0.60) trap()
                else if (rnd < 0.80) dealer()
                else chest()
            } else if (q === 3) {
                let rnd = Math.random()
                if (rnd < 0.35) fight("Скелет", 105, 11, 21, 15, 75)
                else if (rnd < 0.60) trap()
                else if (rnd < 0.80) dealer()
                else chest()
            } else if (q === 4) {
                let rnd = Math.random()
                if (rnd < 0.50) fight("Орк", 150, 17, 27, 25, 105)
                else if (rnd < 0.75) trap()
                else chest()
            } else if (q === 5) {
                let rnd = Math.random()
                if (rnd < 0.35) fight("Пещерный Тролль", 205, 20, 32, 30, 165)
                else if (rnd < 0.60) trap()
                else if (rnd < 0.80) dealer()
                else chest()
            }
        }
        else if (w === 2) {
            alert(`=== КОНЕЦ КОМНАТЫ №${q} ===`)

            if (q === 1) {
                let rnd = Math.random()
                if (rnd < 0.5) chest()
                else dealer()
            } else if (q === 2) {
                let rnd = Math.random()
                if (rnd < 0.35) fight("Гоблин", 75, 9, 17, 10, 50)
                else if (rnd < 0.60) trap()
                else if (rnd < 0.80) dealer()
                else chest()
            } else if (q === 3) {
                let rnd = Math.random()
                if (rnd < 0.35) fight("Скелет", 105, 11, 21, 15, 75)
                else if (rnd < 0.60) trap()
                else if (rnd < 0.80) dealer()
                else chest()
            } else if (q === 4) {
                let rnd = Math.random()
                if (rnd < 0.50) fight("Орк", 150, 17, 27, 25, 105)
                else if (rnd < 0.75) trap()
                else chest()
            } else if (q === 5) {
                let rnd = Math.random()
                if (rnd < 0.35) fight("Пещерный Тролль", 205, 20, 32, 30, 165)
                else if (rnd < 0.60) trap()
                else if (rnd < 0.80) dealer()
                else chest()
            }

            while (true) {
                choise = prompt(`Пройти ещё раз эту комнату? (Осталось повторов: ${room_repeats_left}) (1)\nМагазин (2)\nИдти дальше (3)`)

                if (choise === '1') {
                    if (room_repeats_left > 0) {
                        room_repeats_left--
                        w = w - 3
                        break
                    } else {
                        alert("У вас больше не осталось повторов для этой комнаты!")
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