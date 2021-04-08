export {};

function characterusername(user: string) {
    return "Nome: " + user;
}
function characterage(age: number) {
    return "Idade: " + age + " anos";
}

var user = "João"
var age = 10

var seconduser = "Joana"
var seconduserage = 43


console.log( characterusername(user) );
console.log( characterage(age) );

function secondcharacterusername(user: string) {
    return "Nome: " + user;
}
function secondcharacterage(user: number) {
    return "Idade: " + age + " anos";
}

console.log( characterusername(seconduser) );
console.log( secondcharacterage(seconduserage) );