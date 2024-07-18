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
// import { number } from "prop-types";
// }
// // console.log(a)
// let b :  {
//     name: string,
//     age: number,
//     adult: boolean,
// }
// b = {
//     name: 'masum',
//     age: 23,
//     adult: true
// };
// console.log(b)
// let a : any[]  = [];
// a.push('bangladesh');
// a.push(34);
// a.push(33, 'india', true, )
// console.log(a)
// let myFunc : Function
// const myFunc  = (a: number, b: number , c: string) => {
//     return a + b 
// }
// const result = myFunc(3 , 13,  'sabbir');
// console.log(result)
// Type Alises //
// type strNumber = string | number;
// type userDetails = {name: string, age: number, adult: boolean};
// const userInfo = (id: strNumber, user: userDetails) => {
//     console.log(`Hello My Name is ${user.name} I am ${user.age} & didn't fullfiled ${user.adult} my claas Id is ${id}`)
//     }
//     userInfo(50, {name: 'amin', age: 23, adult: false});
// const sayHello = (user: userDetails) => {
//     console.log(`Hello This is ${user.name} I am ${user.age} years old & marrital status ${user.adult}`)
// }
// sayHello({name: "annoy", age: 23, adult: true});
//________________Functions signature__________________________ //
// let add: (x:number, y:number) => number;
// add = (a:number, b:number) =>{
//     return a + b
// }
// const result = add(3, 5);
// console.log(result)
// let calculation : (a:number, b:number, c:number) => number;
// calculation = (x:number, y:number, z:number) => {
//     return x * y + z;
// }
// const result = calculation(3, 4, 5);
// console.log(result)
// let calculation : (x:number, y:number, z:string) => number;
// calculation = (a:number, b:number, c:string) =>{
// if(c == 'minus'){
//     return a - b;
// }
// else{
//     return a + b
// }
// }
// // console.log((calculation(4, 6, 'add')))
// let userInfo : (id: number | string, user: {
//     name: string, 
//     age: number
// }) => void;
// userInfo = (id: number | string , user: {
//     name: string,
//     age: number
// }) => {
// }
// ____________use of classes of typescript_____________ //
import { Player } from './classes/Player.js';
const player1 = new Player('Mashrafi', 40, 'Bangladesh');
// player1.name = 'Tamim';
// console.log(player1.name);
const player2 = new Player('Shakib', 38, 'Bangladesh');
let players = [];
players.push(player1);
players.push(player2);
console.log(players);
