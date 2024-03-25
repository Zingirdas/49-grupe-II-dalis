
class Preke {
    #kaina = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        //Pradiniu reiksmiu priskyrimas:
        this.#kaina = kaina;
        this.pavadinimas = pavadinimas;

    }
    //Metodas (funkcija klaseje) isvesti rezultata:
    isvesti() {
        return `Prekes pavadinimas: ${this.pavadinimas}, kaina: ${this.#kaina} EUR`;
    }
    //Graziname kaina su PVM:
    // vadinasi Getter - pasiimimo metodas:
    get kainaSuPVM() {
        return this.#kaina * 1.21;
    }
    //Setteris - priskyrimo metodas:
    set kaina(k) {
        if (k - this.kaina < 10) {
            this.#kaina = k;
        }
    }

};


const tv = new Preke(100, "Televizorius");
const pc = new Preke(600, "Kompiuteris");

//Isvedame televizoriu:
console.log(tv.isvesti());
//Pakeiteme kaina:
tv.kaina = 105;
console.log(tv.isvesti());


//Isvedame kompiuteri:
console.log(pc.isvesti());

// console.log(tv.kainaSuPVM());
