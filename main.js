/* 
funcion encriptar:
-capturar el texto ingresado por el usuario
-pasarlo a minusculas con toLowerCase y usar el metodo replace con expresion regular para convertir las vocales en el texto encriptado.
-mostrar esconder los estilos definidos en el contenedor donde va el texto encriptado y mostrar el texto encriptado junto con un boton para copiar.
*/


const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');

btnEncriptar.addEventListener('click', function () {

    let texto = document.getElementById('txtInput').value;
    texto.toLowerCase();

    texto = texto
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    const btnCopiar = document.getElementById('btn-copiar');
    const rightContainer = document.querySelector('.rightContainer');
    rightContainer.innerHTML = '';

    // Crea un nuevo elemento de párrafo
    const nuevoParrafo = document.createElement('p');
    // Crea un nodo de texto con el texto encriptado y lo asigna al nuevo párrafo
    nuevoParrafo.appendChild(document.createTextNode(texto));
    // Agrega el nuevo párrafo al contenedor de texto
    rightContainer.appendChild(nuevoParrafo);

});

btnDesencriptar.addEventListener('click', function () {

    let texto = document.getElementById('txtInput').value;
    texto.toLowerCase();

    texto = texto
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');


    const rightContainer = document.querySelector('.rightContainer');
    rightContainer.innerHTML = '';

    // Crea un nuevo elemento de párrafo
    const nuevoParrafo = document.createElement('p');
    // Crea un nodo de texto con el texto encriptado y lo asigna al nuevo párrafo
    nuevoParrafo.appendChild(document.createTextNode(texto));
    // Agrega el nuevo párrafo al contenedor de texto
    rightContainer.appendChild(nuevoParrafo);

});
