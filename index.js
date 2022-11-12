const main = document.getElementById('main')
const root = document.querySelector(':root')
const gameArea = document.querySelector('.gameArea')
const playersBtn = document.getElementById('playersButton')
const restartBtn = document.querySelector('#restartBtn')
let player01 = 'X'
let player02 = 'O'

let playTime = player01
let gameOver = false

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})


playersBtn.addEventListener('click', function () {
    if (document.getElementById('playerName01').value === '' || document.getElementById('playerName02').value === '') {
        alert("Digite o nome dos jogadores para iniciar o jogo")
    } else {
        gameArea.style.setProperty('display', "block")
    }

})

updatePlayTime()
gameIniciate()

function updatePlayTime() {
    if (gameOver) {
        return
    }

    if (playTime === player01) {
        let player = document.querySelectorAll("div#mostrador  span")[0]
        player.innerText = player01 
    } else {
        let player = document.querySelectorAll("div#mostrador  span")[0]
        player.innerText = player02 
    }
}

function gameIniciate() {
    let spaces = document.getElementsByClassName('gameCollumn')
    for (let index = 0; index < spaces.length; index++) {
        spaces[index].addEventListener('click', function () {
            if (gameOver) { return }

            if (this.innerText.length === 0) {
                if (playTime == player01) {
                    this.innerText = 'X'
                    this.setAttribute('jogada', player01)
                    playTime = player02
                } else {
                    this.innerText = 'O'
                    this.setAttribute('jogada', player02)
                    playTime = player01
                }
                updatePlayTime()
                countVictory()
                restartGame()
            }
        })

    }
}

async function countVictory() {
    let a1 = document.getElementById('0-1').getAttribute('jogada')
    let a2 = document.getElementById('0-2').getAttribute('jogada')
    let a3 = document.getElementById('0-3').getAttribute('jogada')

    let b1 = document.getElementById('1-1').getAttribute('jogada')
    let b2 = document.getElementById('1-2').getAttribute('jogada')
    let b3 = document.getElementById('1-3').getAttribute('jogada')

    let c1 = document.getElementById('2-1').getAttribute('jogada')
    let c2 = document.getElementById('2-2').getAttribute('jogada')
    let c3 = document.getElementById('2-3').getAttribute('jogada')

    let name1 = document.getElementById('playerName01').value
    let name2 = document.getElementById('playerName02').value

    let winner = "";

    if (a1 === player01 && a2 === player01 && a3 === player01) {
        winner = player01 + " - " + name1
        document.getElementById('0-1').classList.add('win')
        document.getElementById('0-2').classList.add('win')
        document.getElementById('0-3').classList.add('win')
    } else if (a1 === player02 && a2 === player02 && a3 === player02) {
        winner = player02 + " - " + name2
        document.getElementById('0-1').classList.add('win')
        document.getElementById('0-2').classList.add('win')
        document.getElementById('0-3').classList.add('win')
    } else if (b1 === player01 && b2 === player01 && b3 === player01) {
        winner = player01 + " - " + name1
        document.getElementById('1-1').classList.add('win')
        document.getElementById('1-2').classList.add('win')
        document.getElementById('1-3').classList.add('win')
    } else if (b1 === player02 && b2 === player02 && b3 === player02) {
        winner = player02 + " - " + name2
        document.getElementById('1-1').classList.add('win')
        document.getElementById('1-2').classList.add('win')
        document.getElementById('1-3').classList.add('win')
    } else if (c1 === player01 && c2 === player01 && c3 === player01) {
        winner = player01 + " - " + name1
        document.getElementById('2-1').classList.add('win')
        document.getElementById('2-2').classList.add('win')
        document.getElementById('2-3').classList.add('win')
    } else if (c1 === player02 && c2 === player02 && c3 === player02) {
        winner = player02 + " - " + name2
        document.getElementById('2-1').classList.add('win')
        document.getElementById('2-2').classList.add('win')
        document.getElementById('2-3').classList.add('win')
    } else if (a1 === player01 && b1 === player01 && c1 === player01) {
        winner = player01 + " - " + name1
        document.getElementById('0-1').classList.add('win')
        document.getElementById('1-1').classList.add('win')
        document.getElementById('2-1').classList.add('win')
    } else if (a1 === player02 && b1 === player02 && c1 === player02) {
        winner = player02 + " - " + name2
        document.getElementById('0-1').classList.add('win')
        document.getElementById('1-1').classList.add('win')
        document.getElementById('2-1').classList.add('win')
    } else if (a2 === player01 && b2 === player01 && c2 === player01) {
        winner = player01 + " - " + name1
        document.getElementById('0-2').classList.add('win')
        document.getElementById('1-2').classList.add('win')
        document.getElementById('2-2').classList.add('win')
    } else if (a2 === player02 && b2 === player02 && c2 === player02) {
        winner = player02 + " - " + name2
        document.getElementById('0-2').classList.add('win')
        document.getElementById('1-2').classList.add('win')
        document.getElementById('2-2').classList.add('win')
    } else if (a3 === player01 && b3 === player01 && c3 === player01) {
        winner = player01 + " - " + name1
        document.getElementById('0-3').classList.add('win')
        document.getElementById('1-3').classList.add('win')
        document.getElementById('2-3').classList.add('win')
    } else if (a3 === player02 && b3 === player02 && c3 === player02) {
        winner = player02 + " - " + name2
        document.getElementById('0-3').classList.add('win')
        document.getElementById('1-3').classList.add('win')
        document.getElementById('2-3').classList.add('win')
    } if (a1 === player01 && b2 === player01 && c3 === player01) {
        winner = player01 + " - " + name1
        document.getElementById('0-1').classList.add('win')
        document.getElementById('1-2').classList.add('win')
        document.getElementById('2-3').classList.add('win')
    } else if (a1 === player02 && b2 === player02 && c3 === player02) {
        winner = player02 + " - " + name2
        document.getElementById('0-1').classList.add('win')
        document.getElementById('1-2').classList.add('win')
        document.getElementById('2-3').classList.add('win')
    } else if (a3 === player01 && b2 === player01 && c1 === player01) {
        winner = player01 + " - " + name1
        document.getElementById('0-3').classList.add('win')
        document.getElementById('2-2').classList.add('win')
        document.getElementById('3-1').classList.add('win')
    } else if (a3 === player02 && b2 === player02 && c1 === player02) {
        winner = player02 + " - " + name2
        document.getElementById('0-3').classList.add('win')
        document.getElementById('2-2').classList.add('win')
        document.getElementById('3-1').classList.add('win')
    }

    if (winner != "") {
        gameOver = true

        await sleep(50)

        alert("O ganhador foi o: " + winner)
    } else if ((a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "" && winner == "")) {

        await sleep(50)
        alert("empate")

    }

}

function restartGame() {
    restartBtn.addEventListener('click', function () {
        window.location.assign('index.html')
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}








