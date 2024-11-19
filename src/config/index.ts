// Importación de módulos
import { Mission, MissionType } from "../models/Mission";
import { Character, PODERES } from "../models/Character";
import { Mage } from "../models/Mage";
import { Warrior, DEFENSA, SUPERPODER } from "../models/Warrior";
import { characters, createCharacter, listCharacters, deleteCharacter, upDateCharacterOK, asignarMision, listarMisiones, asignarPoderApersonaje, asignarMultiplesMisiones, completarMultiplesMisiones2, triggerEvent } from "../controllers/gameController";


console.log("\n 👲  ¡Bienvenidos a SUPER MARIO BROSS!  👲 \n ▶️   Para comenzar deber crear el personaje con el que vas a jugar.\n");

//Gestionamos el personaje principal(creacion, asignacion de misiones y poderes, etc..)
const personaje = createCharacter("Mario")
asignarPoderApersonaje(PODERES.PIZZABOOMERANG, "Mario")
asignarMultiplesMisiones('Mario', MissionType.Main, MissionType.Side)

// Función que simula el flujo principal del juego
async function jugar(): Promise<void> {
    try{
        //Verificamos si completo todas las misiones
        completarMultiplesMisiones2(personaje.name);
    }catch(error){
        console.log("❌ Error al ejecutar el juego: " + error);
    } //finally{
    //     console.log("Juego finalizado, gracias por jugar!");
    // }
}

// Iniciamos el juego
jugar();