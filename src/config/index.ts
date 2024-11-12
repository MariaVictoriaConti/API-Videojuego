
///Importamos td
import { Mission, MissionType } from "../models/Mission";
import { Character, PODERES } from "../models/Character";
import { Mage, PODERMAGICO } from "../models/Mage";
import { Warrior, DEFENSA, SUPERPODER } from "../models/Warrior";
import { characters, createCharacter, listCharacters, deleteCharacter, upDateCharacter, asignarMision, listarMisiones, asignarPoderApersonaje,  } from "../controllers/gameController";




// ESQUEMA GENERAL DEL JUEGO
// Bienvenida y explicacion
// 1. Creacion del personaje: 
// 2. Asignar mision al personaje creado
// Debe poder elegir varias misiones
// 3. Iniciar juego en la mision elegida.
// Desarrolo de la mision, en donde entran los enemigos (warrior y mage), batallas y eventos sorpresa
// 4. Completa la mision (con exito) o game over => elegir salir o iniciar de nuevo


console.log("\nBienvenidos a SUPER MARIO BROUSS! \nPara comenzar deber crear el personaje con el que vas a jugar..\n");


//Creamos 2 personajes distintos
const Mario = createCharacter("Mario")
//createCharacter("Luigi")

//Ahora elegimos el superPoder que se sumara al inventario y utilizaras en la mision:
asignarPoderApersonaje(PODERES.PIZZABOOMERANG, "Mario")
// asignarPoderApersonaje(PODERES.SUPERSALTO, "Luigi")
// asignarPoderApersonaje(PODERES.PIZZABOOMERANG, "Mario")

//Ahora le debes asignar una mision al personaje elegido para jugar:
asignarMision(MissionType.Main, "Mario")
// asignarMision(MissionType.Event, "Mario")
// asignarMision(MissionType.Side, "Luigi")


//COMO HACER PARA CONECTAR MISION QUE SE ASIGNA CON EL ENEMIGO QUE TIENE ESA MISION?? DNDE PONEMOS UN IF? O COMO HACEMOS? ------------>BERNI

const enemigo = new Warrior("Bowser", SUPERPODER.LANZAFUEGO, DEFENSA.CAPARAZONPROTECTOR)

Mario.atacarContrincante();
console.log("-------------------------");

console.log(enemigo);
enemigo.recibirAtaqueSinDefensa()
console.log(enemigo);
enemigo.ataque();
console.log("-------------------------");

Mario.recibirAtaqueSinDefensa()
console.log(Mario);





















//Creamos el archienemigo que corresponde a esa mision 
//const Bowser = new Warrior
//const Donkey kong = new Mage




//FALTA VER COMO APLICAMOS UPDATECHARATER PORQUE NO LE ENCUENTRO SENTIDO A CAMBIAR SOLO EL NOMBRE, EN TODO CASO PARA ESO SE USA EL SETTER DE personaje.NAME = NUEVONOMBRE NOMAS.

//Listar misiones elegidas:
// listarMisiones("Mario")
// listarMisiones("Luigi")

//Eliminamos uno de los personajes creados:
//deleteCharacter("Luigi");

//Listamos los personajes creados hasta el momento:
//listCharacters();

//Mario entra a la mision y comienza la batalla con:















//hay que ver de hacer un array en vez de enum de typeMission pq sino no deja elegir mas de 1.. o como hacemos?












