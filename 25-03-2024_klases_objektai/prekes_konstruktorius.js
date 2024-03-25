
// ----------Konstruktorius------------//

// Klases (brezinio) aprasymas:
class Preke {
    kaina = 0;
    kainaSuPVM = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        //Pradiniu reiksmiu priskyrimas:
        this.kaina = kaina;
        this.pavadinimas = pavadinimas;
        //Skaiciavimai ir programinis kodas kuris vykdomas kiekvieno objekto sukurimo metu:
        this.kainaSuPVM = this.kaina * 1.21;
        console.log("1");
    }
};

// console.log("2");
// Nauju objektu sukurimas:
const tv = new Preke(100, "Televizorius");
const pc = new Preke(600, "Kompiuteris");

console.log("3");

// tv.kaina = 100;
// tv.kainaSuPVM = tv.kaiana * 1.21;

console.log(tv);

// -------------------------------------------//

