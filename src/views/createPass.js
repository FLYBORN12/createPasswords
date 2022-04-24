'use strict'

// configuration inital
let charactersLength;
const configuration = {
    noNumbers: false,
    noSymbols: false,
    noCaps: false,
    letters: false,
}

// character to use
const characters = {
    noNumbers: ['0','1','2','3','4','5','6','7','8','9'],
    noSymbols: ['!','*','[','{','}',']','%','$','?','¿','¡','#'],
    letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','@'],
    noCaps: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

}


// Get control of bottom and listen when user do click
const btn = document.getElementById('createPass')
btn.addEventListener('click', e => {
    configuration.noNumbers = document.getElementById('withOutNumbers').checked;
    configuration.noSymbols = document.getElementById('withOutSymbols').checked;
    configuration.noCaps = document.getElementById('withOutCaps').checked;
    charactersLength = document.getElementById('quantityCharacters').value;

    console.log(configuration)
    
    createPassword(charactersLength)
})

// fuction to create the password
function createPassword(numberCharacters){
    let x = [];
    let password = ''
    for (const element in configuration) {
        if (!configuration[element]) {
           x = x.concat(characters[element])
        }
    }
    for(let i = 0; i <= numberCharacters; i++){
        password = password + x[Math.ceil(Math.random()*x.length-1)];
    }
    printAndCopyPassword(password)
}

// funtion print and copy password
function printAndCopyPassword(response){
    // print
    const outputPassword = document.getElementById('outputPass');
    outputPassword.value = response;
    // copy
    outputPassword.addEventListener('click',(e) => {
        outputPassword.select();
        document.execCommand('copy')
        alert('Contraseña copiada!')
    })
}