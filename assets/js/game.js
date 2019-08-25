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
                }
            }
        })
    }
}
