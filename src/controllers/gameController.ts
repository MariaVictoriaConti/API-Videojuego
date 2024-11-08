import { Character  } from "../models/Character";

export class GestionDePersonajes {
    private characters: Character[] = [];

    createCharacter(name: string, level: number = 1, health: number = 100, experience: number = 0): void {
        const character = new Character(name, level, health, experience);
        this.characters.push(character);
    }

    listCharacter(): void {
        console.log('Listado de personajes: ');
        this.characters.forEach(character => {
            console.log(`${character.name}, ${character.level}, ${character.health}, ${character.experience}`);
        })
    }
}

const personajes = new GestionDePersonajes()
personajes.createCharacter('Mario')
personajes.createCharacter('Luigi', 2, 75, 3)
personajes.listCharacter()