# Challenge Finciero Frontend

## ¿Qué has aprendido en esta semana?
[Mobx](https://github.com/mobxjs/mobx). Creo que es bueno conocer las distintas alternativas que existen repecto a los manejadores de estado para aplicaciones en javascript. Mobx siempre ha tenido buenas referencias por ser más directo y menos ceremonioso que [Redux](https://redux.js.org/) e incluso con mejor perfomance que éste último ([profeta Dan tweet](https://twitter.com/dan_abramov/status/733705049902329856)]). Por otro lado Mobx representa una manera distinta de poder organizar el manejo del estado en las aplicaciones.

```js
import { observable, computed } from 'mobx'

class Person{
  id = uuid.v1()
  name = ''
  @observable jobTitle = ''
  @observable salary = 0 
}
```

Su principal ventaja es que se usa dentro de las clases o componentes. Esta en cierto modo mas integrado que Redux. Las reseñas siempre indican que es incluso mas rápido en términos de desarrollo. 

Personalmente me parece atractivo probar y ir verificando alternativas a un tema que es central en la programación front -el manejo del estado-. Tambien le permite a uno mantener el músculo del aprendizaje constante entrenado.

Tambien he estado revisando de manera muy somera [Svelte](https://svelte.technology/guide). Me interesa la aproximacion del framework al problema de la construcción de interfaces programáticas con javascript. Basicamente entrega pequeños pedazos de mini aplicaciones en tiempo de construcción, evitando la posibles penalizaciones de perfomance en tiempo de ejecución que frameworks como [React](https://reactjs.org/)

## ¿Qué es lo que te interesa de la programación?

La programación es interesante porque es una puerta de entrada a un mundo de oportunidades en términos creativos. El computador es quizás una de las maquinas mas importantes del siglo XX, sino la más importante, y la oportunidad que tenemos los programadores de indicarle a esta máquina qué hacer, cómo hacerlo y cómo visualizar lo que queremos que haga, es sin duda una oportunidad única en términos de las posibilidades que se abren. 

De manera un poco más teórica, me interesan los conceptos y procedimientos analíticos sobre los cuales los lenguajes de programación operan, y que hacen posibe el producir código con altos grados de legilibidad y abstracción, que luego son traducidos a instrucciones discretas que la máquina entiende.

En síntesis: el mundo creativo que se abre al saber programar y las posibilidades de producción que el oficio entrega, y el asombro y curiosidad que me producen los lenguajes de programación y la manera que tienen de traducir las reflexiones de una persona, en lenguaje máquina y por ende en un producto o entregable.

## ¿Podría describir algún problema técnico que haya resuelto recientemente?

El problema técnico más reciente que tuve que enfrentar fue el testear una aplicación front en React. Fue un desafío, ya que jamás habia testeado en el front, menos utilizando una libreria de UI como React. He realizado anteriormente testeos unitarios en Node, pero las similtudes son escasas. 

El problema fundamental cuando recién me enfrente a esta situación era entender como se llevaba a cabo el testeo del front. Mis conocimientos al respecto eran escasos. Sabía que el testeo en el front era complejo debido a que testear componentes e interacciones con vistas, antes de la llegada de los frameworks de segunda generación como React o Angular, era bastante engorroso, debido a la necesidad de usar navegadores sin cabeza para, programáticamente navegar sobre las apps. 

El enfoque en React usando [Enzyme](https://github.com/airbnb/enzyme) y [Jest](https://jestjs.io/), es que, debido al desacomplado del modulo que hacer el render de los componentes, es posible testearlos sin tener que levantar toda la libreria de React, haciendo posible el trabajo en un entorno un poco más liviano. Debido a esta ventaja, Enzyme y Jest hace posible el render virtual de los componentes, tanto de manera superficial o profunda (rendereando los componentes hijos), permitiendo el testeo de métodos internos, vistas, y comportamientos en general. El desafío de trabajar virtual y programáticamente con los componentes creados, asi como los niveles de abstracción que aparence al momento de construir los test, hicieron que al comienzo el tópico en sí, significara un desafío en términos del aprendizaje de algo que no estaba en mi cajón de herramientas como desarrollador. Fue ciertamente una experiencia de aprendizaje enriquecedora.

## ¿Qué es lo más genial que ha programado y qué es lo que más le enorgullece de ello?

Hubo un tiempo que estuve muy enfocado en aprender Java, JAX-RS, Hibernate y hacer web scrapping con java, para enviar los datos 'scrapeados' a una base de datos, y exponerlos públicamente con la API REST. Lo 'genial' del asunto fue programar el scrapper usando procesos paralelos en Java. Para probarlo diseñe una página con varias subpáginas, de manera de tener en los logs de NodeJS, los tiempos que tardaba el scrapper en hacer la visita al sitio, simulando los tiempos de 'ingesta' del contenido de un humano. Eso fue relativamente complejo. Me enorgullece el haber podido lograr una 'simulación' de la navegación relativamente cercana a la de un humano. es decir, que el scrapper no hiciera ingesta del html de todas las subpáginas en cuestión de segundos, cosa de bloquear circunstancialmente el servidor. Creo que lo más complejo fue utilizar la programación paralela en Java con la libreria de scrapper, y hacer correctamente, con cierto grado de generalización el **DOM traversing**.

## ¿Cuáles son sus partes favoritas de las herramientas de desarrollo que usa?


- ¿Tiene algún proyecto personal? ¿De qué tipo?
- ¿Cuál es su funcionalidad favorita de Internet Explorer?
- ¿Cómo te gusta tu café?

- Proponga una arquitectura la cual permita desarrollar y mantener de mejor forma los reducers y los componentes. ¿Por qué decides usar este tipo de arquitectura? ¿Qué ventajas tiene sobre el resto de propuestas que hay en el mercado? ¿Qué desventajas tiene?

Implemente un formulario el cual esté conectado a un reducer y que además se pueda usar como componente en alguna aplicación, especificaciones del formulario:

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
