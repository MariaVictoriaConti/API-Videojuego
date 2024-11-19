# 🕹️ API VIDEOJUEGO 🕹️

### Introducción
En este proyecto se presenta una simulación del juego "Mario Bros." basado en el paradigma de programación orientada a objetos. El lenguaje utilizado es TypeScript y el modelo aplicado es el patrón MVC.

### Instalaciones
Antes de iniciar el programa, se deben realizar las siguientes instalaciones en consola para poder ejecutar el codigo.

1. Instalación de paquete JSON: con el comando `npm init -y`.
2. Instalación de TypeScript: con el comando `npm install -g typescript`.
3. Creación del archivo de configuración: con el comando `npx tsc --init`

### Incialización del programa
Para inicializar el programa, colocar en la terminal de GitBash: `npm start`.

Una vez inicializado, posicionarse en la siguiente ruta: scr/config/ y ejecutar `npx ts-node index.ts`. Con ese comando se derá comienzo a la simulación del juego. 

## 🍄 Simulación del juego 
El programa ya se presenta con una simulación establecida que permite mostrar cómo es el funcionamiento de la aplicación. De todas formas, la simulación puede ser modificada a gusto del usuario, ya que cuenta con las funciones de crear personajes y asignarle misiones. 

### Personaje 
Es el personaje principal del juego y quien va a enfrentarse al enemigo y cumplir con las misiones. Cuenta con nombre, nivel, salud, experiencia, inventario y lista de misiones. 

* Nombre: es el identificador que tendrá nuestro personaje.
* Nivel: por defecto cada personaje comienza en el nivel 1. A medida que vaya completando misiones, suma un nivel. 
* Salud: por defecto cada personaje comienza el juego con el nivel de salud en 100. A medida que recive ataques durante una misión, este nivel va disminuyendo. Si llega a 0, el personaje pierde la misión. Al comienzo de cada misión, la salud vuelve a setearse en 100. 
* Experiencia: por defecto cada personaje comienza el juego con los puntos de experiencia en 0. Con cada misión que complete de forma exitosa, se irá sumando. 
* Inventario: es una lista de armas que posee el personaje. Por defecto se inicializa el personaje con un inventario vacio, pero con la función `asignarPoderPersonaje` se puede elegir entre una lista de 3 poderes cual utilizará. 
* Lista de misiones: es donde se mostrarán la smisiones disponibles que el personaje tiene por realizar. Por defecto se comienza el juego con una lista de misiones vacía y con las funciones `asignarMision` o `asignarMultiplesMisiones` se pueden aceptar todas las misiones que quiera. 

### Misiones
Son las tareas a completar que se le asignan al personaje. Se divide en 3: Main, Side y Event; cada una con una dificultad y reward diferentes. Todas las misiones cuentan con una descripción, una dificultad, una recompensa y un tipo de misión. 

* Descripción: breve explicación sobre la tarea a reliazar en la misión.
* Dificultad: dependiendo de la misión, la dificultad para pasarla puede ser mayor o menor. 
* Recompensa: si se cumple la misión con éxito, se dará una recompensa. 
* Tipo de misión: las misiones se dividen entre Main, Side o Event. Cada una cuenta con características diferentes. 