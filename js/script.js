const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

let numPC;
let numUser;

window.addEventListener('keydown', e => {
    if(e.key === 'Enter') juego();
});

const randomNum = () => {
    let num = Math.floor(Math.random() * 3);
    return num;
}

const cincoSegundos = new Promise ((resolve) => {
    setTimeout(() => {
        numPC = randomNum()
        resolve(numPC);
    }, 5000);
});

// function countdownRender () {
//     let segundos = 5;
//     setInterval(() => {
//         console.log(segundos);
//         segundos--;
//     }, 1000)
//     if(segundos === 0) {
//         clearInterval(countdownRender);
//         console.log('Times up!')
//     }
// }

const juego = () => {
    numUser = userInput.value;
    console.log(numUser)
    if(numUser > 0 && numUser <= 3) {
    let segundos = 5;
    let timer = setInterval(() => {
        countdown.innerHTML = segundos;
        segundos--;
        if(segundos === 0) {
            clearInterval(timer);
            numPC = randomNum();
            if (numUser == numPC) {
                countdown.innerHTML = '';
                result.innerHTML = `
                <h1 class='green'>¡Enhorabuena! Has salvado el mundo.</h1>
                <h1 class='resultado'>Tu número ${numUser} es el mismo que el número ${numPC}</h1>
                `
            }
            else if (numUser !== numPC) {
                countdown.innerHTML = '';
                result.innerHTML = `
                <h1 class='red'>¡BOOOOOOM! La bomba ha estallado</h1>
                <h1 class='resultado'>Tu número ${numUser} es diferente al número ${numPC}</h1>
                `
            }
        }
    }, 1000)
    }
    else {
        result.innerHTML = `<h1 class='resultado>¡Introduce un número del 1 al 3!</h1>`
    }
};

restart.addEventListener('click', () => {
    location.reload();
});