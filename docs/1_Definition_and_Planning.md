# Project Phase 1 - Definition and Planning

## Käyttäjäpersoonat

### Oona
- **Ikä**: 22
- **Ammatti**: IT-opiskelija
- **Tavoite**: Haluaa yksinkertaisen tehtävälistan opiskelutehtävien hallintaan.
- **Haasteet**: Unohtaa helposti deadlinet ja kaipaa selkeyttä tehtävien seurantaan.
- **Käyttötarve**: Lisää tehtäviä ja merkitsee ne tehdyiksi, kun on palauttanut ne.

### Matti
- **Ikä**: 35
- **Ammatti**: Tiimipäällikkö
- **Tavoite**: Seurata projektitehtävien edistymistä ja priorisoida niitä.
- **Haasteet**: Käyttää jo monia sovelluksia ja haluaa yksinkertaisen ratkaisun ilman turhia ominaisuuksia.
- **Käyttötarve**: Lisää tehtäviä, merkitsee ne prioriteetin mukaan ja poistaa ne, kun ne on tehty.

### Emilia
- **Ikä**: 28
- **Ammatti**: Freelancer-sisällöntuottaja
- **Tavoite**: Pitää yllä tehtävälistaa asiakastöistä ja muistaa kaikki ideansa.
- **Haasteet**: Ideoita tulee ja menee nopeasti, joten hän tarvitsee nopean lisäysmahdollisuuden.
- **Käyttötarve**: Lisää tehtäviä nopeasti, näkee helposti listan tehtävistä ja poistaa tarpeettomat.

### Kalle
- **Ikä**: 30
- **Ammatti**: Ohjelmistokehittäjä
- **Tavoite**: Hallita työtehtäviään ja koodausprojektejaan tehokkaasti.
- **Haasteet**: Työn määrä kasvaa helposti hallitsemattomaksi ilman hyvää järjestelmää.
- **Käyttötarve**: Ryhmittelee tehtävät projekteittain, käyttää deadlineja ja pitää kirjaa edistymisestä.

### Leena
- **Ikä**: 40
- **Ammatti**: Kotitalouden hallinnoija
- **Tavoite**: Pitää yllä kauppalistoja, kotitöitä ja perheen aikatauluja.
- **Haasteet**: Unohtelee helposti asioita ja haluaa pitää kaiken yhdessä paikassa.
- **Käyttötarve**: Tekee yksinkertaisia listoja, lisää ja poistaa tehtäviä helposti.

---

## Käyttötapaukset

### 1. Tehtävän lisääminen
- **Kuvaus**: Käyttäjä lisää uuden tehtävän listaan.
- **Toimintovaiheet**:
    1. Käyttäjä avaa sovelluksen.
    2. Syöttää tehtävän nimen ja mahdollisen kuvauksen.
    3. Klikkaa "Lisää tehtävä" -painiketta.
    4. Tehtävä ilmestyy listaan.
- **Ehdot**: Käyttäjä ei voi lisätä tyhjää tehtävää.

### 2. Tehtävän poistaminen
- **Kuvaus**: Käyttäjä poistaa tehtävän, joka ei ole enää tarpeellinen.
- **Toimintovaiheet**:
    1. Käyttäjä avaa sovelluksen.
    2. Näkee tehtävälistan.
    3. Klikkaa tehtävän vieressä olevaa "Poista" -painiketta.
    4. Tehtävä poistuu listasta.
- **Ehdot**: Käyttäjä voi poistaa vain omia tehtäviään.

### 3. Tehtävän merkitseminen tehdyksi
- **Kuvaus**: Käyttäjä haluaa merkitä tehtävän valmiiksi.
- **Toimintovaiheet**:
    1. Käyttäjä avaa sovelluksen.
    2. Klikkaa tehtävän vieressä olevaa "Valmis" -painiketta.
    3. Tehtävä muuttuu harmaaksi ja siirtyy valmiiden tehtävien osioon.
- **Ehdot**: Käyttäjä voi merkitä vain olemassa olevia tehtäviä valmiiksi.

### 4. Tehtävän muokkaaminen
- **Kuvaus**: Käyttäjä haluaa muokata olemassa olevaa tehtävää (esim. nimeä tai kuvausta).
- **Toimintovaiheet**:
    1. Käyttäjä avaa sovelluksen.
    2. Klikkaa tehtävän vieressä olevaa "Muokkaa" -painiketta.
    3. Tekee tarvittavat muutokset (esim. muuttaa tehtävän nimen tai kuvauksen).
    4. Klikkaa "Tallenna", jolloin muutokset tallentuvat ja päivitetty tehtävä näkyy listassa.
- **Ehdot**: Käyttäjä voi muokata vain omia tehtäviään.

### 5. Tehtävän laittaminen työn alle
- **Kuvaus**: Käyttäjä haluaa merkitä tehtävän "Työn alla" -tilaan.
- **Toimintovaiheet**:
    1. Käyttäjä avaa sovelluksen.
    2. Klikkaa tehtävän vieressä olevaa "Aloita" -painiketta.
    3. Tehtävän tila päivittyy "Työn alla" -tilaksi ja tehtävä siirtyy työn alla olevien tehtävien osioon.
- **Ehdot**: Käyttäjä voi laittaa tehtävän työn alle vain, jos tehtävän tila ei ole jo "Valmis".

## 3. UI Prototypes

https://www.figma.com/design/2vH9JgW7ot9Bd3vLS0Cndw/Task-List?node-id=1-65&t=X55h5XsDMOX442LR-1



## 4. Information Architecture and Technical Design
Tietorakenteet:
Sovelluksessa käytetään yksinkertaista tiedonhallintaa, jossa tehtävät tallennetaan paikallisesti selaimen LocalStorage-muistiin. Tiedot tallennetaan JSON-muodossa ja ne sisältävät tehtävän nimen, kuvauksen ja tilan (PENDING, IN_PROGRESS, COMPLETED).

Tekninen suunnitelma:
Käytetään React-kirjastoa frontendin kehittämiseen, joka mahdollistaa dynaamisen ja reaktiivisen käyttöliittymän. CSS:llä on määritelty sovelluksen ulkoasu, ja LocalStorage:ta hyödynnetään tehtävien tallentamiseen ja hakemiseen.

Käyttöliittymä ja taustajärjestelmä:
Sovellus toimii ilman erillistä taustapalvelinta, ja kaikki tiedon käsittely tapahtuu suoraan selaimessa LocalStoragea hyödyntäen. Tätä käytetään tietojen tallentamiseen ja hakemiseen, kun käyttäjä lisää, muokkaa tai poistaa tehtäviä.

## 5. Project Management and User Testing
**Project Management**:
Projektinhallinta keskittyy aikarajoihin, resurssien käyttöön ja tehtävien hallintaan. Projekti on jaettu vaiheisiin, joissa seurataan edistymistä ja varmistetaan, että aikarajat täyttyvät. Käytetään GitHubia projektin seuraamiseen ja dokumentointiin.

**User Testing**:
Käyttäjätestaus suoritetaan todellisilla käyttäjillä, jotka arvioivat sovelluksen käytettävyyttä. Testin aikana kerätään palautetta tehtävien lisäämisestä, muokkaamisesta ja poistamisesta sekä tehtävien tilan hallinnasta. Palautteen perusteella tehdään parannuksia sovellukseen.
