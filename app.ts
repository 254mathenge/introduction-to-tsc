// const person:
// object
// {
//     name:string ,
//     age:number,
// }
const person={
    name:"faith",
    age:25,
    hobbies:["swimming","reading"]
};
// let favoriteActivities:string[];
// favoriteActivities=["swimming"]

// const favoriteActivities :string[] =["swimming","reading"]
// console.log(person);
for(const hobby of person.hobbies){
console.log(hobby.toUpperCase())
}