// DOM - Eventos
// Ejercicios
// playlist✅
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

// let $ = (selector)=> document.querySelector(selector);

// let playlist = $('.playlist')

// let primerCancion = prompt('Ingrese su primer cancion favorita');
// let segundaCancion = prompt('Ingrese su segunda cancion favorita');
// let tercerCancion = prompt('Ingrese su tercer cancion favorita');
// let cuartaCancion = prompt('Ingrese su cuarta cancion favorita');
// let quintaCancion = prompt('Ingrese su quinta cancion favorita');

// playlist.innerHTML = `
// <li>${primerCancion} </li>
// <li>${segundaCancion} </li>
// <li>${tercerCancion} </li>
// <li>${cuartaCancion} </li>
// <li>${quintaCancion} </li>
//`

// contador✅
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

// let contador = $('.contador');
// let menosUno = $('.menos-uno');
// let masUno = $('.mas-uno');
// let menosCinco = $('.menos-cinco');
// let masCinco = $('.mas-cinco');
// let menosDiez = $('.menos-diez');
// let masDiez = $('.mas-diez');

// let numeroContador = Number(contador.innerText);

// console.log(numeroContador)

// menosUno.addEventListener('click', ()=>{
//     let resultado = numeroContador - 1;

//     numeroContador = resultado;

//     contador.innerText = resultado;

// } );

// masUno.addEventListener('click', ()=>{
//     let resultado = numeroContador + 1;

//     numeroContador = resultado;

//     contador.innerText = resultado;

// } );

// menosCinco.addEventListener('click', ()=>{
//     let resultado = numeroContador - 5;

//     numeroContador = resultado;

//     contador.innerText = numeroContador;

// } );

// masCinco.addEventListener('click', ()=>{
//     let resultado = numeroContador + 5;

//     numeroContador = resultado;

//     contador.innerText = numeroContador;

// } );

// menosDiez.addEventListener('click', ()=>{
//     let resultado = numeroContador - 10;

//     numeroContador = resultado;

//     contador.innerText = numeroContador;

// } );

// masDiez.addEventListener('click', ()=>{
//     let resultado = numeroContador + 10;

//     numeroContador = resultado;

//     contador.innerText = numeroContador;

// } );

// adivinanza✅
// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

// let veintiSiete = $('.incorrecto1');
// let veintiCuatro = $('.incorrecto2');
// let veintiTres = $('.correcto');
// let h1 = $('h1');

// veintiTres.addEventListener('click', function(){
//     h1.innerText = 'CORRECTO'
//     veintiTres.style.backgroundColor = 'green'
// })

// veintiCuatro.addEventListener('click', function(){
//     h1.innerText = 'INCORRECTO'
//     veintiCuatro.style.backgroundColor = 'red'
//     veintiSiete.style.backgroundColor = 'red'
//     veintiTres.style.backgroundColor = 'green'
// })

// veintiSiete.addEventListener('click', function(){
//     h1.innerText = 'INCORRECTO'
//     veintiCuatro.style.backgroundColor = 'red'
//     veintiSiete.style.backgroundColor = 'red'
//     veintiTres.style.backgroundColor = 'green'
// })



// paleta✅
// Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

// let red = $('.btn-red');
// let blue = $('.btn-blue');
// let green = $('.btn-green');
// let divColor = $('div');

// red.addEventListener('click', function(){
//     divColor.style.backgroundColor = 'red'
// })

// blue.addEventListener('click', function(){
//     divColor.style.backgroundColor = 'blue'
// })

// green.addEventListener('click', function(){
//     divColor.style.backgroundColor = 'green'
// })



// email (sin leer)
// Crear un documento html que tenga:

// un título h1 que diga: Mis emails
// un título h2 que diga: Bandeja de entrada
// una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

// let uno = $('.uno')
// let dos = $('.dos')
// let tres = $('.tres')
// let cuatro = $('.cuatro')
// let cinco = $('.cinco')



// uno.addEventListener('click', function(){
//     uno.style.color = 'gray'
//     uno.style.fontWeight = 'normal'
// })

// dos.addEventListener('click', function(){
//     dos.style.color = 'gray'
//     dos.style.fontWeight = 'normal'
// })

// tres.addEventListener('click', function(){
//     tres.style.color = 'gray'
//     tres.style.fontWeight = 'normal'
// })

// cuatro.addEventListener('click', function(){
//     cuatro.style.color = 'gray'
//     cuatro.style.fontWeight = 'normal'
// })

// cinco.addEventListener('click', function(){
//     cinco.style.color = 'gray'
//     cinco.style.fontWeight = 'normal'
// })


// OTRA SOLUCION✅

// let modificarEstilo = (event)=>{
// //    console.log(event)
// //    console.log(event.path[0])
//     let email = event.path[0];


//     email.style.color = 'gray';
//     email.style.fontWeight = 'normal';

// }
// uno.addEventListener('click', modificarEstilo);
// dos.addEventListener('click', modificarEstilo);
// tres.addEventListener('click', modificarEstilo);
// cuatro.addEventListener('click', modificarEstilo);
// cinco.addEventListener('click', modificarEstilo);

// OTRA SOLUCION✅

// console.log(uno)

// let modificarEstilo = (event)=>{

//        console.log(event)
//    console.log(event.path[0])

//     let email = event.path[0];
//     email.classList.add('emailLeido');

// }
// uno.addEventListener('click', modificarEstilo);




// progreso✅
// Crear un documento html con

// una barra de progreso (con un div dentro de otro)
// un elemento de texto que indique el progreso (p. ej. 50%)
// dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
// lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// el incremento/decremento es del 10%
// let $ = (selector)=> document.querySelector(selector);

// let barraProgreso = $('.progreso-barra');
// let progreso = $('.progreso');
// let incrementar = $('.incrementar');
// let disminuir = $('.disminuir');

// let numeroProgreso = Number(progreso.innerText);

// incrementar.addEventListener('click', ()=>{

//     let resultado = numeroProgreso + 10;

//     numeroProgreso = resultado;

//     progreso.innerText = resultado;

//     barraProgreso.style.width = resultado + '%';
    
    
// });

// disminuir.addEventListener('click', ()=>{

//     let resultado = numeroProgreso - 10;

//     numeroProgreso = resultado;

//     progreso.innerText = resultado;

//     barraProgreso.style.width = resultado + '%';
    
    
// });





// modo-oscuro✅
// Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

// modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
// modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna

// let body = $('body');
// let button = $('button');
// let icono = $('i');

// console.log(icono.classList[1])

// let cambiarIcono = icono.classList[1];

// button.addEventListener('click', ()=>{
//     body.classList.toggle('modoOscuro');

//     if(button.innerHTML == '<i class="fa-regular fa-moon"></i>Modo oscuro'){
        
//     button.innerHTML = '<i class="fa-regular fa-sun"></i> Modo claro';
//     } else{
//         button.innerHTML = '<i class="fa-regular fa-moon"></i>Modo oscuro'
//     }

// })


// scroll✅
// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll	Color de fondo
// 0px - 500px	red
// 501px - 1000px	green
// 1001px - 1500px	blue
// 1501px - 2000px	orange



// let $ = (selector)=> document.querySelector(selector);
// let body = $('body');

// window.addEventListener( 'scroll',function() {
//         let posicionScrollY = window.scrollY;
        
//         if (posicionScrollY >= 0 && posicionScrollY <=500){
//             body.style.backgroundColor = 'red'
//         } 
//         if (posicionScrollY > 500 && posicionScrollY <= 1000){
//             body.style.backgroundColor = 'green'
//         } else if (posicionScrollY > 1000 && posicionScrollY <= 1500){
//             body.style.backgroundColor = 'blue'
//         } else if (posicionScrollY > 1500 && posicionScrollY <= 2000){
//             body.style.backgroundColor = 'orange'
//         }
      
//       });



// imagenes✅
// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

// let imgUno = $('.uno');
// let imgDos = $('.dos');
// let imgTres = $('.tres');
// let imgCuatro = $('.cuatro');
// let imgGrande = $('.img-grande');

// console.log(imgDos)

// imgUno.addEventListener('click', ()=>{
//    imgGrande.innerHTML ='<img src="https://i.pinimg.com/564x/9d/08/72/9d087220bdb52db59e9d08a18fd6c4b5.jpg" alt="" class="img-grande">'
// })

// imgDos.addEventListener('click', ()=>{
//    imgGrande.innerHTML ='<img src="https://i.pinimg.com/564x/d2/c9/eb/d2c9eb26986156f69c034bcebf37415f.jpg" alt="" class="img-grande">'
// })

// imgTres.addEventListener('click', ()=>{
//    imgGrande.innerHTML ='<img src=https://i.pinimg.com/564x/45/be/83/45be83299bf43e641e5cd05587afaabc.jpg alt="" class="img-grande">'
// })

// imgCuatro.addEventListener('click', ()=>{
//    imgGrande.innerHTML ='<img src="https://i.pinimg.com/564x/0a/28/bf/0a28bfd66a2aa992239b7f39aeaf7279.jpg" alt="" class="img-grande">'
// })





// imagenes-2✅
// Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.

// let imgUno = $('.uno');
// let imgDos = $('.dos');
// let imgTres = $('.tres');
// let imgCuatro = $('.cuatro');
// let imgGrande = $('.img-grande')



// imgUno.addEventListener('mouseenter', ()=>{
//    imgGrande.innerHTML ='<img src="https://i.pinimg.com/564x/9d/08/72/9d087220bdb52db59e9d08a18fd6c4b5.jpg" alt="" class="img-grande">'
// })

// imgDos.addEventListener('mouseenter', ()=>{
//    imgGrande.innerHTML ='<img src="https://i.pinimg.com/564x/d2/c9/eb/d2c9eb26986156f69c034bcebf37415f.jpg" alt="" class="img-grande">'
// })

// imgTres.addEventListener('mouseenter', ()=>{
//    imgGrande.innerHTML ='<img src=https://i.pinimg.com/564x/45/be/83/45be83299bf43e641e5cd05587afaabc.jpg alt="" class="img-grande">'
// })

// imgCuatro.addEventListener('mouseenter', ()=>{
//    imgGrande.innerHTML ='<img src="https://i.pinimg.com/564x/0a/28/bf/0a28bfd66a2aa992239b7f39aeaf7279.jpg" alt="" class="img-grande">'
// })


// peliculas
// Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

let $ = (selector)=> document.querySelector(selector);

// let btnAccion = $('.btn-accion');
// let btnFantasia = $('.btn-fantasia');
// let btnComedia = $('.btn-comedia');
// let btnTodas = $('.btn-todas');
// let contPortadas = $('.cont-portadas');

// //console.log(btnFantasia);


// btnAccion.addEventListener('click', ()=>{
//    contPortadas.innerHTML = `<img src="https://i.pinimg.com/564x/f1/9b/76/f19b76c9a1b485b142fdb155079bad2c.jpg" alt="" class="accion">
//    <img src="https://i.pinimg.com/564x/eb/e4/67/ebe467318c0d46602ba9c3275e5cb115.jpg" alt="" class="accion">
//    <img src="https://i.pinimg.com/564x/19/f2/5e/19f25e68f7ad277657cca648cc603470.jpg" alt="" class="accion">`
// })

// btnFantasia.addEventListener('click', ()=>{
//    contPortadas.innerHTML = `<img src="https://i.pinimg.com/564x/31/ad/ce/31adce733ed860008db33af54e41bb4c.jpg" alt="" class="fantasia">
//    <img src="https://i.pinimg.com/564x/49/62/04/4962049fd6085ccae8c49a225d6adb60.jpg" alt="" class="fantasia">
//    <img src="https://i.pinimg.com/564x/88/b4/e4/88b4e4beb1de83eab0af9b3e3b5ec0f4.jpg" alt="" class="fantasia">`
// })

// btnComedia.addEventListener('click', ()=>{
//    contPortadas.innerHTML = ` <img src="https://i.pinimg.com/564x/7a/d5/f1/7ad5f1f01cebe0712c523656803874eb.jpg" alt="" class="comedia">
//    <img src="https://i.pinimg.com/564x/46/41/cc/4641cca45e4c669052103c349d49d117.jpg" alt="" class="comedia">
//    <img src="https://i.pinimg.com/564x/b5/18/76/b51876858380cfad8febdffb4542d10d.jpg" alt="" class="comedia">`
// })

// btnTodas.addEventListener('click', ()=>{
//    contPortadas.innerHTML = `    <img src="https://i.pinimg.com/564x/f1/9b/76/f19b76c9a1b485b142fdb155079bad2c.jpg" alt="" class="accion">
//    <img src="https://i.pinimg.com/564x/eb/e4/67/ebe467318c0d46602ba9c3275e5cb115.jpg" alt="" class="accion">
//    <img src="https://i.pinimg.com/564x/19/f2/5e/19f25e68f7ad277657cca648cc603470.jpg" alt="" class="accion">


//    <img src="https://i.pinimg.com/564x/31/ad/ce/31adce733ed860008db33af54e41bb4c.jpg" alt="" class="fantasia">
//    <img src="https://i.pinimg.com/564x/49/62/04/4962049fd6085ccae8c49a225d6adb60.jpg" alt="" class="fantasia">
//    <img src="https://i.pinimg.com/564x/88/b4/e4/88b4e4beb1de83eab0af9b3e3b5ec0f4.jpg" alt="" class="fantasia">
   
//    <img src="https://i.pinimg.com/564x/7a/d5/f1/7ad5f1f01cebe0712c523656803874eb.jpg" alt="" class="comedia">
//    <img src="https://i.pinimg.com/564x/46/41/cc/4641cca45e4c669052103c349d49d117.jpg" alt="" class="comedia">
//    <img src="https://i.pinimg.com/564x/b5/18/76/b51876858380cfad8febdffb4542d10d.jpg" alt="" class="comedia">`
// })

// pin✅
// En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.
// Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
// El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.
// El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
// El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.


// let uno = $('.uno');
// let dos = $('.dos');
// let tres = $('.tres');
// let cuatro = $('.cuatro');
// let cinco = $('.cinco');
// let pinIngresado = $('.pin-ingresado');
// let borrar = $('.borrar');
// let reiniciar = $('.reiniciar');

// let nroPin = '';


// let borrarPin = ()=>{
//    nroPin = ''
//    pinIngresado.innerText = nroPin;
   
// }

// let borrarUltimoDigito= ()=>{

//    let detectarUltimoDigito = nroPin.length -1;

//    nroPin = nroPin.slice(0, detectarUltimoDigito)

//    pinIngresado.innerText = nroPin;
// }
 

// let ingresarPin = (event)=>{

//  //  console.log(event)

//    let longitudPin = pinIngresado.innerText.length;

//    if(longitudPin < 6){

//    let nroingresado = `${nroPin}${event.path[0].innerText}`;

//    nroPin = nroingresado;
 
//    pinIngresado.innerText = nroPin;

//  //  console.log(longitudPin)

//  } else{
//    console.log('El pin debe contener un máximo de 6 dígitos')
//  }

//  //console.log(nroPin.length)


//  borrar.addEventListener('click', borrarUltimoDigito)

//  reiniciar.addEventListener('click', borrarPin)
// }



// uno.addEventListener('click', ingresarPin);
// dos.addEventListener('click', ingresarPin);
// tres.addEventListener('click', ingresarPin);
// cuatro.addEventListener('click', ingresarPin);
// cinco.addEventListener('click', ingresarPin);


// favoritos❌
// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.

let uno = $('.uno');
let dos = $('.dos');
let tres = $('.tres');
let cuatro = $('.cuatro');
let cinco = $('.cinco');
let seis = $('.seis');
let favoritos = $('.favoritos');

let elegidos = ''

let elegirFavorito = (event) =>{

   let urlImagen = event.path[0].currentSrc;

   let clase = event.path[0].classList[0];

   let etiquetaImg = `<img src="${urlImagen}" alt="" class="${clase}-nuevo">`;

   elegidos = elegidos + etiquetaImg;

   favoritos.innerHTML = elegidos;

   let unoNuevo = $('.uno-nuevo')


   unoNuevo.addEventListener('click', ()=>{
      unoNuevo.style.display = 'none';

})

}

uno.addEventListener('click', elegirFavorito);
dos.addEventListener('click', elegirFavorito);
tres.addEventListener('click', elegirFavorito);
cuatro.addEventListener('click', elegirFavorito);
cinco.addEventListener('click', elegirFavorito);
seis.addEventListener('click', elegirFavorito);



// color-aleatorio✅
// Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).

// let body = $('body');

// let color = '';

// body.addEventListener('keydown', (event)=>{
//   console.log(event)
//   if (event.code === 'Space'){
//     body.style.backgroundColor = color;
//     obtenerColorAleatorio();

//   }
// })


// let obtenerColorAleatorio = ()=>{

//   let red = Math.round(Math.random()*255);
//   let green = Math.round(Math.random()*255);
//   let blue = Math.round(Math.random()*255);

//   color = `rgb(${red},${green},${blue})`;

//   console.log(color);
  
// }


// adivinar-numero✅
// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

// si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
// si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
// si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// Por ejemplo:

// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"
// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)

// let mensaje = $('h2');
// let reiniciar =$('button');

// let numeroAleatorio = Math.round(Math.random()*9);
// console.log(numeroAleatorio);

// let body = $('body');

// reiniciar.addEventListener('click', ()=>{
//   mensaje.innerText = `Nueva Partida!! Presione un número`;
//   numeroAleatorio = Math.round(Math.random()*9);
//   console.log(numeroAleatorio)
// })


// body.addEventListener('keydown', (event)=>{
//   console.log(event)
//   if (event.key == numeroAleatorio){
//   mensaje.innerText = `Adivinaste! Numero ingresado: ${numeroAleatorio} `
//   } else if (event.key > numeroAleatorio){
//     mensaje.innerText = `El número es más chico. Número ingresado: ${event.key} `
//   } else if (event.key < numeroAleatorio){
//     mensaje.innerText = `El número es más grande. Número ingresado: ${event.key} `
//   } else{
//     alert('No estás ingresando un número!')
//     mensaje.innerText = `Presione un número`
//   }
// })
