# Challenge Finciero Frontend

## ¿Qué has aprendido en esta semana?
[Mobx](https://github.com/mobxjs/mobx). Creo que es bueno conocer las distintas alternativas que existen repecto a los manejadores de estado para aplicaciones en javascript. Mobx siempre ha tenido buenas referencias por ser más directo y menos ceremonioso que [Redux](https://redux.js.org/) e incluso con mejor perfomance que éste último [profeta Dan tweet](https://twitter.com/dan_abramov/status/733705049902329856). Por otro lado Mobx representa una manera distinta de poder organizar el manejo del estado en las aplicaciones.

```js
import { observable, computed } from 'mobx'

class Person{
  id = uuid.v1()
  name = ''
  @observable jobTitle = ''
  @observable salary = 0 
}
```

Su principal ventaja es que se usa dentro de las clases o componentes. Esta en cierto modo más integrado que Redux. Las reseñas siempre indican que es incluso más rápido en términos de desarrollo. 

Personalmente me parece atractivo probar e ir verificando alternativas a un tema que es central en la programación front -el manejo del estado-. Tambien le permite a uno mantener el músculo del aprendizaje constante entrenado.

También he estado revisando de manera muy somera [Svelte](https://svelte.technology/guide). Me interesa la aproximacion del framework al problema de la construcción de interfaces programáticas con javascript. Básicamente entrega pequeños pedazos de mini aplicaciones en tiempo de construcción, evitando la posibles penalizaciones de perfomance en tiempo de ejecución que frameworks como [React](https://reactjs.org/) podría tener.

## ¿Qué es lo que te interesa de la programación?

La programación es interesante porque es una puerta de entrada a un mundo de oportunidades en términos creativos. El computador es quizás una de las maquinas mas importantes del siglo XX, sino la más importante, y la oportunidad que tenemos los programadores de indicarle a esta máquina qué hacer, cómo hacerlo y cómo visualizar lo que queremos que haga, enriquece mucho, desde el punto de vista de la satisfacción personal, la visión que uno puede ir integrando respecto de su trabajo. Por lo demás la programación es otra manera, más sofisticada si se quiere, de resolver puzzles, lo cual la vuelve una actividad -para quiénes estamos apasionados por ella- bastaten lúdica. 

De manera un poco más teórica, me interesan los conceptos y procedimientos analíticos sobre los cuales los lenguajes de programación operan, y que hacen posibe el producir código con altos grados de legilibidad y abstracción, que luego son traducidos a instrucciones discretas que la máquina entiende.

Si lo pudiera sintetizar escribiría que la programación me es atractiva debido a que el mundo creativo que se abre al saber programar, y las posibilidades de producción que el oficio entrega (crear cosas desde la potencia creativa), junto con el asombro y curiosidad que me producen los lenguajes de programación y la manera que tienen de traducir las reflexiones de una persona, en lenguaje máquina y por ende en un producto o entregable, son probablemente los elementos que más me hacen sentido desde un punto de vista puramente vocacional.

## ¿Podría describir algún problema técnico que haya resuelto recientemente?

El problema técnico más reciente que tuve que enfrentar fue el testear una aplicación front en React. Fue un desafío, ya que jamás habia testeado en el front, menos utilizando una libreria de UI como React. He realizado anteriormente testeos unitarios en Node, pero las similtudes son escasas en cuanto a lo que se codea y como uno se aproxima al test. 

La problemática fundamental cuando recién me enfrente a esta situación era entender como se llevaba a cabo el testeo del front. Mis conocimientos al respecto eran escasos. Sabía que el testeo en el front era complejo debido a que testear componentes e interacciones con vistas, antes de la llegada de los frameworks de segunda generación como React o Angular, era bastante engorroso, debido a la necesidad de usar navegadores sin cabeza para, programáticamente navegar sobre las apps. 

El enfoque en React usando [Enzyme](https://github.com/airbnb/enzyme) y [Jest](https://jestjs.io/) es distinto y ciertamente práctico. Debido al desacomplado del módulo que hacer el render de los componentes, es posible testearlos sin tener que levantar toda la libreria de React, haciendo posible el trabajo en un entorno un poco más liviano. Debido a esta ventaja, Enzyme y Jest hace posible el render virtual de los componentes, tanto de manera superficial o profunda (`shallow` o `mount` rendering), rendereando los componentes hijos, permitiendo el testeo de métodos internos, vistas, y comportamientos en general. El desafío de trabajar virtual y programáticamente con los componentes creados, asi como los niveles de abstracción que aparecen al momento de construir los test, hicieron que al comienzo el tópico en sí, significara una empresa interesante de abordar, en términos del aprendizaje de algo que no estaba en mi cajón de herramientas como desarrollador. Fue ciertamente una experiencia enriquecedora.

## ¿Qué es lo más genial que ha programado y qué es lo que más le enorgullece de ello?

Hubo un tiempo que estuve muy enfocado en aprender Java, JAX-RS, Hibernate y hacer web scrapping con java, para enviar los datos 'scrapeados' a una base de datos, y exponerlos públicamente con una API REST. Lo 'genial' del asunto fue programar el scrapper usando procesos paralelos en Java. Para probarlo diseñe una página con varias subpáginas, de manera de tener en los logs de NodeJS, los tiempos que tardaba el scrapper en hacer la visita al sitio, simulando los tiempos de 'ingesta' del contenido de un humano. Eso fue relativamente complejo, para mis conocimientos de ese entonces. Me enorgullece el haber podido lograr una 'simulación' de la navegación relativamente cercana a la de un humano. es decir, que el scrapper no hiciera ingesta del html de todas las subpáginas en cuestión de segundos, cosa de bloquear circunstancialmente el servidor. Creo que lo más complejo fue utilizar la programación paralela en Java con la libreria de scrapper, y hacer correctamente, con cierto grado de generalización el **DOM traversing**.

## ¿Cuáles son sus partes favoritas de las herramientas de desarrollo que usa?

El estilo que tiene Firefox en la consola me resulta del todo agradable. Más allá de eso, la organización de los *dev-tools* de FF es bastante comoda, sobre todo la visualización de los elementos asociados al almacenamiento local del navegador, el depurador de codigo, etc. 

En Visual Studio Code me agradan los atajos de teclado del editor, que permiten una experiencia similar -aunque no tan completa- a los usuarios de vim, del poder codear sin tocar el trackpad o el mouse. La terminal integrada del editor es un plus, aunque prefiero *iterm* con *zsh* (hubo un tiempo que use mucho *fish* pero estoy más acostumbrado a *zsh*).

La verdad es que soy un poco discreto en cuanto al uso de mis herramientas de desarrollo. No suelo configurar mucho. Privilegio el llegar y codear, más que hacer tweaks, aunque siempre algunos son bien necesarios. Es uso de *Prettier* es un **must* para trabajar con el *JSX*, más la habilitación de *emmet* para poder usar los shortcuts en *JSX*

## ¿Tiene algún proyecto personal? ¿De qué tipo?

Estoy diseñando un generador de modelos relacionales usando JSON (no muy útil pero divertido de llevarse a cabo). Actualmente tengo parte de la API en node, pero me gustaria poder migrar todo a **GO**, ya que este año mi gran meta es consolidar mis conocimientos en el lenguaje. Por mis estudios tampoco he podido darle muy duro a un *toy project* o destinarle el tiempo que me gustaría. Pero en el mediano plazo, esa idea de aplicación es la que me tiene más motivado.

## ¿Cuál es su funcionalidad favorita de Internet Explorer?

Hacer `polyfill` de javascript :)

## ¿Cómo te gusta tu café?

Idealmente sellado en su envase, a la espera de una taza que no se llenará, con agua a temperatura ambiente, a la espera de su hervor, para proceder a irrigar las hebras de una bolsa de té verde.

Por razones que escapan a mi comprensión, el cafe me hace mal. El té verde es mi droga.

## Proponga una arquitectura la cual permita desarrollar y mantener de mejor forma los reducers y los componentes. ¿Por qué decides usar este tipo de arquitectura? ¿Qué ventajas tiene sobre el resto de propuestas que hay en el mercado? ¿Qué desventajas tiene?

### Disclaimer

> Las siguientes dos respuestas están basadas en mi experiencia usando reducers con un manejador de estado como Redux, más que en la noción del uso funciones reducers, que son funciones deterministicas que dados el mismo input, siempre producirán el mismo resultado. 

Asumiendo que usaré Redux como manejador de estado mi propuesta es colocar los reducers al interior del directorio de cada componente conectado. 

```
_ containers
|_ Login
  |_ Login.js
  |_ LoginReducer.js
```

Luego en el directorio `src` (asumiendo que estamoas usando Create React App) tenemos:

```
_ index.js
_ rootReducers.js
```

### Ventajas

* rootReducer en el root del directorio. Mayor claridad que guardar el index que alberga todos los reducer al interior de un directorio `reducers`. Dado que el `rootReducer` esta en el directorio principal, genera una relacion de importación en descenso.
* cada componente conectado con su reducer correspondiente. La idea es que el directorio del componente tenga todos loa archivos relevantes: reducer y test.
* mejora el entendimiento de la organización del proyecto. Se atiende y modificar cada reducer que esta asociado a cada componente conectado. Se mantiene asi una estructura de directorios mas integrada y con menos ramificaciones

### Desventajas

* si el proyecto tiene una estructura de directorios con muchos subniveles y/o componentes hijos, a menos que el diseñador no lo deje estipulado, otro desarrollador podria colocar reducers en cada subcomponente conectado. Se subentiende que deberia haber un reducer por cada contexto de un componente.
* para aplicaciones mas grandes o con muchos reducers, puede resultar mas comodo o familiar para el desarrollador tener un directorio que liste todos los reducers. La propuesta elimina esa conveniencia en favor de la integracion de las partes que componen holisticamente cada sección del sistema; ej: cada componente tiene su reducer, su test, y sus vistas funcionales de ser necesarias.

## UPDATE 16 DE JULIO

Esta fue una de las preguntas más díficiles de responder. Inicialmente me incline por la solución que di más arriba por dos razones.

1. Primero porque, así como me lo hiciste notar respecto a tu observación de la replicación de la estructura de directorios que hice para generar los test del manager, me parecia mucho más prudente que si los test van a estar en el directorio del componente, los **Reducer** estuvieran también en los directorios donde correspondiera. Otorga cierta ventaja al momento de navegar por el proyecto.

2. Porque me parecio interesante que también desde el punto de vista visual, los compoonentes conectados en acciones y no solamente en estado, estuvieran marcados por la presencia del archivo reducer.

Sin embargo con el pasar de los dias reconsideré mi decisión. Si bien no le encuentro nada de malo a ésta aproximación, viendo otros proyectso, el patrón que se reitera es el directorio **reducers**, el directorio **actions**, y con ciertas discrepancias, entre posicionar el **rootReducer** en el root del **src** en el caso de ser una app hecha desde **CRAPP**, o al interior de la carpeta **reducers**. Por lo demás, la documentación de Redux y los mismos ejemplos siguen este patrón con algunas variaciones.

A mi modo de ver, este patrón es cómodo desde el punto de vista de quién ha aprendido **Redux** desde la documentación de la libreria, el cual, al ser replicado en varios proyectos, conforma una suerte de *costumbre adquirida* para organizarce a este respecto. De todos modos ambas propuestas me parecen factibles; a gusto del consumidor.

## Implemente un formulario el cual esté conectado a un reducer y que además se pueda usar como componente en alguna aplicación, especificaciones del formulario:

- input de texto para ingresar numero de tarjeta (tarjeta de crédito).
- input de texto para ingresar fecha de expiración (mm/YY).
- input de texto para ingresar CVV (código verificador).
- input de texto para ingresar código único identificador de usuario.

El endpoint es autenticado mediante el header `Authorization` con valor `Bearer <token>` el cual le será entregado personalmente para poder hacer el desarrollo de este ejercicio.

API de test: https://fakeprovider.herokuapp.com

### Request
**PATCH /cards/{id}/info**
body:
```json
{
    "card_number": "",
    "exp_date": "",
    "cvv": "",
    "reference_id": "",
}
```
### Successful Response
**StatusCode: 200**
body:
```json
{
    "card_number": "",
    "exp_date": "",
    "cvv": "",
    "reference_id": "",
    "updated_at": "",
}

```
### Successful Response
**StatusCode: 400|401|500**
body:
```json
{
    "message": "",
    "code": "",
}

```

Tienes 24 horas para completar el desafío, enviar código a rf@finciero.com
