let health = 100
let gold = 0

let goldChest = 0

const MAX_HEALTH = 100

// бой с боссом
function boss() {
    alert(`Встреча с Боссом!\nУрон: ${40}-${90}`)

    let enemyDmg = Math.floor(Math.random() * (90 - 40 + 1)) + 40

    health -= enemyDmg
    alert(`Босс наносит вам ${enemyDmg} урона! Ваше HP: ${health}/${MAX_HEALTH}`)
}

// бой с монстром
function fight(monsterName, monsterMinDmg, monsterMaxDmg) {
    alert(`Встреча с монстром: ${monsterName}!\nУрон: ${monsterMinDmg}-${monsterMaxDmg}`)

    let enemyDmg = Math.floor(Math.random() * (monsterMaxDmg - monsterMinDmg + 1)) + monsterMinDmg

    health -= enemyDmg
    alert(`${monsterName} наносит вам ${enemyDmg} урона! Ваше HP: ${health}/${MAX_HEALTH}`)
}

// фонтан лечения
function fountain() {
    let fountainHealth = Math.floor(Math.random() * 12) + 7
    health += fountainHealth

     alert(`Вы наткнулись на лечебный фонтан, вы получили + ${fountainHealth} HP!`)
}


// сундук
function chest() {
    goldChest = Math.floor((Math.random() * 100) + 15)
    healthItem = Math.floor((Math.random() * 20) + 5)

    let rand = Math.random()
    if (rand < 0.5) {
        gold += goldChest
        alert(`Вы открыли сундук и нашли ${goldChest} золота!`)
    }
    else {
        alert("Сундук оказался пуст...")
    }
}

const death = (a,b,c) => {
    if (b === 10 && c > 0) {
        alert(`Вы пережили босса и выбрались из подземелья!\nЗолото: ${a}`)
    }
    else {
        alert(`Ваша жизнь на нуле! Вы проиграли!\nЗолото: ${a}\nСколько пройдено уровней: ${b}`)
    }
}

//рекурсия

function game(numberRoom){
    alert(`Комната №${numberRoom}`)

    alert(`Ты:\n------------\nЗдоровье: ${health}/${MAX_HEALTH}\nЗолото: ${gold}`)

    let rnd = Math.random()

    if (rnd < 0.5) fight("Монстр", 5, 15)
    else if (rnd < 0.5) fountain()
    else if (rnd < 0.5) alert("В конмнате ничего не оказалось...")
    else chest()

    if (health <= 0) {
        return death(gold, numberRoom, health)
    }
    if (numberRoom === 10) {
        boss()
        return death(gold,numberRoom,health)
    }

    numberRoom = numberRoom + 1
    game(numberRoom)
}

game()

// comment