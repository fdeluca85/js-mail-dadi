//Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// alert ("ciao");

    // let giocatore = Math.round(Math.random()*5+1);
    // document.getElementById("giocatore").innerHTML ="Il giocatore ha ottenuto " + giocatore;
    // console.log(giocatore);

    
	// let pc = Math.round(Math.random()*5+1);
    // document.getElementById("pc").innerHTML ="Il pc ha ottenuto " + pc;
    // console.log(pc);

    
    const giocatore = "giocatore"
    const pc = "pc"


    const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
        console.log("numero del giocatore " + numeroGiocatore);
        
        document.getElementById("giocatore").innerHTML ="Il giocatore ha ottenuto " + numeroGiocatore;

        const numeroPc = Math.floor(Math.random() * 6) + 1;    
        console.log("numero del PC " + numeroPc);
        document.getElementById("pc").innerHTML ="Il Pc ha ottenuto " + numeroPc;

    let gioco        


        if (numeroGiocatore === numeroPc) {
            console.log("pareggio");
        }

        else if (numeroGiocatore > numeroPc) {
            console.log("giocatore vince");
        }

        else {
            console.log("pc vince");
        }
    