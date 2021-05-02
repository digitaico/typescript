var Role;
(function (Role) {
    Role[Role["SUPERVISOR"] = 0] = "SUPERVISOR";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
    Role[Role["GUEST"] = 8] = "GUEST";
})(Role || (Role = {}));
var person = {
    name: 'Alexander',
    age: 30,
    hobbies: ['Hunting', 'War'],
    role: Role.AUTHOR,
    status: [3, 'ACTIVE'],
    is_member: true
};
console.log(person.role);
