// JavaScript part
const resp = document.querySelector('#resposta');
const btn = document.querySelector('#btnSubmit');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let inputPalavra = document.querySelector('#inPalavra').value;
    let palavraInvertida = [];

    for (let i = 0; i < inputPalavra.length; i++) {
        palavraInvertida.push(inputPalavra[i]);
    }

    palavraInvertida.reverse();
    palavraInvertida = palavraInvertida.join('');

    if (inputPalavra === palavraInvertida) {
        console.log('Palindrome');
        resp.textContent = 'Palindrome';
    } else {
        console.log('Not a palindrome');
        resp.textContent = 'Not a palindrome';
    }
});