//Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// alert ('ciao')

const container = document.getElementById('container');

const mailUtente = prompt('Inserisci la tua e-mail');
// console.log(mailUtente);

    //  controllo se l'utente ha inserito una indirizzo email corretto
const validazione = /^[_a-z0-9+-]+(\.[_a-z0-9+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/;
	if (!validazione.test(mailUtente))
	{
	    alert("L'indirizzo email non è valido!");
	}

    // lista degli indirizzi email che hanno accesso
const accessList = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "fra@gmail.com"];


let sentinella = false;

    // controllo indirizzo email
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
container.innerHTML = "Benvenuto";