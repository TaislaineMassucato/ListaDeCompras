const inputItem = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');
const adicionarItem = document.getElementById('adicionar-item');
let contador = 0;


//BOTÃO SALVAR 

//Adicionando evento de click e add avento de ao clicar nao perder infos
adicionarItem.addEventListener('click', (evento) => {
    evento.preventDefault();

//pegando valor do input captando 
console.log(inputItem.value);

//validando se input tiver vazio
if(inputItem.value === ""){
    alert("Insire um Item!!");
    return
}

//LISTA

//criando <li>
const ItemDaLista = document.createElement('li');

//Criando <div> e classe dela
const containerItemDaLista = document.createElement('div');
containerItemDaLista.classList.add('lista-item-container');

//Criando <Input> o tipo dele <type:checkbox> e ID dinamico que mostra posição do elemento na Lista
const inputCheckbox = document.createElement('input');
inputCheckbox.type = 'checkbox';
inputCheckbox.id = 'checkbox-' + contador++;

//Adicionando paragrafo onde é dado o nome do elemento da lista e atribuindo o valor dinamico do input nele.
const nomeItem = document.createElement('p');
nomeItem.innerHTML = inputItem.value;

//ARVORE DOM

//adicionando os filhos da div (lista-item-container) que é input e o paragrafo
containerItemDaLista.appendChild(inputCheckbox);
containerItemDaLista.appendChild(nomeItem);

//e add o pai do item da lista que é o li 
ItemDaLista.appendChild(containerItemDaLista);

//add o avozão a ul da lista a cabeça 
listaDeCompras.appendChild(ItemDaLista);

});