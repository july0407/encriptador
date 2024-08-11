function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let btnCopiar = document.getElementById("btn-copiar");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    tituloMensaje.textContent = textoCifrado;
    parrafo.textContent = "";
    muñeco.style.display = "none"; // Ocultar la imagen
    btnCopiar.style.display = "block"; // Mostrar el botón de copiar
    document.getElementById("mensaje-encriptado").style.flex = "1"; // Ocupa todo el contenedor
    document.getElementById("texto").value = ""; // Limpiar el campo de texto
  } else {
    muñeco.style.display = "block"; // Mostrar la imagen si no hay texto
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
    btnCopiar.style.display = "none"; // Ocultar el botón de copiar
    document.getElementById("mensaje-encriptado").style.flex = "initial"; // Restablecer el contenedor
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let btnCopiar = document.getElementById("btn-copiar");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
  if (texto.length != 0) {
    tituloMensaje.textContent = textoCifrado;
    parrafo.textContent = "";
    muñeco.style.display = "none"; // Ocultar la imagen
    btnCopiar.style.display = "block"; // Mostrar el botón de copiar
    document.getElementById("mensaje-encriptado").style.flex = "1"; // Ocupa todo el contenedor
    document.getElementById("texto").value = ""; // Limpiar el campo de texto
  } else {
    muñeco.style.display = "block"; // Mostrar la imagen si no hay texto
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
    btnCopiar.style.display = "none"; // Ocultar el botón de copiar
    document.getElementById("mensaje-encriptado").style.flex = "initial"; // Restablecer el contenedor
  }
}

function copiarTexto() {
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let texto = tituloMensaje.textContent;

  navigator.clipboard.writeText(texto).then(() => {
    swal("Éxito", "Texto copiado al portapapeles", "success");
  }, () => {
    swal("Error", "No se pudo copiar el texto", "error");
  });
}
