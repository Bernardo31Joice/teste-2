let randomNumber =
Math.floor(Math.random() * 10) +1;
let tentativas = 0;

function checkGuess (){
    const userGuess = parseInt(document.getElementById('guess').value);
    tentativas++;

    if(userGuess === randomNumber) {document.getElementById('message').innerText = 'Parabéns, você acertou em ${tentativas} tentativas!';
    } else if (userGuess < randomNumber)
{
document.getElementById('message').innerText = 'Muito baixo! Tente novamente.';
    } else {

document.getElementById('message').innerText = 'Muito alto! Tente novamente.';
    }
}