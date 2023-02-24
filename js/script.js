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

let numero;

for (let i = 1; i <= 100; i++) {
    
    numero = i ;
    console.log(numero) ;

    if  (i % 3 == 0  &&  i % 5 == 0)  {
        
        numero = "fizzbuzz"
        console.log(numero);
         

    } else if ( i % 5 == 0) {


    } else if ( i % 3 == 0) {


    } else {


    }
}
     
        
    


 
        