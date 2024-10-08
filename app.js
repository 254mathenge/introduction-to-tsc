// const person:
// {
//     name:string ,
//     age:number,
//     hobbies:string[],
//     role:[number,string]
// }
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "faith",
    age: 25,
    hobbies: ["swimming", "reading"],
    role: Role.ADMIN
};
// tuples
// person.role.push("admin")
// let favoriteActivities:string[];
// favoriteActivities=["swimming"]
// const favoriteActivities :string[] =["swimming","reading"]
// console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
