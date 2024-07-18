// // console.log('bangladesh')
// const country = 'I love bangladesh';
// // console.log(country)
// let playerName
//  playerName = 'Mashrafi';
// console.log(playerName);
// playerName = 'nur'
// // console.log(playerName)
// playerName = 34
// console.log(playerName);
// console.log(playerName)
// function multiply (a : number , b : number) {
//  return (a * b)
// }
// console.log(" result",multiply(6, 12));
// let array = [];
// array .push(['ashik', 'mahmud', 'rana'])
// array.push(34);
// console.log(array)
// let a : number;
// a = 5;
// a = 3;
// let b : string;
// b = '3';
// let a : string | number | boolean;
// a = 3,
// a = 'bangladesh';
// a = true;
// let array : (string | number) [] = [];
// array.push("bangladesh", 'india', 'pakistan', 3)
// console.log(array)
// let mixedArray : (string | number | undefined | boolean)[] = [];
// mixedArray.push(33, 332);
// mixedArray.push(undefined)
// mixedArray.push('runs', false)
// console.log(mixedArray)
// let a : object 
// a = {
//     name: 'abul',
//     age: 34,
//     isStudent: true,
// a = []
import { Player } from './classes/Player.js';
let player1;
player1 = new Player('Mashrafi', 40, 'Bangladesh');
// player1.name = 'Tamim';
// console.log(player1.name);
const player2 = new Player('Shakib', 38, 'Bangladesh');
let players = [];
players.push(player1);
players.push(player2);
console.log(players);
function drawRectangle(option) {
    let width = option.width;
    let length = option.length;
    return width * length;
}
const options = {
    width: 30,
    length: 18,
    height: 40
};
const result = drawRectangle(options);
console.log(result);
