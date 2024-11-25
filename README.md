# 🕹️ API VIDEOJUEGO 🕹️

### Introducción
Este proyecto se presenta como una simulación del juego "Super Mario Bros" tomando como base de programación el paradigma de programación orientada a objetos. Se basa en crear un personaje (Mario o Luigi) quienes deben cumplir diferentes misiones donde combaten contra enemigos para lograr pasar de nivel y recibir una recompensa. 

El proyecto fue desarrollado por Maria Victoria Conti, Paula Laurnagaray  y Sofía Sachetti. Se trabajó de manera colaborativa utilizando el control de versiones de Git y guardando el desarrollo en un repositorio remoto de Github. 

### Tecnologías utilizadas
- TypeScript
- Node.js
- Git
- GitHub

### Instalaciones
Antes de iniciar el programa, se deben realizar las siguientes instalaciones en consola para poder ejecutar el codigo.

1. Instalación de paquete JSON: con el comando `npm init -y`.
2. Instalación de TypeScript: con el comando `npm install -g typescript`.
3. Creación del archivo de configuración: con el comando `npx tsc --init`

### Incialización del programa
Para inicializar el programa, colocar en la terminal de GitBash: `npm start`.

Una vez inicializado, posicionarse en la siguiente ruta: scr/config/ y ejecutar `npx ts-node index.ts`. Con ese comando se derá comienzo a la simulación del juego. 

## 🍄 Simulación del juego 
El programa ya se presenta con una simulación establecida que permite mostrar cómo es el funcionamiento de la aplicación. De todas formas, la simulación puede ser modificada a gusto del usuario, ya que cuenta con las funciones de crear personajes y asignarle poderes y misiones. 

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

### Enemy
Es el contrincante a quien se enfrenta el Personaje principal. Cambia según las misiones y puede enviar ataques hacia el personaje y afectar su salud, así como también puede recibir ataques y defenderse. Es derrotado cuando su salud llega a 0, ahi es cuando se da por finalizada la misión.

### Mage y Warrior
Son personajes que aparecen de forma sorpresiva durante las misiones y ayudan al personaje. En el caso de Mage, ayuda a aumentar la salud con un hechizo. En caso de Warrior, le enseña al personaje una nueva forma de ataque y le obsequia un nuevo poder para su inventario. 

## Ejemplos de uso
Para comenzar el juego es necesario la creación de al menos un personaje. Para esto usamos la función createCharacter, pasando como parámetro el nombre que tendrá el personaje. 

### Creación de personaje
Ejemplo de comando para la creación de un personaje: `createCharacter('Mario')`. Aquí estamos creando un personaje cuyo nombre será 'Mario'. Por defecto, su salud será seteada en 100, lo mismo que nivel y experiencia estarán seteados en 1. Se pueden crear la cantidad de personajes que se desee. 

### Asignar poderes a un personaje
Al personaje podemos asignarle un poder para que comience sus misiones. Esto se pude realizar con la función asignarPoderAPersonaje de la siguiente forma: `asignarPoderApersonaje(PODERES.PIZZABOOMERANG, "Mario")`. En este caso la función necesita de dos parámetros: el primero es el tipo de poder que se le va a asignar, y debe ser llamando al enum `PODERES` seguido de un punto. Ahí es donde aparecerán las opciones de poderes disponibles. El segundo parámetro a ingresar es el nombre del personaje al cual se le asignará el poder, que debe estar en formato string (entre comillas). 

### Ver lista de personajes
Si se desea ver la lista de los personajes ingresados, se puede hacer llamando a la función `listCharacter()`. Esto mostrará en consola la lista completa de personajes creados con su nombre, nivel, salud, experiencia, inventario y lista de misiones. 

### Editar un personaje
Se pueden editar los atributos de los personajes a través de la función upDateCharacterOK, ingresando como parámetro el nombre del personaje a editar, seguido del atributo que se quiera cambiar y por último el nuevo atributo. Ejemplo de uso: `upDateCharacterOK('Mario', 'name', 'Luigi')`, de esta forma, el personaje llamado "Mario" ahora pasa a llamarse "Luigi".

### Eliminar personaje
Se puede eliminar un personaje de la lista de personajes creados llamando a la función deleteCharacter y pasandole por parámetro el nombre del personaje que deseamos eliminar. Por ejemplo: `deleteCharacter('Mario')`.

### Asignar una sola misión
Al momento de asignarle misiones a un personaje podemos hacerlo de dos formas diferentes. La primera es con la función asignarMision de la siguiente forma: `asignarMision(TypeMission.Main, 'Mario')`, que asignará sólo la misión que pasemos como parámetro. Se debeerá utilizar el enum `TypeMission`, que tendrá como opciones el tipo de misión que se pueden elegir (Main, Side, Event). Como segundo parámetro pasamos como string el nombre del personaje al que le asignaremos la misión (en este caso, `'Mario'`).

### Asignar varias misiones
La segnda forma de asignar una misión es con la función asignarMultiplesMisiones de la siguiente forma: `asignarMultiplesMisiones('Mario', MissionType.Main, MissionType.Side)`. Con esta función podemos asignar varias misiones a un mismo personaje. Toma como parámetro el nombre en string del personaje al que se le asignarán las misiones, seguido por dos misiones como mínimo, que se llaman a través del enum MissionType. 

### Ver lista de misiones
Para saber cuales son las misiones que un personaje tiene asignadas y aun sin completar se puede utilizar la función listarMisiones, pasando como parámetro el nombre del personaje que se desea consultar. Por ejemplo: `listarMisiones('Mario')`, que devolverá una lista de las misiones que el personaje 'Mario' debe completar.

## Comentario final
Al comenzar el desarrolo del videojuego decidimos encararlo en base al famoso juego Super Mario Bros teniendo en cuenta su modalidad y personajes pero ajustandolo a lo que se pedia en la consigna. Durante el proceso, nos dimos cuenta que estabamos enfocando el desarrolo en hacer un video juego real, donde los usuarios pudieran interactuar entre personaje elegido y enemigos, pero nos estabamos alejando del punto centran en la consigna que era la de realizar una SIMULACION de videojuego. 

Por esto, decidimos implementar otra metodologia que fue usar un Math random que al ejecutar el programa realice diferentes tipos de combates, dando asi tambien diferentes resultados. Alli tambien incluimos los diferentes tipos de eventos sorpresa y apariciones de personajes especiales en el juego (el Warrior y el Mage que derivan de la clase Character). De esta manera conseguimos desarrollar una simulacion de Videojuego dinamica y entretenida. Aplicamos el patron de diseño MVC donde podemos ver de manera modularizada las diferentes partes que componen el videojuego. Estamos satisfechas con el producto final pero pensamos que siempre puede mejorarse y esperamos que disfruten del resultado como nosotras.