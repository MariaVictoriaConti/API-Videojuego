import { Character, PODERES } from "../models/Character";
import { Mission, MissionType } from "../models/Mission";
import { Enemy } from "../models/Enemy";
import { sumar10Salud } from "../utils/helpers";

// Gestion de personajes
export let characters: Character[] = [];
//let listaMisiones: string[] = [];

// Funcion para crear un personaje nuevo
export function createCharacter(name: string,) {
    const character = new Character(name);
    characters.push(character);
    console.log(`Se ha creado el personaje ${name}.\n`);
    return character;
}

// Funcion para mostrar la lista de personajes creados
export function listCharacters() {
    console.log('Listado de personajes: ');
    characters.forEach(character => {
        console.log(`Nombre: ${character.name}, Nivel: ${character.level}, Salud: ${character.health}, Experiencia: ${character.experience}, Inventario: ${character.inventory}, Lista de Misiones: ${character._listaMisiones}.`);
    })
}

// Funcion para eliminar personajes por su nombre
export function deleteCharacter(personaje: string) {
    const indexCharacter = characters.findIndex(character => character.name === personaje)
    if (indexCharacter !== -1) {
        characters.splice(indexCharacter, 1);
        console.log(`Se ha eliminado ${personaje} de la lista de personajes creados.\n`);
    } else {
        console.log("No existe personaje con ese nombre");
    }
}

//CAMBIAR SOLO NOMBRE O CAMBIAR TODOS LOS ATRIBUTOS TIPO RESETAR?
/*
export function upDateCharacter(personajeAbuscar:string, nuevoNombre:string){

const personajeBuscado = characters.find(value => value.name === personajeAbuscar)

if(personajeBuscado){
personajeBuscado.name = nuevoNombre;
console.log(`Se actualizo el nombre de ${personajeAbuscar} por ${nuevoNombre}`);
}else{
    console.log("No encontramos el personaje para actualizar sus datos.");    
}
}*/

// Funcion que permite cambiar atributos de un personaje
export function upDateCharacterOK<T extends keyof Character>(personajeAbuscar: string, atributo: T, nuevoValor: Character[T]): void {
    const personajeBuscadoOK = characters.find(value => value.name === personajeAbuscar)
    if (personajeBuscadoOK) {
        personajeBuscadoOK[atributo] = nuevoValor;
        console.log(`Se ha actualizado el atributo ${atributo} por el valor: ${nuevoValor}.`);
    } else {
        console.log("No encontramos el personaje para actualizar sus datos.");
    }
}

//Gestion de misiones

// Funcion para asignar una mision nueva a un personaje
export function asignarMision(value: MissionType, nombrePersonaje: string){
    let personaje = characters.find(personaje => personaje.name === nombrePersonaje)
    let mision = new Mission(value);

    if (personaje) {
        console.log("Mision creada y asignada a: " + personaje.name + ".");        
        mision.setDetallesMision();
        console.log(nombrePersonaje + ", tu mision es: " + mision.description)
        personaje._listaMisiones.push(mision.typeMission);
        console.log(mision);
        return mision;
    } else if (!personaje) {
        console.log("No existe personaje con ese nombre para asignarle la mision.")
    } 
}

// Funcion para completar misiones
export function completeMission(personaje: Character, mision: Mission, enemy: Enemy) {
    if (enemy.health <= 0) {
        personaje.level += 1;
    }
    if (personaje.level >= mision.difficulty) {
        console.log("Mision " + mision.typeMission + " completada con exito!");
        personaje.health += mision.reward
        personaje.experience += mision.reward
        console.log(`Sumaste ${personaje.experience} a tu experiencia.`);
    } else {
        console.log("Aun no completaste la mision " + mision.typeMission);    
    }
}

// Funcion para mostrar la lista de las misiones que tiene un personaje
export function listarMisiones(personaje: string) {
    let personajeBuscado = characters.find(character => character.name === personaje)
    if (personajeBuscado) {
        console.log("La lista de misiones de " + personajeBuscado.name + " es: " + personajeBuscado._listaMisiones + ".\n");
    } else {
        console.log("No se encontro el personaje.");
    }
}

// Funcion para la gestion de inventario
export function asignarPoderApersonaje(poder: PODERES, personaje: string) {
    let personajeBuscado = characters.find(value => value.name === personaje);
    if (personajeBuscado) {
        if (!personajeBuscado.inventory.includes(poder)) {
            personajeBuscado.inventory.push(poder)
            console.log(`Se agrego el ${poder} al inventario de ${personajeBuscado.name}.\n`);

        } else {
            console.log(`${personajeBuscado.name} ya tenes ese poder en tu inventario.\n`);
        }
    } else {
        console.log("No hay personajes con ese nombre.\n");
    }
}

// Funcion para elegir entre uno u otro evento
// function randomEvent(){
//     const events = ["Come hongo y gana 10 de salud", "Junta Estrellas y gana puntos de experiencia"]
//     const random = events[Math.floor(Math.random() * events.length)]
//     return random;
// }


export async function evento(): Promise<string> {
    return new Promise((resolve) => {
        const evento = 'Atrapaste el hongo! Tu recompensa es de 10 puntos de vida.'
        setInterval(() => resolve(evento), 2000)
        //sumar10Salud(personaje);
    })
}
// const eventoSorpresa = "Come hongo y gana 10 de salud."
export async function triggerEvent(personaje: Character): Promise<void> {
    try {
        console.log('Evento sorpresa!');
        const resultado = await evento();
        let sumarPuntos = await sumar10Salud(personaje)
        console.log(resultado);
        console.log(personaje);
        
    } catch (error) {
        console.log('Ocurrio un error: ', error);
    } finally {
        console.log('Evento sorpresa finalizado.');
    }
}
const Mario = new Character('Mario')
console.log(Mario);
triggerEvent(Mario);



// const personaje2 = createCharacter("luigi")

// listCharacters()

// asignarMision(MissionType.Main, "luigi")
// console.log(personaje2._listaMisiones);


/*
        let mision = new Mission().setTypeMission = value;
//const personaje2 = createCharacter("luigi")
console.log("---------------------------------------");

listCharacters()// check
console.log("---------------------------------------");

asignarMision(MissionType.Main, "mario") //Check
console.log(characters);
console.log("---------------------------------------");

listarMisiones("mario") //check
console.log("---------------------------------------");

completeMission("mario", MissionType.Main, "Bowser") //check

//deleteCharacter("mario") //check
//listCharacters()// check
//console.log("---------------------------------------");


//asignarPoderApersonaje(PODERES.SUPERSALTO, "luigi") //check
//listCharacters()
//asignarPoderApersonaje(PODERES.SUPERSALTO, "luigi") //check que si se repite no lo vuelve a agregar.

//upDateCharacterOK("Mario", "experience", 100);
//console.log(characters);
*/