
// declara funciones para encriptar y desencriptar palabras

function encriptar(texto, nivel) {
    let textoCifrado
    if (nivel==1){
        textoCifrado = texto
            .replace(/e/gi,"enter" )
            .replace(/i/gi,"imes" )
            .replace(/a/gi,"ai" )
            .replace(/o/gi,"ober" )
            .replace(/u/gi,"ufat" )

    }else if(nivel==2) {
        textoCifrado=texto
            .replace(/a/gi,"41")
            .replace(/e/gi,"45" )
            .replace(/i/gi,"49" )
            .replace(/o/gi,"4F" )
            .replace(/u/gi,"55" )   

    }else if (nivel==3) {
        textoCifrado=texto
            .replace(/a/gi,"01000001")
            .replace(/e/gi,"01000101" )
            .replace(/i/gi,"01001001" )
            .replace(/o/gi,"01001111" )
            .replace(/u/gi,"01010101" )
    }
    return textoCifrado
}

function desencriptar(texto) {
    let textoDesencriptado = texto
            .replace(/ai/gi, "a")
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u")
            .replace(/41/gi, "a")
            .replace(/45/gi, "e")
            .replace(/49/gi, "i")
            .replace(/4F/gi, "o")
            .replace(/55/gi, "u")
            .replace(/01000001/gi, "a")
            .replace(/01000101/gi, "e")
            .replace(/01001001/gi, "i")
            .replace(/01001111/gi, "o")
            .replace(/01010101/gi, "u")
    return textoDesencriptado
}

// niveles de botones

function niveles() {
    let formulario = document.getElementById("form")
    let valorForm = formulario.querySelector('input[name="niveles"]:checked').value
    return valorForm
}

//--------
let botonCopiar = document.getElementById("copiar")
botonCopiar.addEventListener('click', function () {
    let textoCopiar=document.getElementById("salida")
    let texto= textoCopiar.innerHTML
    navigator.clipboard.writeText(texto)
        .then(()=>{
            
        })
        .catch(err=>{
            console.log("Error al copiar el texto")
        })
})

let botones = document.querySelectorAll(".nivelEncriptador")
function verificarBotonActivo() {
    botones.forEach(function (nivelEncriptador) {
        if (nivelEncriptador.classList.contains("seleccionado")) {
            console.log(nivelEncriptador.id)
        }
    })
    console.log(nivelEncriptador.id)
}

let botonEncriptar = document.getElementById("encriptar")
botonEncriptar.addEventListener('click', function () {
    let texto = document.getElementById("ingreso").value

    if(texto==""){
        alert("Debe Ingresar un texto")
    }else{
        let mostrarTexto= document.getElementById("salida")
        let nivel = niveles()
        mostrarTexto.innerHTML=encriptar(texto,nivel)
    }
})


let botonDesencriptar = document.getElementById("desencriptar")
botonDesencriptar.addEventListener('click', function () {
    let texto = document.getElementById("ingreso").value
    if(texto==""){
        alert("Debe Ingresar un texto")
    }else{
        
        let mostrarTexto= document.getElementById("salida")
        mostrarTexto.innerHTML=desencriptar(texto)
    }
    
})







