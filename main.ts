let f = (a: number) => {
	a = 6;
	return a;
}

enum Role {SUPERVISOR, READ_ONLY, AUTHOR = 7, GUEST }

const person = {
	name: 'Alexander',
	age: 30,
	hobbies: ['Hunting', 'War'],
	role: Role.AUTHOR
}

console.log(person.role);

