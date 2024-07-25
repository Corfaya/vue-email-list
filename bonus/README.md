Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

- Istanza di applicazione
    - Tra i dati:
        "email" come array vuoto
    - Tra i metodi:
        - Funzione che restituisce gli indirizzi email
            - FOR LOOP: esegui iterazione finché non è vero che il contatore è minore di 10
                - Richiesta GET dell'endpoint dell'API fornita tramite AXIOS
                - Dopo, eseguire arrow function con parametro per ciclare e restituire ogni indirizzo email
                    - Pushare in array vuoto la response
- Montare sull'id app