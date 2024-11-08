import { Character } from './Character'

class Mage extends Character {
    poderMagico: string; // 
    mana: number; // potencia del poder

    constructor(name: string, level: number, health: number, experience: number, poderMagico: string, mana: number) {
        super(name, level, health, experience);
        this.poderMagico = poderMagico;
        this.mana = mana;
    }
}