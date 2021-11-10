//Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// alert ("ciao");

    // let giocatore = Math.round(Math.random()*5+1);
    // document.getElementById("giocatore").innerHTML ="Il giocatore ha ottenuto " + giocatore;
    // console.log(giocatore);

    
	// let pc = Math.round(Math.random()*5+1);
    // document.getElementById("pc").innerHTML ="Il pc ha ottenuto " + pc;
    // console.log(pc);

    
    // const giocatore = "giocatore"
    // const pc = "pc"

    // pulsante per iniziare il gioco
function lancio(){
    
        // numero random per il giocatore
    const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
       
    document.getElementById("giocatore").innerHTML ="Il giocatore ha ottenuto " + numeroGiocatore;
    // console.log("numero del giocatore " + numeroGiocatore);


        // numero random per il PC
    const numeroPc = Math.floor(Math.random() * 6) + 1;    
    
    document.getElementById("pc").innerHTML ="Il Pc ha ottenuto " + numeroPc;
    // console.log("numero del PC " + numeroPc);

    //risultato
let gioco     

    if (numeroGiocatore === numeroPc) {

        gioco = "Pareggio"
        // console.log("Pareggio");
    }else if (numeroGiocatore > numeroPc) {
        gioco = "Vince il giocatore"
        // console.log("giocatore vince");
    }else {
        gioco = "Vince il PC"
        // console.log("pc vince");
    }
    document.getElementById("gioco").innerHTML = gioco;
}