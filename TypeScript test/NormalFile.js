"use strict";
exports.__esModule = true;
function characterusername(user) {
    return "Nome: " + user;
}
function characterage(age) {
    return "Idade: " + age + " anos";
}
var user = "João";
var age = 10;
var seconduser = "Joana";
var seconduserage = 43;
console.log(characterusername(user));
console.log(characterage(age));
function secondcharacterusername(user) {
    return "Nome: " + user;
}
function secondcharacterage(user) {
    return "Idade: " + age + " anos";
}
console.log(characterusername(seconduser));
console.log(secondcharacterage(seconduserage));