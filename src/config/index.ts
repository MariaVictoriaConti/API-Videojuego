import { Mission, MissionType } from "../models/Mission";
import { Character, PODERES } from "../models/Character";
import { Mage, PODERMAGICO } from "../models/Mage";
import { Warrior, DEFENSA, SUPERPODER } from "../models/Warrior";
import { Enemy } from "../models/Enemy";
import { characters, createCharacter, listCharacters, deleteCharacter, upDateCharacterOK, asignarMision, listarMisiones, asignarPoderApersonaje, asignarMultiplesMisiones, completarMultiplesMisiones2, triggerEvent } from "../controllers/gameController";



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
    //await combate(personaje, enemigo);  // El jugador pelea contra un enemigo

    //Verificamos si completo todas las misiones //FALTA VER PORQUE NO SE EJECUTA BIEN ESTE COMPLETAR MULTIPLES MISIONES..
    completarMultiplesMisiones2(personaje.name);

}

// Iniciamos el juego
jugar();