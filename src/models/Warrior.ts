import { Character } from './Character'

class Warrior extends Character {
    ataque: number;
    defensa: number; // 0 al 50

    constructor(ataque: number, defensa: number, name: string, level: number, health: number, experience: number) {
        super(name);
        this.ataque = ataque;
        this.defensa = defensa;
    }
}




//Info RANDOM
//warrior ===> "Bowser" (el dragon, su archirrival)
//Caracteristicas q tal vez sirven tal vez no je
//ataque: lanzaFuego / lanza espinas de su caparazon
//defensa: se mete dentro de su caparazon de pinches