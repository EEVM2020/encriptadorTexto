const llaves=[{vocal:"e",equivalente:'enter'},
              {vocal:"i",equivalente:'imes'},
              {vocal:"a",equivalente:'ai'},
              {vocal:"o",equivalente:'ober'},
              {vocal:"u",equivalente:'ufat'}
            ]
var  expresionRegular ;

function encriptar(){
    let fraseEncriptar=document.getElementById('texto').value  
    llaves.forEach(objeto => {
        expresionRegular=new RegExp(objeto.vocal,'g')
        fraseEncriptar=fraseEncriptar.replace(expresionRegular,objeto.equivalente)
    });
    mostrar(fraseEncriptar);
   
}

function desencriptar(){
    let fraseSinEncriptar=document.getElementById('texto').value   
    llaves.forEach(objeto => {
        expresionRegular=new RegExp(objeto.equivalente,'g')
        fraseSinEncriptar=fraseSinEncriptar.replace(expresionRegular,objeto.vocal)
    });
    mostrar(fraseSinEncriptar);
}

function copiarTexto(){
    let textoCopiar=document.getElementById('resultado').textContent
    navigator.clipboard.writeText(textoCopiar);
}

function mostrar(texto){
    let fraseEncriptar=document.getElementById('texto')
    let resultado= document.getElementById('resultado')  
    let  resultadoTitulo= document.getElementById('tituloResultado') 
    let imagenResultado=document.getElementById('imagenResultado') 
    if(texto.trim().length>0){
        resultado.innerHTML=texto
        resultadoTitulo.innerHTML=""
        imagenResultado.classList.add('ocultar')
        fraseEncriptar.value=""
    }else{
        resultado.innerHTML="Ingresa el texto que desea encriptar o desencriptar"
        resultadoTitulo.innerHTML="Ningún mensaje fue encontrado"
        imagenResultado.classList.remove('ocultar')
    }
    
}
