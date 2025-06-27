const inputItem = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');
const adicionarItem = document.getElementById('adicionar-item');
let contador = 0;

//BOTÃO SALVAR 

//Adicionando evento de click e add avento de ao clicar nao perder infaprendi a os
adicionarItem.addEventListener('click', (evento) => {
    evento.preventDefault();

    //pegando valor do input captando 
    console.log(inputItem.value);

    //validando se input tiver vazio
    if (inputItem.value === "") {
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

    inputCheckbox.addEventListener('click', function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    })

    //ARVORE DOM

    //adicionando os filhos da div (lista-item-container) que é input e o paragrafo
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    //e add o pai do item da lista que é o li 
    ItemDaLista.appendChild(containerItemDaLista);

    //add o avozão a ul da lista a cabeça 
    listaDeCompras.appendChild(ItemDaLista);

    //DATA

    //Criando elemento p e classe dele
    const innerData = document.createElement('p');
    innerData.classList.add('texto-data');

    //pegando dia da semana
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {
        weekday: "long"
    });
    //pegando data dia,mes,ano
    const data = new Date().toLocaleDateString('pt-BR');
    //pegando horas e minutos
    const hora = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    });
    //contatenando as infos dataCompleta
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`

    //passando o texto(datacompleta)formatado para o p 
    innerData.innerHTML = dataCompleta;

    //add p (data) que é filho do li 
    ItemDaLista.appendChild(innerData);

    VerificandoMensagemListaVazia();
});

const mensagemVazia = document.querySelector(".mensagem-lista-vazia");

function VerificandoMensagemListaVazia(){
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if(itensDaLista.length === 0 ){
        mensagemVazia.style.display = "block"
    }else{
        mensagemVazia.style.display = "none";
    }
}
VerificandoMensagemListaVazia()