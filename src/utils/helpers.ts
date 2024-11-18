import { Character } from "../models/Character";
import { Enemy } from "../models/Enemy";
import { triggerEvent } from "../controllers/gameController";

// Funcion que simula un combate entre el personaje y el enemigo
export async function combate(personaje: Character, enemigo: Enemy): Promise<void> {
    console.log(`${personaje.name} está luchando contra el enemigo...`);

    // Esperamos 2 segundos antes de resolver el combate
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Todos los ataques disponibles se ponen dentro de un array, para poder usarlos con el metodo random
    let arrayDeAtaques = [() => personaje.atacarContrincante(), () => enemigo.atacarContrincante(), () => personaje.recibirAtaqueConDefensa(), () => enemigo.recibirAtaqueConDefensa, () => triggerEvent(personaje), () => personaje.recibirAtaqueSinDefensa, () => enemigo.recibirAtaqueSinDefensa];

    while (enemigo.health > 0 && personaje.health > 0) {
        let randomBatalla = Math.floor(Math.random() * arrayDeAtaques.length);
        arrayDeAtaques[randomBatalla]();
        await new Promise(resolve => setTimeout(resolve, 2000));
    };

    if (personaje.health <= 0) {
        console.log(`${personaje.name} ha perdido la mision..`);
        personaje.health = 100;
    } else {
        console.log(`${personaje.name} ha superado la mision..`);
    }
}

// Eventos sopresa
export function sumar10Salud(personaje: Character): void {
    personaje.health += 10
}

export async function evento(personaje: Character): Promise<string> {
    return new Promise((resolve) => {
        const evento = Math.random() > 0.5 ? 'Atrapaste el hongo! Tu recompensa es de 10 puntos de vida.' : 'Recibiste un ataque extra-fuerte, tu salud se ha reducido en 20.'
        if (evento === 'Atrapaste el hongo! Tu recompensa es de 10 puntos de vida.') {
            sumar10Salud(personaje)
            console.log(`Su salud es de: ${personaje.health}`);
            
        } else {
            personaje.health -= 20
            console.log(`Su salud es de: ${personaje.health}`);
            
        }
        setInterval(() => resolve(evento), 1000)
    })
}