//Aqui validaremos una contraseña la cual esta asignada como alura
var contra = 'alura'     
while(true){
    var pass = prompt("Analista Ingrese su password?")
    
    if (pass === "" || pass === null || pass != contra){
        alert("el password ingresado es erroneo")
    }else{
        if (pass == contra)
        break;
    }
}

// aqui validamos el texto que sea ingreado no contenga mayusculas, numero ni caracteres especiales.
function validarTexto (texto) {
    
    var simbolos = /[°¡¬~!@#$%^&*()_+|}{[\]\/?><:"`;.,áéíóúàèìòù']/;
    var mayusculas = /[A-Z,0-9]/;  
    var cuadrovacio="";  
      
    if(texto.match(mayusculas) || texto.match(simbolos)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto == cuadrovacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}

/*aqui decalaramos nuestro boton y le damos la funcion de que al darle click valide que el texto ingresado se encuentre en false
si es asi crea la variable enciptado y llama a la funcion encriptar y muestra el resultado el textarea msg*/
var btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click",function ()  {
    var textInput = document.querySelector("#input-texto").value;
    var textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        var Encriptado = encriptar(textoIngresado);
        var resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})

/* en esta funcion vamos a encriptar el texto remplazando las letras de la a-u con las palabras asignadas en la variable y el texto ya remplazado se almacena en la variable encriptado*/
var reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat",};

function encriptar (textoIngresado) {
    var Encriptado = "";
    for (var obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}

/*Aqui se declara una variable btncopiar enlanzandolo a nuestro boton copiar del index, en el cual se le asigna la funcion que al darle click
se creara una variable copiado la cual su valor sera el texto de nuestro textarea msg y asi mismo dejara vacios nuestros dos textarea*/
var btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click",function(){        
    var Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value="";
    document.querySelector("#msg").value="";

});

/* aqui se declarar una variable btndesencriptar la cual se enlazara con nuestro boton desencriptar y al darle clic esta hara la funcion de que la variable textoingresado tome el valor de nuestro textarea input-texto 
de nuestro index y la variable desencriptado llame a la funcion desencriptar y el resultado se muestre en nuestro textare msg de nuestro index */
var btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(){
    var textoIngresado = document.querySelector("#input-texto").value;
    var Desencriptado = desencriptar(textoIngresado);

    var resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
})

/* aqui declaramos una variable btnlimpiar la cual se enlaza a nuestro boton limpiar del index el cul al darle click hara la funcion de dejar vacios tanto nuestro input-text como nuestro msg */
var btnlimpiar = document.querySelector("#btn-limpiar");

btnlimpiar.addEventListener("click", function(){
    document.querySelector("#input-texto").value="";
    document.querySelector("#msg").value="";
})


/* se crea una funcion la cual se encargara de desencriptar el texto que habiamos encriptado en el cual la variable encriptado esta vacia y remplazara ahora al contrario sobre la variable reglas
para desencriptar el texto copiado que esta encriptado  */
function desencriptar (textoIngresado) {
    var Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}









