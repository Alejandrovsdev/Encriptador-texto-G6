/* Todo:
- Si el input esta vacio, los botones deben arrojar un modal con un mensaje para introducir texto
-Si ya se encripto el mensaje y luego lo desencriptamos, al apretar de vuelta encriptar debe volver a encriptarse.
-Desencriptar no debe sacar el boton copiar.
-el boton copiar debe copiar el texto generado.
-Al volver a pulsar encriptar para generar otro texto una vez encriptado el mensaje anterior, se debe reemplazar el texto generado.


*/

const ilegalInput = (str) => {
    const regex = /[^a-z 0-9]/g;
    return regex.test(str);
};

const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const texto = document.getElementById('txtInput');

btnEncriptar.addEventListener('click', function () {
    let texto = document.getElementById('txtInput').value;
    texto.toLowerCase();

    texto = texto
        .replace(/a/gi, 'ai')
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

    const btnCopiar = document.getElementById('btn-copiar');
    const rightContainer = document.querySelector('.rightContainer');

    if (texto.length != 0) {
        rightContainer.innerHTML = '';
        rightContainer.innerHTML = texto;

        btnCopiar.removeAttribute('hidden');
    } else {
        alert('Debe ingresar un texto');
    }
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

    const btnCopiar = document.getElementById('btn-copiar');
    const rightContainer = document.querySelector('.rightContainer');

    if (texto.length != 0) {
        rightContainer.innerHTML = '';
        rightContainer.innerHTML = texto;

        btnCopiar.removeAttribute('hidden');
    } else {
        alert('Debe ingresar un texto');
    }
});
