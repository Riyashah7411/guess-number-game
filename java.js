let randomNumber = parseInt(Math.random() * 100 + 1)
const form = document.querySelector('#subt');
const userinput = document.querySelector('.guessField');
const guesses = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const resultparas = document.querySelector('.resultParas');
let playgame = true;
let prevguess = [];
let numguess = 0;
let p = document.createElement('p');

if(playgame) {
    form.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validate(guess);
    })
}

function validate(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1');
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        prevguess.push(guess);
        if (numguess === 10) {
            displayguess(guess);
            loworhi.innerHTML = `<h2>You are out of guesses!! The number was ${randomNumber}</h2>`;
            endgame();
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    }

}

function displayguess(guess) {
    userinput.value = '';
    guesses.innerHTML += `${guess} ,`;
    numguess++;
    remain.innerHTML = `${10 - numguess}`;
}
function checkguess(guess) {
    if (guess === randomNumber) {
        loworhi.innerHTML = `<h2>You Win!!</h2>`;
        endgame();
    }
    else if (guess < randomNumber) {
        loworhi.innerHTML = `<h2>Value is low</h2>`;
    }
    else {
        loworhi.innerHTML = `<h2>Value is high</h2>`;
    }
}
function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.innerHTML = `<h1 id="NewGame">Start New Game</h1>`;
    resultparas.appendChild(p);
    playgame = false;
    newgame();
}


function newgame() {
    const x = document.querySelector('#NewGame');
    x.addEventListener('click', function (e) {
        numguess = 0;
        loworhi.innerHTML = ''
        guesses.innerHTML = '';
        remain.innerHTML = `${10 - numguess}`;
        userinput.removeAttribute('disabled');
        resultparas.removeChild(p);
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevguess = [];
        playgame = true;
    })

}