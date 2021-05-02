enum Role {SUPERVISOR, READ_ONLY, AUTHOR = 7, GUEST }

const person : {
	name: string;
	age: number;
	hobbies: string[];
	role: Role;
	status : [number, string];
	is_member: boolean;
} = {
	name: 'Alexander',
	age: 30,
	hobbies: ['Hunting', 'War'],
	role: Role.AUTHOR,
	status: [3, 'ACTIVE'],
	is_member: true,
}

console.log(person.role);

