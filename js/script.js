/* Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per 
i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 
che di 5 stampi “FizzBuzz”. */

/* 
-crea un lopp FOR generando numeri da 1 a 100 e stampali in console
? SE i numeri sono sia multipli 5 che multipli di 3
    °al posto del numero stampa "FizzBuzz"
:? ALTRIMENTI SE il numero è solo divisibile per 3
    °al posto del numeror stampa "Fizz"
:? ALTRIMENTI SE il numero è solo divisibile per 5
    °al posto del numero stampa "Buzz"
: ALTRIMENTI
    °stampa il numero normalmente        


*/

let contenitoreEl = document.getElementById("contenitore")


for (let i = 1; i <= 100; i++) {
    let newEl = document.createElement("div");
    newEl.innerHTML = i;
    contenitoreEl.appendChild(newEl);
     
    

    if  (i % 3 == 0  &&  i % 5 == 0)  {
        
        newEl.innerHTML = "FizzBuzz"
         console.log(newEl.innerHTML);
         newEl.style.backgroundColor = " #f0466f "
         

    } else if ( i % 5 == 0) {
        newEl.innerHTML = "Buzz"
        console.log(newEl.innerHTML)
        newEl.style.backgroundColor = "yellow"

    } else if ( i % 3 == 0) {
        newEl.innerHTML = "Fizz"
        console.log(newEl.innerHTML)
        newEl.style.backgroundColor = " #0cd6a1 "

    } else {

        console.log(newEl.innerHTML) ;
        newEl.style.backgroundColor = " #1389b2 "
    }
}


     

        
    


 
        