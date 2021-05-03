class Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	walk(distance: number) {
		console.log('animall is walking ' + distance + " meters");
	}
}


const perro = new Animal('pitufo');
perro.walk(10);


class snake extends Animal {
	constructor(name: string) {
		super(name);
	}

	arrastra () {
		console.log('la serpiente se arrastra');
	}
}
