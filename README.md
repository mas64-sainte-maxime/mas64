# Mas 64 – Sito web casa vacanze (Sainte-Maxime)

Sito statico in 4 lingue (francese, inglese, italiano, tedesco) per la casa vacanze **Mas 64**, nel residence Collines de Guerrevieille a Sainte-Maxime. Solo HTML, CSS e JavaScript, senza dipendenze né build.

## Struttura

```
index.html            reindirizza a fr/ o en/ in base alla lingua del browser
fr/                   6 pagine in francese
en/                   6 pagine in inglese
assets/
  style.css           stile (palette e caratteri)
  main.js             menu mobile e modulo di richiesta
  config.js           impostazioni: email e servizio di invio del modulo
  img/                fotografie (vedi sotto)
```

| N.  | Francese                        | Inglese                     |
| --- | ------------------------------- | --------------------------- |
| 1   | `fr/index.html`                 | `en/index.html`             |
| 2   | `fr/la-maison.html`             | `en/the-house.html`         |
| 3   | `fr/jardin-et-domaine.html`     | `en/garden-and-estate.html` |
| 4   | `fr/la-region.html`             | `en/the-area.html`          |
| 5   | `fr/tarifs-et-reservation.html` | `en/rates-and-booking.html` |
| 6   | `fr/contact.html`               | `en/contact.html`           |

Il selettore FR/EN/IT/DE in alto a destra porta alla pagina equivalente nell'altra lingua (stessa riga della tabella).

Italiano (`it/`): `index`, `la-casa`, `giardino-e-domaine`, `dintorni`, `tariffe-e-prenotazione`, `contatti`.
Tedesco (`de/`): `index`, `das-haus`, `garten-und-anlage`, `umgebung`, `preise-und-buchung`, `kontakt`.

## Vedere il sito in locale

Apri `index.html` con un doppio clic. In alternativa, dalla cartella del progetto:

```
python3 -m http.server 8000
```

e vai su http://localhost:8000.

## Pubblicare su GitHub Pages

1. Crea un repository su GitHub (es. `mas64`) e carica tutti i file di questa cartella, con `index.html` nella radice.
2. Vai su **Settings → Pages**.
3. In "Build and deployment" scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, poi **Save**.
4. Dopo circa un minuto il sito è online su `https://TUO-UTENTE.github.io/mas64/`.

**Dominio personalizzato (facoltativo):** in Settings → Pages, campo "Custom domain", inserisci ad esempio `www.mas64.fr` e configura il record DNS indicato da GitHub presso il registrar. Spunta "Enforce HTTPS".

## Fotografie

Le 10 foto (© RM – Mas 64) sono già in `assets/img/`, ritagliate dai bordi neri e salvate in JPG:

| File                            | Soggetto                                        | Dove compare                           |
| ------------------------------- | ----------------------------------------------- | -------------------------------------- |
| `hero.jpg`                      | Vista su natura e golfo dalla terrazza          | Home (immagine principale) e La région |
| `jardin.jpg`                    | Giardino mediterraneo ombreggiato               | Home e Jardin et domaine               |
| `cuisine.jpg`                   | Cucina e zona pranzo                            | La maison                              |
| `salon.jpg`, `salon2.jpg`       | Soggiorno                                       | La maison                              |
| `chambre.jpg`, `chambre2.jpg`   | Camera principale e camera con letto estraibile | La maison                              |
| `terrasse.jpg`, `terrasse2.jpg` | Terrazza con tavolo, facciata con sdraio        | Jardin et domaine                      |
| `golfe.jpg`                     | Vista dal Domaine con campi da tennis           | Home e Jardin et domaine               |

Per cambiare una foto sostituisci il file mantenendo lo stesso nome. Se un file manca, la pagina mostra un riquadro segnaposto. Le foto originali misurano circa 600-1000 px sul lato lungo: per un risultato più nitido sugli schermi grandi, sostituiscile con versioni a 1600-1920 px (meno di 500 KB ciascuna).

## Modulo di richiesta

Il modulo si trova nelle pagine _Tarifs et réservation_ e _Rates & Booking_.

- **Senza configurazione** apre l'app email del visitatore con il messaggio già compilato. Il sito avvisa che la richiesta parte solo dopo l'invio dall'app email.
- **Con un servizio di invio** (es. Formspree): crea un modulo sul servizio, copia l'indirizzo che ti dà e incollalo in `assets/config.js`:

```js
window.MAS64 = {
  email: "mas64collines@gmail.com",
  formEndpoint: "https://formspree.io/f/xxxxxxxx",
};
```

Il modulo invia i dati in JSON con metodo POST e mostra un messaggio di conferma solo se il servizio risponde con successo.

## Come modificare i contenuti

- **Tariffe 2027**: lista `RT` nello script di generazione, oppure direttamente la tabella nei file `tarifs-et-reservation.html` e `rates-and-booking.html`.
- **Testi**: modifica direttamente i file HTML delle singole pagine, in entrambe le lingue.
- **Colori**: variabili di colore all'inizio di `assets/style.css` (avorio `#E8E0D1`, verde oliva `#53654D`, sabbia `#C8A77A`).

## Da verificare prima di pubblicare

- [ ] Politica sugli **animali** (sul sito non è indicata)
- [ ] Regole di soggiorno: non fumatori, divieto di barbecue e plancha
- [ ] Numero di bagni (ora: 1 bagno con grande doccia e 2 WC)
- [ ] Condizioni di **cancellazione** (ora rimanda al contratto di locazione)
- [ ] Tassa di soggiorno 2027 (ora 2,16 € per adulto a notte, tariffa 2026)
- [ ] Prezzi di pulizia finale e biancheria
- [ ] Pagina **Mentions légales** (servono nome e indirizzo dell'editore)
- [ ] Foto: manca una foto della piscina; valutare versioni a risoluzione maggiore
- [ ] Contenuti della pagina _La région_ (ora minimi) ed eventuale sezione eco-responsabile
- [ ] Caratteri Google Fonts: per un uso rigoroso del GDPR, scaricare Spectral e Lato e servirli dalla cartella `assets/`

## Note

I caratteri **Spectral** e **Lato** sono caricati da Google Fonts. Il sito non usa cookie di tracciamento né strumenti di analisi.
