import { Character } from './Character'

class Warrior extends Character {
    ataque: number;
    defensa: number; // 0 al 50

    constructor(ataque: number, defensa: number, name: string, level: number, health: number, experience: number) {
        super(name, level, health, experience);
        this.ataque = ataque;
        this.defensa = defensa;
    }
}