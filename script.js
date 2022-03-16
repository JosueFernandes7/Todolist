let elementInput = document.getElementById("element");
let elementSubmit = document.getElementById("sub");

let result = document.getElementById("resultado");
// click que recebe o valor
elementSubmit.addEventListener("click",newElement);

let guardar = [];
let remover = [];
let i =0;

function newElement() {
    let Input = elementInput.value;
    guardar[i]=Input;
    result.innerHTML += `<p style="margin-top:5px;">${guardar[i]} <input type="checkbox" id="${i}c"></p>`
    console.log(Input);
    i++;

}