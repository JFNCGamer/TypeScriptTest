export {};

function characterusername(user: string) {
    return "Nome: " + user;
}
function characterage(age: number) {
    return "Idade: " + age + " anos";
}

var user = "João"
var age = 10

var seconduser = "Mãe"
var seconduserage = 43

var thirduser = "Pai"
var thirduserage = 49

var fourthuser = "Ninha"
var fourthuserage = 4

console.log( characterusername(user) );
console.log( characterage(age) );
console.log("");

function secondcharacterusername(user: string) {
    return "Nome: " + seconduser;
}
function secondcharacterage(user: number) {
    return "Idade: " + seconduserage + " anos";
}

console.log( secondcharacterusername(seconduser) );
console.log( secondcharacterage(seconduserage) );
console.log("");

function thirdcharacterusername(user: string) {
    return "Nome: " + thirduser;
}
function thirdcharacterage(age: number) {
    return "Idade: " + thirduserage + " anos";
}

console.log( thirdcharacterusername(thirduser) );
console.log( thirdcharacterage(thirduserage) );
console.log("");

function fourthcharctername(user: string) {
    return "Nome: " + fourthuser;
}

function fourthcharacterage(age: number) {
    return "Idade: " + fourthuserage + " anos";
}

console.log( fourthcharctername(fourthuser) );
console.log( fourthcharacterage(fourthuserage) );
console.log("");