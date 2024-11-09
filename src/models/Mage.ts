import { Character } from './Character'

class Mage extends Character {
    poderMagico: string; // 
    mana: number; // potencia del poder

    constructor(name: string, level: number, health: number, experience: number, poderMagico: string, mana: number) {
        super(name);
        this.poderMagico = poderMagico;
        this.mana = mana;
    }
}



//Info RANDOM
//Mage ===>Donkey Kong (el gorila) su archienemigo
//ataque: golpe al piso con puños que causa terremoto /golpe de puño
//defensa: superGrito del Gorila deja aturdido al rival y no se puede defender