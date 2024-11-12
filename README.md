ENGLISH


Here’s the translation in English:

---

The code executed is purely TypeScript. Using the command configured in `package.json`, `npm run deploy` converts the TypeScript code to JavaScript.

It is displayed exclusively in the console.

The `Transport` class is defined with three variables:
`scooter1`, `electricCar1`, and `scooter3`.

Three users are defined, each with a unique name, surname, email address, and preferred payment method.

The city of Arezzo is defined.

First, the three specified vehicles are added to the list of available vehicles in the city of Arezzo.

The `verifyAvailable` function is used to visually indicate whether a vehicle is available on the presumed map, for instance by changing the border color in a future implementation. For example, if a vehicle is available, it might show `{border: green}`, and if it is unavailable, `{border: red}`.

When `userN.bookTransport(vehicleN)` is called, it means that the specified user is attempting to book the vehicle.

If `user1.bookTransport(scooter1)` is called, it will return:
"Congratulations Francesco Sandali, you have booked a scooter with ID: 4, and paid with a credit card."

If `user2` then tries to book the same vehicle with `user2.bookTransport(scooter1);`, it will return:
"Hi Federico Cassini, the vehicle is already booked by another user," and "Hi Federico Cassini, you can’t book this scooter with ID: 4 because it is booked by another user," since it was already reserved by Francesco Sandali.

If `user3` tries to book a vehicle that is unavailable, the program will return:
"The vehicle 1 can't be booked because another user was faster than you," 
"Hi Francesca Tamalli, the vehicle is booked by another user," 
and "Hi Francesca Tamalli, you can't book this electric car with ID: 1 because it is booked by another user."

The `getAvailableTransport` function serves to display an array of only the available vehicles added to the system. After the booking of `scooter1`, and with `electricCar1` unavailable from the start, only `scooter3` will be shown as available in Arezzo. 

This could be a useful filter to implement for display on the map.

ITALIAN

Il codice eseguito è solo Typescript, attraverso il comando, configurato nel package.json, npm  run deploy viene trasdotto da Typescript a Javascript.

Viene visualizzato solo esclusivamente nella console.

Viene definita la classe Transport attraverso 3 variabile.
Scooter1, electric car 1, Scooter 3

Vengono definiti 3 utenti con vari nomi e cognomi, indirizzo mail e metodo di pagamento preferito.

Viene definita la città Arezzo.

In primis i 3 veicoli indicati vengono aggiunti alla lista dei mezzi presenti nellà città di Arezzo.

La funzione verifyAvailable serve semplicemente sulla presunta mappa a visualizzare se un veicolo è disponibile o meno, ad esempio mettendo in una futura implementazione un cambio di colorazione bordo. es. veicolo disponibile => {border: green} else veicolo non disponibile => {border: red}

Quando viene indicato userN.bookTransport(vehicleN) indica che l'utente in questione sta cercando di prenotare il veicolo.

Nel caso di user1.bookTransport(scooter1) restituirà "Congratulation Francesco Sandali, you has book scooter with ID: 4, you have pay with credit card".

Nel caso in cui successivamente user2 prova a prenotare lo stesso veicolo quindi con user2.bookTransport(scooter1); restituirà "Hi Federico Cassini the vehicle is booked by another user
" e "Hi Federico Cassini, you can't book this scooter with ID: 4 because is books by another user" poiché già prenotato da Francesco Sandali.


Nel caso in cui user3 prova a prenotare un veicolo non disponibile il programma restituirà:
"The vehicle 1 can't be booked beacause other user was faster than you" 
"Hi Francesca Tamalli the vehicle is booked by another user"
"Hi Francesca Tamalli, you can't book this electric car with ID: 1 because is books by another user"


La funzione getAvailableTransport serve per visuallizare un Array dei solo veicolo disponibili aggiunti.
Inserita dopo la prenotazione del veicolo scooter1, mentre electricCar1 non è proprio disponibile dalla dichiarazione farà visualizzare ad Arezzo solo il veicolo scooter3
Potrebbe essere un filtraggio utile da inserire e far visualizzare nella mappa


