const consTextoCajaInput = "ingrese el texto a Encriptar o DesEncriptar aquí";

document.getElementById("texto").value = consTextoCajaInput;

//Al elemento Textarea ID="texto - Asignar funcion al evento perder el foco"
document.getElementById("texto").addEventListener("blur", asignarTexto);

function asignarTexto() {
  if (document.getElementById("texto").value == "" ){
  document.getElementById("texto").value = consTextoCajaInput;
  }
}

       //Limpiar el TextArea
       function limpiarTextarea() {
        var cadValor="";
        cadValor = document.getElementById("texto").value;
        if (cadValor == consTextoCajaInput ){
            document.getElementById("texto").value = "";
        }
    }

    // Función para encriptar el texto
    function Encryptar() {
        var div = document.getElementsByClassName("divTextDes")[0];
        var img = div.getElementsByTagName("img")[0];
        div.removeChild(img);

      var encryptedText="";            
      // Obtener el texto del textarea
      var cadena = document.getElementById("texto").value;
      cadena=cadena.toLowerCase()
      // Encriptar el texto (ejemplo)
      for (const caracter of cadena) {
        encryptedText = encryptedText + fOperacionEncriptar(caracter);
        }

      // Mostrar el texto encriptado en una alerta
      var areaTexto = document.getElementById("boxDesencryptado");
      areaTexto.value = encryptedText;
     
      
    }

   // Función para Desencriptar el texto
   function Desencryptar() {
      // Obtener el texto del textarea
      var text = document.getElementById("texto").value;

      // Encriptar el texto (ejemplo)
      var DesencryptedText = fOperacionDesEncriptar(text); // btoa es una función JavaScript que codifica una cadena de texto en base64

      // Mostrar el texto encriptado en una alerta
      document.getElementById("boxDesencryptado").value = DesencryptedText;
      
    } 
    
    function copiar() {
    // Seleccionar el texto del cuadro de texto
    const input = document.getElementById("boxDesencryptado");
    input.select();
    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
    }

    function fOperacionEncriptar(cadtext){
        switch (cadtext) {
        case "a":
            return "ai";
        case "e":
            return "enter";
        case "i":
            return "imes";
        case "o":
            return "ober";
        case "u":
            return "ufat";
        default:
            return cadtext;
        }

    }

    function fOperacionDesEncriptar(cadtext){
        return cadtext
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");            
    }
