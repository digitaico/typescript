let f = (a: number) => {
	a = 6;
	return a;
}

enum Role {SUPERVISOR, READ_ONLY, AUTHOR = 7, GUEST }

const person : {
	name: string;
	age: number;
	hobbies: string[];
	role: Role;
	status : [number, string];
}= {
	name: 'Alexander',
	age: 30,
	hobbies: ['Hunting', 'War'],
	role: Role.AUTHOR,
	status: [3, 'ACTIVE']
}

console.log(person.role);

