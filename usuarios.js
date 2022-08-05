let usuarios = [
    {
        nombre: "Ana",
        apellido: "Peréz",
        edad: 32,
        quiereConquistarElMundo: false
    },
    {
        nombre: "Napoleón",
        apellido: "III",
        edad: 65,
        quiereConquistarElMundo: true
    },
    {
        nombre: "El Rufi",
        edad: 3,
        quiereConquistarElMundo: true
    },
];


let myElement = document.createElement('p');
let myText = document.createTextNode('Tiene '+ edad + ' años y ');
myElement.appendChild(myText);