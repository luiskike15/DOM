
let ejemploOne = document.getElementById("ejemplo1");
ejemploOne.textContent = "Cambie de color rojo con getElementById";
ejemploOne.style.color = "red";


let ejemploDos = document.querySelector("#ejemplo2");
ejemploDos.textContent= "Modifique mediante el querySelector";
ejemploDos.style.background= "black";
ejemploDos.style.color= "white";


let ejemploTres= document.querySelectorAll("div[class='.ejemplo3']");
for(let i = 0; i < ejemploTres.length; i++){
    ejemploTres[i].style.background="red";
    ejemploTres[i].style.color="white";
}



const ejemploCuatro = document.querySelector(".ejemplo4");
ejemploCuatro.innerHTML = "Cambie de nombre con InnerHTML";


const ejemploCinco = document.querySelector("#ejemplo5");
ejemploCinco.innerHTML = "Cambie de nombre el textContent";



let ejemploSeis =  document.querySelector(".ejemplo6");
ejemploSeis.style.color= "red";
ejemploSeis.style.padding= "20px";
ejemploSeis.style.background= "black";
ejemploSeis.style.textAlign = "center";


const ejemploSiete = document.querySelector(".ejemplo7");
console.log(ejemploSiete);
console.log(ejemploSiete.children);
console.log(ejemploSiete.children[2]);
console.log(ejemploSiete.parentElement);
console.log(ejemploSiete.firstChild);

// -------------------------------------------------


const etiquetaH3 = document.createElement('h3');
const textoH3= document.createTextNode('Cree un h3 mediante un createElement');

const elementoPadre = document.querySelector('.ejemplo8')

elementoPadre.appendChild(etiquetaH3);
etiquetaH3.appendChild(textoH3);
