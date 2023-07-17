# Creare una versione dell'esercizio 1 anche in CSR (con useEffect) e scrivere tutte le differenze tra CSR e SSR.

## CSR (Client-Side Rendering), o rendering lato client, è un metodo in cui l'applicazione viene caricata sul lato client, cioè nel browser dell'utente. Quando un utente accede a una pagina, viene caricato un file JavaScript che contiene il codice dell'applicazione. Successivamente, il browser esegue il codice JavaScript e si occupa di renderizzare la pagina. Questo significa che l'utente deve attendere il caricamento iniziale dell'applicazione prima di poter visualizzare il contenuto. Una volta che il codice viene eseguito, l'applicazione può interagire con il server per recuperare i dati necessari.

## SSR (Server-Side Rendering), o rendering lato server, invece, carica e renderizza le pagine sul server prima di inviarle al browser dell'utente. Quando un utente accede a una pagina, il server esegue il codice dell'applicazione e restituisce direttamente l'HTML completo al browser. Ciò significa che l'utente può vedere il contenuto della pagina immediatamente, senza dover attendere il caricamento dell'applicazione nel browser. L'applicazione può comunque interagire con il server per ottenere dati aggiornati o per eseguire operazioni specifiche lato client.

## Quindi, in sintesi:

## Con CSR, l'applicazione viene caricata nel browser dell'utente e si occupa di renderizzare le pagine dopo il caricamento iniziale. È necessario attendere il caricamento prima di visualizzare il contenuto.

## Con SSR, l'applicazione viene caricata e renderizzata sul server e inviata al browser come HTML completo. L'utente può vedere il contenuto immediatamente.
