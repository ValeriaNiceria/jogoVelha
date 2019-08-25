const player1 = 'x'
const player2 = 'o'
var playTime = player1
var gameOver = false

atualizarMostrador()
inicializarCampos()

function atualizarMostrador() {
    if (!gameOver) {
        let playTimeImage = document.getElementsByClassName('playerTime')[0]
        playTimeImage.setAttribute('src', `./assets/img/${playTime}.jpg`)
    }
}

function atualizarJogador() {
    if (playTime == player1) {
        playTime = player2
    } else {
        playTime = player1
    }
}

function inicializarCampos() {
    let campos = document.getElementsByClassName('campo')

    for (let i = 0; i < campos.length; i++) {
        campos[i].addEventListener('click', function() {
            if (!gameOver) {
                if (this.getElementsByTagName('img').length == 0) {
                    this.innerHTML = `<img src="./assets/img/${playTime}.jpg" width="95%">`
                    this.setAttribute('jogada', playTime)
                    atualizarJogador()
                    atualizarMostrador()
                    verificarVencedor()
                }
            }
        })
    }
}

async function verificarVencedor() {
    let vencedor = ''

    let a1 = document.getElementById('a1').getAttribute('jogada')
    let a2 = document.getElementById('a2').getAttribute('jogada')
    let a3 = document.getElementById('a3').getAttribute('jogada')

    let b1 = document.getElementById('b1').getAttribute('jogada')
    let b2 = document.getElementById('b2').getAttribute('jogada')
    let b3 = document.getElementById('b3').getAttribute('jogada')

    let c1 = document.getElementById('c1').getAttribute('jogada')
    let c2 = document.getElementById('c2').getAttribute('jogada')
    let c3 = document.getElementById('c3').getAttribute('jogada')

    if (a1 == a2 && a2 == a3 && a1 != '') {
        vencedor = a1
    } else if (b1 == b2 && b2 == b3 && b1 != '') {
        vencedor = b1
    } else if (c1 == c2 && c2 == c3 && c1 != '') {
        vencedor = c1
    } else if (a1 == b1 && b1 == c1 && a1 != '') {
        vencedor = a1
    } else if (a2 == b2 && b2 == c2 && a2 != '') {
        vencedor = a2
    } else if (a3 == b3 && b3 == c3 && a3 != '') {
        vencedor = a3
    } else if (a1 == b2 && b2 == c3 && a1 != '') {
        vencedor = a1
    } else if (a3 == b2 && b2 == c1 && a3 != '') {
        vencedor = a3
    } 

    if (vencedor != '') {
        gameOver = true
        await sleep(50) 
        alert(`O vencedor foi o: ${vencedor}`)
    }
}

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms)) 
}