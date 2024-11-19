import { Character } from "../models/Character";
import { Enemy } from "../models/Enemy";
import { triggerEvent } from "../controllers/gameController";
import { Mage } from "../models/Mage";
import { DEFENSA, SUPERPODER, Warrior } from "../models/Warrior";

// Funcion que simula un combate entre el personaje y el enemigo
export async function combate(personaje: Character, enemigo: Enemy): Promise<void> {
    console.log(`\n ⚔️  ${personaje.name} está luchando contra el enemigo...\n`);

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
        console.log(`\n🔴 ${personaje.name} ha perdido la mision..`);
        personaje.health = 100;
    } else {
        console.log(`\n🎇 ¡${personaje.name} ha superado la mision! 🎇`);
    }
}

// Eventos sopresa
export function sumar10Salud(personaje: Character): void {
    personaje.health += 10
}

// export async function evento(personaje: Character): Promise<string> {
//     return new Promise((resolve) => {
//         const MageSorpresa = new Mage("Mage");
//         const WarriorSorpresa = new Warrior("Warrior", SUPERPODER.LANZAFUEGO, DEFENSA.CAPARAZONPROTECTOR);
//         const evento = Math.random() > 0.5 ? '🍄 Atrapaste el hongo! Tu recompensa es de 10 puntos de vida.' : '💥 Recibiste un ataque extra-fuerte, tu salud se ha reducido en 20.';
//         if (evento === '🍄 Atrapaste el hongo! Tu recompensa es de 10 puntos de vida.') {
//             sumar10Salud(personaje)
//             console.log(`Su salud es de: ${personaje.health}`);
//         } else {
//             personaje.health -= 20
//             console.log(`Su salud es de: ${personaje.health}`);
//         }
//         setInterval(() => resolve(evento), 1000)
//     })
// }

export async function evento2(personaje: Character): Promise<string> {
    return new Promise((resolve) => {
        const MageSorpresa = new Mage("Mage");
        const WarriorSorpresa = new Warrior("Warrior", SUPERPODER.LANZAFUEGO, DEFENSA.CAPARAZONPROTECTOR);

        const randomEvent = Math.random();
        let evento: string;

        if (randomEvent < 0.33) {
            // 33% de probabilidad de encontrar un hongo
            sumar10Salud(personaje);
            evento = `🍄 Atrapaste el hongo! Tu recompensa es de 10 puntos de vida. Su salud es de: ${personaje.health}`;
        } else if (randomEvent < 0.66) {
            // 33% de probabilidad de recibir un ataque
            personaje.health -= 30;
            evento = `💥 Recibiste un ataque extra-fuerte, tu salud se ha reducido en 30. Su salud actual es: ${personaje.health}`;
        } else {
            // 34% de probabilidad de encontrarse con Mage o Warrior
            const encounter = Math.random() > 0.5 ? MageSorpresa : WarriorSorpresa;
            if (encounter instanceof Mage) {
                personaje.health += MageSorpresa.poderMagico
                evento = `🧙‍♂️ Te encontraste con un mago! Te dio un hechizo que aumenta tu salud a ${personaje.health}.`;
             } else {
                evento = `🛡️ Te encontraste con un guerrero! Te enseñó una nueva técnica de combate. Ahora tienes un nuevo superPoder en tu inventario de poderes.`;
                if(!personaje._inventory.includes(WarriorSorpresa.superPoder)){
                personaje._inventory.push(WarriorSorpresa.superPoder);}
            }
        }
        setTimeout(() => resolve(evento), 1000);
    });
}