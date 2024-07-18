import {Isplayer} from '../interfaces/IsPlayer.js';
export class Player implements Isplayer {
    
    constructor
        (
        public name: string,
        private age: number,
        readonly country: string,
    ){

    }
    getProperty() {
        return this.age
    }
    play(){
        console.log(`${this.name} from ${this.country} his age is ${this.age}`)
    }
}