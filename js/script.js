const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

let numPC;
let numUser;

window.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        promesa.then(value => {
            juego(value);
        })
    }
});

const randomNum = () => {
    let num = Math.floor(Math.random() * 3) + 1;
    console.log(num)
    return num;
}

const promesa = new Promise ((resolve) => {
    setTimeout(() => {
        numPC = randomNum();
        resolve(numPC);
    }, 5000)
});


const juego = (valor) => {
    numUser = userInput.value;
    if(numUser > 0 && numUser <= 3) {
        result.innerHTML = '';
        let segundos = 5;
        let timer = setInterval(() => {
        countdown.innerHTML = segundos;
        segundos--;
        if(segundos === -1) {
            clearInterval(timer);
            if (numUser == valor) {
                countdown.innerHTML = '';
                result.innerHTML = `
                <h1 class='green'>¡Enhorabuena! Has salvado el mundo.</h1>
                <h1 class='resultado'>Tu número ${numUser} es el mismo que el número ${valor}</h1>
            `}
            else if (numUser !== valor) {
                countdown.innerHTML = '';
                result.innerHTML = `
                <h1 class='red'>¡BOOOOOOM! La bomba ha estallado</h1>
                <h1 class='resultado'>Tu número ${numUser} es diferente al número ${valor}</h1>
                `}
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