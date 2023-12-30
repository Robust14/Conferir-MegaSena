"use strict";

let hpg = document.querySelector('.hg');
let containerRes = document.querySelector('.container-res');
let numSorteados;
let numJogados;
let jogadas = 0;

function mostrar(){
    let num1S = document.getElementsByClassName('num1S')[0].value;
    let num2S = document.getElementsByClassName('num2S')[0].value;
    let num3S = document.getElementsByClassName('num3S')[0].value;
    let num4S = document.getElementsByClassName('num4S')[0].value;
    let num5S = document.getElementsByClassName('num5S')[0].value;
    let num6S = document.getElementsByClassName('num6S')[0].value;

    let num1J = document.getElementsByClassName('num1J')[0].value;
    let num2J = document.getElementsByClassName('num2J')[0].value;
    let num3J = document.getElementsByClassName('num3J')[0].value;
    let num4J = document.getElementsByClassName('num4J')[0].value;
    let num5J = document.getElementsByClassName('num5J')[0].value;
    let num6J = document.getElementsByClassName('num6J')[0].value;

    numSorteados = [num1S,num2S,num3S,num4S,num5S,num6S];
    numJogados = [num1J,num2J,num3J,num4J,num5J,num6J];
    

    //=================================================
    
    let acertos = [];
    let tamArr = numSorteados.length;

    let cont = 0;
    while(cont <= tamArr-1){

        let cont2 = 0;
        while(cont2 <= tamArr-1){  
            if(numJogados[cont] == numSorteados[cont2]){
                    acertos.push(numSorteados[cont2]);
            }
            cont2++;
        }
        cont++;
    }
    jogadas++;

    let resultado = document.createElement("div");
    resultado.setAttribute("class","resultado");
    containerRes.appendChild(resultado);

    let br = document.createElement("br")
    let divJogadas = document.createElement("div")
    divJogadas.setAttribute("class","jogadas");
    divJogadas.innerHTML = jogadas;
    divJogadas.style.marginRight = "25px";
    resultado.appendChild(divJogadas);
    resultado.appendChild(br)

    br = document.createElement("br")
    let mostrarSorteados = document.createElement("div")
    mostrarSorteados.setAttribute("class","mostrarSort");
    mostrarSorteados.innerHTML = "Números Sorteados: " + numSorteados;
    resultado.appendChild(mostrarSorteados);
    resultado.appendChild(br)

    let mostrarJogados = document.createElement("div")
    mostrarJogados.setAttribute("class","mostrarJog");
    mostrarJogados.innerHTML = "Números Jogados: &nbsp;&nbsp;&nbsp;" + numJogados;
    resultado.appendChild(mostrarJogados);
    resultado.appendChild(br)
    resultado.appendChild(divJogadas);

    acertos.map((el)=>{
            
        let bolasAcertos = document.createElement("div")
        bolasAcertos.setAttribute("class","divA");
        bolasAcertos.setAttribute("id","divA");
        bolasAcertos.innerHTML = el;
        resultado.appendChild(bolasAcertos);
    })
    
    let linhaRes = document.createElement("div");
    linhaRes.setAttribute("class","divAcertos");
    linhaRes.style.display = "inline-block";
    linhaRes.innerHTML = acertos.length + " acerto(s).";
    resultado.appendChild(linhaRes);
    resultado.appendChild(br);
}

function clique(){
    document.getElementsByClassName('btn-conferir')[0].addEventListener("click",mostrar);
}

function inicia(){
    clique();
}

window.addEventListener("load",inicia);