function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("notMensaje");
    let parrafo = document.getElementById("notParrafo");
    let imagen = document.getElementById("notImagen");

    let textoCifrado = texto
    .replace(/a/gi, "lnhr")
    .replace(/e/gi, "kmj")
    .replace(/i/gi, "rtv")
    .replace(/o/gi, "rltc")
    .replace(/u/gi, "qzwk")

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto Encriptado";
        parrafo.textContent = "";
        imagen.src = "./img/bloqueado.png";
    }else{
        imagen.src = "./img/buscar.png";
        tituloMensaje.textContent = "No hay mensajes encontrados";
        parrafo.textContent = "Ingrese un texto que desee encriptar o desencriptar"
        swal("LO SIENTO", "Debes ingresar un texto", "warning");
    }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("notMensaje");
    let parrafo = document.getElementById("notParrafo");
    let imagen = document.getElementById("notImagen");

    let textoCifrado = texto
    .replace(/lnhr/gi, "a")
    .replace(/kmj/gi, "e")
    .replace(/rtv/gi, "i")
    .replace(/rltc/gi, "o")
    .replace(/qzwk/gi, "u")

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto Desencriptado";
        parrafo.textContent = "";
        imagen.src = "./img/desbloqueado.png";
    }else{
        imagen.src = "./img/buscar.png";
        tituloMensaje.textContent = "No hay mensajes encontrados";
        parrafo.textContent = "Ingrese un texto que desee encriptar o desencriptar"
        swal("LO SIENTO", "Debes ingresar un texto", "warning");
    }
}