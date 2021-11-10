//Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// alert ('ciao')


const mailUtente = prompt('Inserisci la tua e-mail');
// console.log(mailUtente);

const accessList = ["pippo", "pluto", "paperino"];

let sentinella = false;

for (let i = 0; i < accessList.length; i++){

    if(mailUtente == accessList[i]) {sentinella = true;
        // console.log("benvenuto " + mailUtente);
    } 
}  
if (sentinella) {
    console.log('Benvenuto ' + mailUtente );
} else {
    console.log('non in lista');
}
   
