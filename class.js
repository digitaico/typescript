"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    walk(distance) {
        console.log('animall is walking ' + distance + " meters");
    }
}
const perro = new Animal('pitufo');
perro.walk(10);
class snake extends Animal {
    constructor(name) {
        super(name);
    }
    arrastra() {
        console.log('la serpiente se arrastra');
    }
}
