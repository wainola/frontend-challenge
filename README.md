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


- ¿Podría describir algún problema técnico que haya resuelto recientemente?
- ¿Qué es lo más genial que ha programado y qué es lo que más le enorgullece de ello?
- ¿Cuáles son sus partes favoritas de las herramientas de desarrollo que usa?
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
