class Point {
    //Privatus kintamieji:
    #x = 0;
    #y = 0;
    //Konstruktorius:
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    //Setteriai ir getteriai
    set x(x) {
        this.#x = x;
    }
    get x() {
        return this.#x = x;
    }
    set y(y) {
        this.#y = y;
    }
    get y() {
        return this.#y = y;
    }
    //Metodas apskaiciuoti atstumui iki koordinaciu pradzios:
    distanceFromOrigin() {
        return Math.sqrt(this.#x ** 2 + this.#y ** 2)
    }
    //Metodas tasko pastumimui:
    translate(dx, dy) {
        this.#x += dx;
        this.#y += dy;
    }
    //Metodas tasko isvedimui:
    print() {
        return `[${this.x}, ${this.y}]`
    }
    //
    distance(p) {
        return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
    }
}
const a = new Point(3, 5);
const b = new Point(0, 10);
b.translate(2, 0);

console.log(`[${a.x}, ${a.y}]`);
console.log(`[${b.x}, ${b.y}]`);

console.log(`Atstumas iki koordinaciu pradzios tasko: ${a.distanceFromOrigin}`);
console.log(`Atstumas iki koordinaciu pradzios tasko: ${b.distanceFromOrigin}`);

console.log(`Atstumas nuo a iki b: ${a.distance(b)}`);
