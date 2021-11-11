let inserir = (num) => {
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

let limpar = () => {
    document.getElementById("resultado").innerHTML=""
}

let apagarUm = () =>{
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById("resultado").innerHTML=resultado.substring(0,resultado.length-1)
}

let calcular = ()=> {
    let resultado = document.getElementById('resultado').innerHTML
    if (resultado){
        document.getElementById("resultado").innerHTML =eval(resultado)
        }
        else{ document.getElementById("resultado").innerHTML = "Vazio" 
        }
}