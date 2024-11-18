import { Mission, MissionType } from "../models/Mission";
import { Character, PODERES } from "../models/Character";
import { Mage, PODERMAGICO  } from "../models/Mage";
import { Warrior, DEFENSA, SUPERPODER } from "../models/Warrior";
import { Enemy } from "../models/Enemy";
import { characters, createCharacter, listCharacters, deleteCharacter, upDateCharacterOK, asignarMision, listarMisiones, asignarPoderApersonaje, completeMission, asignarMultiplesMisiones, completarMultiplesMisiones, completarMultiplesMisiones2 } from "../controllers/gameController";




    // Método que simula un combate que toma 2 segundos
    async function combate(personaje: Character, enemigo: Enemy): Promise<void> {
        console.log(`${personaje.name}} está luchando contra ${enemigo.name}...`);
        
        // Esperamos 2 segundos antes de resolver el combate
        await new Promise(resolve => setTimeout(resolve, 2000));

        
        // const danoPersonaje = Math.floor(Math.random() * 20) + 1;
        // const danoenemigo = Math.floor(Math.random() * 20) + 1;

        // personaje.health -= danoPersonaje;
        // enemigo.health -= danoenemigo;

        // console.log(`${personaje.name} recibió ${danoPersonaje} de daño.`);
        // console.log(`${personaje.name} ahora tiene ${personaje.health} de vida.`);

        //Pensaba hacer un do while
        let arrayDeAtaques = [() => personaje.atacarContrincante(), () => enemigo.atacarContrincante(), () => personaje.recibirAtaqueConDefensa(), () => enemigo.recibirAtaqueConDefensa, personaje.recibirAtaqueSinDefensa, enemigo.recibirAtaqueSinDefensa]

    
while (enemigo.health > 0 && personaje.health > 0){
    let randomBatalla = Math.floor(Math.random() * arrayDeAtaques.length);
    arrayDeAtaques[randomBatalla]();
    await new Promise(resolve => setTimeout(resolve, 2000));
};
        
        if (personaje.health <= 0) {
            console.log(`${personaje.name} ha perdido la mision..`);
        } else {
            console.log(`${personaje.name} ha superado la mision..`);
        }
    }

//evento Sorpresa
// const encontrado = Math.random() > 0.5 ? 'un objeto valioso' : 'un enemigo peligroso';
// console.log(`${personaje.name} ha encontrado ${encontrado}.`);





// Función que simula el flujo principal del juego
async function jugar(): Promise<void> {
    console.log("\nBienvenidos a SUPER MARIO BROUSS! \nPara comenzar deber crear el personaje con el que vas a jugar..\n");

    //Gestionamos el personaje principal(creacion, asignacion de misiones y poderes, etc..)
    const personaje = createCharacter("Mario")
    asignarPoderApersonaje(PODERES.PIZZABOOMERANG, "Mario")
    asignarMultiplesMisiones('Mario', MissionType.Main, MissionType.Side)

//Creamos el archienemigo que corresponde a esa mision
    const enemigo = new Enemy('Bowser', 'LanzaLLAMA', 100, 'CAPARAZON PROTECTOR');

    // Simulamos el combate
    await combate(personaje, enemigo);  // El jugador pelea contra un enemigo

    //Verificamos si completo todas las misiones //FALTA VER PORQUE NO SE EJECUTA BIEN ESTE COMPLETAR MULTIPLES MISIONES..
    completarMultiplesMisiones(personaje, enemigo);
}

// Iniciamos el juego
jugar().then(() => {
    console.log("Juego terminado.");
});