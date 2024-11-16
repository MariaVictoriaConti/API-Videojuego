import { Character } from "../models/Character";

export function sumar10Salud(personaje: Character): void {
    personaje.health += 10
}