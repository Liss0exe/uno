//OBTENER ELEMENTO POR ID
const titulo = document.getElementById('tituloUWU');

//OBTENER ELEMENTO POR NOMBRE DE ETQUETA
const subtitulo = document.getElementsByTagName('h2');
console.log(subtitulo);

//OBTENER EL ELEMENTO POR CLASE
const parrafo = document.getElementsByClassName('parrafo');
console.log(parrafo);

const elemento = document.querySelector('#Karma');

elemento.innerHTML = 'KARMA AKABANE';

const imagen = document.querySelector('#img')

const body = document.body;

const cambiarBg = () =>{
 body.classList.add('bg2')
}

const quitarColor = () =>{
    body.classList.remove('bg2')
}


const cambiarImagen = () =>{
    imagen.src = "../src/Levi.png"
    titulo.innerHTML = "DOCUMENT"
}

const nombre = document.querySelector('#nombre');

nombre.addEventListener('mouseenter', ()=>{
    nombre.style.color = 'pink';
});


subtitulo[1].innerHTML = "Tilín tilín";
parrafo[3].innerHTML = "Fui modificado en JS";

//console.log(titulo);