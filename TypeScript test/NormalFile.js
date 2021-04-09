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
var thirduser = "Pai";
var thirduserage = 49;
console.log(characterusername(user));
console.log(characterage(age));
function secondcharacterusername(user) {
    return "Nome: " + seconduser;
}
function secondcharacterage(user) {
    return "Idade: " + seconduserage + " anos";
}
console.log(secondcharacterusername(seconduser));
console.log(secondcharacterage(seconduserage));
function thirdcharacterusername(user) {
    return "Nome: " + thirduser;
}
function thirdcharacterage(age) {
    return "Idade: " + thirduserage + " anos";
}
console.log(thirdcharacterusername(thirduser));
console.log(thirdcharacterage(thirduserage));
