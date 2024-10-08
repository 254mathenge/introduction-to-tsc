// const person:
// {
//     name:string ,
//     age:number,
//     hobbies:string[],
//     role:[number,string]

// }
enum Role{ADMIN="ADMIN",READ_ONLY=100,AUTHOR=200}

const person={
    name:"faith",
    age:25,
    hobbies:["swimming","reading"],
    role:Role.ADMIN
};
// tuples
// person.role.push("admin")
// let favoriteActivities:string[];
// favoriteActivities=["swimming"]

// const favoriteActivities :string[] =["swimming","reading"]
// console.log(person);
for(const hobby of person.hobbies){
console.log(hobby.toUpperCase())
}

if (person.role===Role.ADMIN){
console.log("is admin");
}