import { Character, PODERES } from "../models/Character";
import { Mission, MissionType } from "../models/Mission";
import { Enemy } from "../models/Enemy";
import { sumar10Salud } from "../utils/helpers";

// Gestion de personajes
export let characters: Character[] = [];


// Funcion para crear un personaje nuevo
export function createCharacter(name: string) {
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
export function asignarMision(value: MissionType, nombrePersonaje: string) {
    let personaje = characters.find(personaje => personaje.name === nombrePersonaje)
    let mision = new Mission(value);

    if (personaje) {
        console.log("Mision creada y asignada a: " + personaje.name + ".");        
        mision.setDetallesMision();
        console.log(nombrePersonaje + ", tu mision es: " + mision.description)
        personaje._listaMisiones.push(mision.typeMission);
        return personaje._listaMisiones
    } else if (!personaje) {
        console.log("No existe personaje con ese nombre para asignarle la mision.")
    } 
}

// Funcion para completar misiones
export async function completeMission(personaje: Character, mision: Mission, enemy: Enemy) {
    if (enemy.health <= 0) {
        personaje.level += 1;
        personaje.health += mision.reward
        personaje.experience += mision.reward
        return `Completaste la mision ${mision.typeMission}. Sumaste ${personaje.experience} a tu experiencia. Pasaste al nivel ${personaje.level}.`;
        } else {
        return "Aun no completaste la mision " + mision.typeMission;    
        }
    }


export async function completeMission2(personajeAbuscar:string, mision:MissionType){
let personajeBuscado = characters.find(personaje => personaje.name === personajeAbuscar)
let exito = Math.random() * 0.8
    if (personajeBuscado && exito > 0.5) {
        if (personajeBuscado._listaMisiones.includes(mision)) {
            personajeBuscado.health += 10
            personajeBuscado.experience += 10
            personajeBuscado.level += 1
            personajeBuscado._listaMisiones.splice(personajeBuscado._listaMisiones.indexOf(mision), 1);
            return `Completaste la mision ${mision}. Sumaste ${personajeBuscado.experience} a tu experiencia. Pasaste al nivel ${personajeBuscado.level}.`;
        } else {
        return "No tienes esa mision";    
        }
    }else{
        return `Resultado: No has completado la mision ${mision}`;
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

// Eventos sopresa
export async function evento(): Promise<string> {
    return new Promise((resolve) => {
        const evento = 'Atrapaste el hongo! Tu recompensa es de 10 puntos de vida.'
        setInterval(() => resolve(evento), 2000)
    })
}

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

// Aceptar varias misiones
export async function asignarMultiplesMisiones(character: string, mision1: MissionType, mision2: MissionType, mision3?: MissionType): Promise<void> {
    let personajeBuscado = characters.find(personaje => personaje.name === character)
    const promesa = new Promise((resolve, reject) => {
        if (personajeBuscado?.name === character) {
            if (mision1 && mision2 && mision3) {
                resolve(asignarMision(mision1, personajeBuscado?.name));
                resolve(asignarMision(mision2, personajeBuscado?.name));
                resolve(asignarMision(mision3, personajeBuscado?.name));
            } else if (mision1 && mision2) {
                resolve(asignarMision(mision1, personajeBuscado?.name));
                resolve(asignarMision(mision2, personajeBuscado?.name));
            } else {
                reject('Debes tener por lo menos dos misiones seleccionadas.')
            }
        }
    })
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))
}


export async function completarMultiplesMisiones(character: Character, enemigo: Enemy): Promise<void> {
    const personajeBuscado = characters.find((personaje) => personaje.name === character.name);

    if (!personajeBuscado) {
        console.log(`No se encontró el personaje con nombre "${character}".`);
        return;
    }

    if (!personajeBuscado._listaMisiones || personajeBuscado._listaMisiones.length === 0) {
        console.log(`${personajeBuscado.name} no tiene misiones para completar.`);
        return;
    }

    try {
        for (const mision of personajeBuscado._listaMisiones) {
            if (mision === 'Main') {          
                let mision = new Mission(MissionType.Main)
                mision.setDetallesMision();
                const resultado = await completeMission(personajeBuscado, mision, enemigo)
                console.log(resultado);
            } else if (mision === 'Side') {
                let mision = new Mission(MissionType.Side)
                mision.setDetallesMision();
                const resultado = await completeMission(personajeBuscado, mision, enemigo)
                console.log(resultado);
            } else if (mision === 'Event') {
                let mision = new Mission(MissionType.Event)
                mision.setDetallesMision();
                const resultado = await completeMission(personajeBuscado, mision, enemigo)
                console.log(resultado);
            } 
            
        }
    } catch (error) {
        console.log('Ocurrio un error al completar las misiones.', error);
    }
}

//opcion 2
export async function completarMultiplesMisiones2(character: string): Promise<void> {
    const personajeBuscado = characters.find((personaje) => personaje.name === character);

    if (!personajeBuscado) {
        console.log(`No se encontró el personaje con nombre "${character}".`);
        return;
    }

    if (!personajeBuscado._listaMisiones || personajeBuscado._listaMisiones.length === 0) {
        console.log(`${personajeBuscado.name} no tiene misiones para completar.`);
        return;
    }

    try {
        for (const mision of personajeBuscado._listaMisiones) {
            switch (mision) {
                case MissionType.Main:
                    const resultadoMain = await completeMission2(personajeBuscado.name, MissionType.Main);
                    console.log(resultadoMain);                    
                    break;
                case MissionType.Side:
                    const resultadoSide = await completeMission2(personajeBuscado.name, MissionType.Side);
                    console.log(resultadoSide);
                    break;
                case MissionType.Event:
                    const resultadoEvent = await completeMission2(personajeBuscado.name, MissionType.Event);
                    console.log(resultadoEvent);
                    break;
                default:
                    console.log(`Tipo de misión desconocido: ${mision}`);
                    break;
            }
        }
    } catch (error) {
        console.log('Ocurrió un error al completar las misiones:', error);
    }
}


//  const enemigo = new Enemy('Bowser', 'bla', 100, 'blabla')
// const personaje = createCharacter('Mario')

// asignarMultiplesMisiones("Mario", MissionType.Main, MissionType.Event);
// completarMultiplesMisiones2('Mario')


//  completarMultiplesMisiones('Mario', enemigo)


// const Mario = new Character('Mario')
// console.log(Mario);
// triggerEvent(Mario);


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