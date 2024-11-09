import { Character, PODERES } from "../models/Character";
import { Mission, MissionType } from "../models/Mission";


export class GestionDePersonajes { //Yo esta clase la sacaria pq la consigna no pide una clase para el gameController.. dice directamente hacer las funciones, VER ABAJO LA OPCION QUE HICE
    private characters: Character[] = [];
    private _listaMisiones: string[] = [];

    createCharacter(name: string,): void {
        const character = new Character(name);
        this.characters.push(character);
    }

    listCharacter(): void {
        console.log('Listado de personajes: ');
        this.characters.forEach(character => {
            console.log(`Nombre: ${character.name}, Nivel: ${character.level}, Salud: ${character.health}, Experiencia: ${character.experience}`);
        })
    }

    //falta upDateCharacter():

    //Agrego deleteCharacter
    deleteCharacter(personaje: string): void {
        const findCharacter = this.characters.findIndex(character => character.name === personaje)
        if (findCharacter !== -1) {
            const index = findCharacter
            this.characters.splice(index, 1);

        } else {
            console.log("No existe personaje con ese nombre");
        }
    }

    public asignarMision(value: MissionType): void {
        const mision = new Mission().setTypeMission = value
        this._listaMisiones.push(mision)
    }

    public get listarMisiones(): string[] {
        console.log("Tu lista de misiones es: ");        
        return this._listaMisiones;
    }
}

// const personajes = new GestionDePersonajes() //aca estamos creando un personaje
// personajes.createCharacter("Mario")
// console.log(personajes)
// console.log("-------------------");

// personajes.asignarMision(MissionType.Main)
// console.log(personajes.listarMisiones);

// personajes.createCharacter('Mario')
// personajes.createCharacter('Luigi')
// personajes.listCharacter()
// personajes.deleteCharacter("Mario")
// personajes.listCharacter()




////////////////////////////////////////////////////////////////


//////7/////prueba sin hacer una clase Gestion de Personajes y haciendo funciones x separado, creo que queda mas simple y facil a la hora de ejecutar///////////////7

let characters: Character[] = [];
//let listaMisiones: string[] = [];

function createCharacter(name: string,): void {
    const character = new Character(name);
    characters.push(character);
}

function listCharacters(): void {
    console.log('Listado de personajes: ');
    characters.forEach(character => {
        console.log(`Nombre: ${character.name}, Nivel: ${character.level}, Salud: ${character.health}, Experiencia: ${character.experience}, Inventario: ${character.inventory}, Lista de Misiones: ${character._listaMisiones}.`);
    })
}

function deleteCharacter(personaje: string): void {
    const indexCharacter = characters.findIndex(character => character.name === personaje)
    if (indexCharacter !== -1) {
        characters.splice(indexCharacter, 1);

    } else {
        console.log("No existe personaje con ese nombre");
    }
}

//CAMBIAR SOLO NOMBRE O CAMBIAR TODOS LOS ATRIBUTOS TIPO RESETAR?
function upDateCharacter(personajeAbuscar:string, nuevoNombre:string){

const personajeBuscado = characters.find(value => value.name === personajeAbuscar)

if(personajeBuscado){
personajeBuscado.name = nuevoNombre;
console.log(`Se actualizo el nombre de ${personajeAbuscar} por ${nuevoNombre}.`);
}else{
    console.log("No encontramos el personaje para actualizar sus datos.");    
}
}

//Gestion misiones
function asignarMision(value: MissionType, nombrePersonaje:string): void {
    let personaje = characters.find(personaje => personaje.name === nombrePersonaje)
    console.log(nombrePersonaje + " tu mision es: ")    
    let mision = new Mission().setTypeMission = value

    if (personaje){
        personaje._listaMisiones.push(mision);
    }else{
        console.log("No existe personaje con ese nombre para asignarle la mision.");
        
    }
}

function listarMisiones(personaje:string) {
    let personajeBuscado = characters.find(character => character.name === personaje)
    if(personajeBuscado){
        console.log("La lista de misiones de " + personajeBuscado.name + " es: " + personajeBuscado._listaMisiones);        
    }else{
    console.log("No se encontro el personaje.");    
    }
}

//gestion INVENTARIO / Poderes / Armas
function asignarPoderApersonaje(poder:PODERES, personaje:string){
let personajeBuscado = characters.find(value => value.name === personaje);
if(personajeBuscado){
    if(!personajeBuscado.inventory.includes(poder)){
personajeBuscado.inventory.push(poder)
    }else{
        console.log("Ya tenes ese poder en tu inventario.");
    }}else{
        console.log("No hay personajes con ese nombre.");
}
}





const personaje1 = createCharacter("mario") //Check
const personaje2 = createCharacter("luigi")
console.log("---------------------------------------");

listCharacters()// check
console.log("---------------------------------------");

asignarMision(MissionType.Main, "mario") //Check
console.log(characters);
console.log("---------------------------------------");

listarMisiones("mario") //check
console.log("---------------------------------------");

deleteCharacter("mario") //check
listCharacters()// check
console.log("---------------------------------------");


asignarPoderApersonaje(PODERES.SUPERSALTO, "luigi") //check
listCharacters()
asignarPoderApersonaje(PODERES.SUPERSALTO, "luigi") //check que si se repite no lo vuelve a agregar.

upDateCharacter("luigi", "mario");
console.log(characters);


//Falta upDateCharacter() y falta completeMission()

