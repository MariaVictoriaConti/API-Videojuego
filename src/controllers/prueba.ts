type Mission = {
    name: string;
    experience: number;
    successRate: number; // Valor entre 0 y 1 que determina la probabilidad de éxito.
};

type Character = {
    name: string;
    level: number;
    experience: number;
};

// Función que simula una misión con una promesa
function executeMission(mission: Mission): Promise<number> {
    return new Promise((resolve, reject) => {
        const success = Math.random() < mission.successRate; // Determinar éxito al azar
        setTimeout(() => {
            if (success) {
                resolve(mission.experience); // Si tiene éxito, devuelve la experiencia ganada
            } else {
                reject(`Falló en la misión: ${mission.name}`); // Si falla, lanza un error
            }
        }, 1000); // Simular un tiempo de espera para completar la misión
    });
}

// Función que permite a un personaje aceptar varias misiones encadenadas
function acceptMissionsWithPromises(character: Character, missions: Mission[]): void {
    let totalExperience = 0;

    missions.reduce((promiseChain, mission) => {
        return promiseChain
            .then(() => executeMission(mission))
            .then((experience) => {
                console.log(`¡Completó la misión "${mission.name}" y ganó ${experience} de experiencia!`);
                totalExperience += experience;
            })
            .catch((error) => {
                console.error(error);
                throw error; // Detiene la cadena si hay un error
            });
    }, Promise.resolve())
    .then(() => {
        character.experience += totalExperience;
        console.log(`${character.name} ahora tiene ${character.experience} puntos de experiencia.`);
    })
    .catch(() => {
        console.log(`${character.name} no pudo completar todas las misiones.`);
    });
}

// Alternativa con callbacks para manejar misiones secuenciales
function acceptMissionsWithCallbacks(
    character: Character,
    missions: Mission[],
    onComplete: (character: Character) => void,
    onError: (error: string, character: Character) => void
): void {
    let totalExperience = 0;
    let currentMissionIndex = 0;

    function handleMission() {
        if (currentMissionIndex < missions.length) {
            const mission = missions[currentMissionIndex];
            executeMission(mission)
                .then((experience) => {
                    console.log(`¡Completó la misión "${mission.name}" y ganó ${experience} de experiencia!`);
                    totalExperience += experience;
                    currentMissionIndex++;
                    handleMission(); // Continúa con la siguiente misión
                })
                .catch((error) => {
                    onError(error, character); // Manejar el error con el callback
                });
        } else {
            character.experience += totalExperience;
            onComplete(character); // Llamar al callback de éxito al final
        }
    }

    handleMission(); // Comenzar la secuencia
}

// // Ejemplo de uso
const missions: Mission[] = [
    { name: "Rescatar al aldeano", experience: 50, successRate: 0.8 },
    { name: "Defender el castillo", experience: 100, successRate: 0.6 },
    { name: "Derrotar al dragón", experience: 200, successRate: 0.4 },
];

const hero: Character = { name: "Arthas", level: 1, experience: 0 };

// // Uso con promesas
// acceptMissionsWithPromises(hero, missions);

// Uso con callbacks
acceptMissionsWithCallbacks(
    hero,
    missions,
    (character) => {
        console.log(`${character.name} completó todas las misiones y ahora tiene ${character.experience} puntos de experiencia.`);
    },
    (error, character) => {
        console.error(`Error: ${error}. ${character.name} falló y no pudo completar todas las misiones.`);
    }
);
