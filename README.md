# Chat BeerJS Santiago - Febrero 2017

*Template base para construir un chat de una vía para mostrarse en la edición de febrero 2017 de BeerJS Santiago*

### Instrucciones

0. Fork el template y elige una librería. Ponte a leer a continuación y comienza a _codear_.

1.- tienen que usar firebase 3

2.- las crendenciales son:

 ```
 let firebaseConfig = {
  apiKey: "AIzaSyCL7buZsLVXXQ3Wp7buGEUdlU2qhAPpVwY",
  authDomain: "beer-js.firebaseio.com",
  databaseURL: "https://beer-js.firebaseio.com/",
};
```

3.- estas son las rutas de escritura oficiales por ahora (edited)
`https://beer-js.firebaseio.com/rooms/beer-js`
`https://beer-js.firebaseio.com/rooms/general`
por ahora tambien esta habilitado `https://beer-js.firebaseio.com/private`  
esta ultima tiene todos los derechos de escritura que quieran 
dentro de rooms no van a poder escribir a menos que esten dentro de `beer-js`y `general` y el spec de un chat es el siguiente

 ```{
  author:{
    name: 'Javier Vasquez',
    user_image_url: 'http://placekitten.com/200/200'
  },
  text: 'Soy el primero de muchos',
  timestamp: '1483737061'
}```

4.- dentro de room y general este es el spec (edited)
 
 ```{
  chat_id: uuid,
  messages: {}
}```

dentro de messages van los chat utilizando el metodo push() de firebase

5.- todo int  esta como string asi que no se olviden de hacer parseFloat() (edited)
 
6.- los metodos de autentificación son `email/pass`, `google`, y `Anonymous` (edited) en la doc de firebase esta super bien explicado como hacer autentificarse con cada metodo :slightly_smiling_face:
por si alguien se pregunta el `-K_pe07zbw8IJSODKe6t` es el key que asigna automagicamente firebase con push()
la gracia es que es un timestamp por lo que despues el ordenar los chats se lo podemos delegar al for de firebase

[Ejemplo](https://github.com/s0wk/firebase-chat/blob/master/src/firebase.js)

7. Una vez terminado, haz un PR a este repo en un directorio con el formato *libreria_githubuser* y se subirá al servidor de BeerJS Santiago para una demo el día miércoles 1 de febrero en la oficina de Cornershop. La idea es que vayas y muestres lo que hiciste.

### Contribuidores

E- S5 / ES6 vanilla = @juanbrujo
- InfernoJS = @juanbrujo
- ReactJS = @s0wk
- NG1 = ?
- NG2 = ?
- EmberJS = ?
- VueJS = @davidlaym
- Preact = ?
- AureliaJS = @davidlaym
- Web Components (Polymer) = @lgaticaq
- Electron (NodeJS) = @lgaticaq

