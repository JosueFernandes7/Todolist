
const input = document.getElementById('input'); // cadastro
const submit = document.getElementById('submit'); // adicionar
const remove = document.getElementById('remove'); // remover
let resultado = document.getElementById('resultado');

let itens;
let marcado;

function addItem() {
    if(input.value != '') {
        resultado.innerHTML += `<p style="">${input.value}<input type="checkbox" class="Visible"></p>`;
        let p = document.querySelectorAll('#resultado p');
        let check = document.querySelectorAll('#resultado p input[type=checkbox]');
        itens = Array.from(p);
        marcado = Array.from(check);
    } else {
        alert('Item Inválido, tente novamente');
    }
}

submit.addEventListener('click', addItem);

remove.addEventListener('click', removeItem);
function removeItem() {
    marcado.forEach(item => {
        if(item.checked && item != undefined){
            item.parentNode.remove();
        } 
    })

}