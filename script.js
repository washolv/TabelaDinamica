var tabela = document.getElementById('tbl');
var indiceLinha;

function adicionar() {
    let novaLinha = document.querySelector('tbody');
    let tr = document.getElementById('minhatr');
    let clone = tr.cloneNode(true);
    clone.setAttribute("contentEditable", "false");
    clone.cells[0].innerHTML = '';
    clone.cells[1].innerHTML = '';
    clone.cells[2].innerHTML = '';
    novaLinha.appendChild(clone);
}


function remover(linha) {
    linhas = tabela.rows.length;
    if (linhas > 2) {
        let i = linha.parentNode.parentNode.rowIndex;
        document.getElementById('tbl').deleteRow(i);
    } else {
        alert('Tabela contém somente 1 linha');
    }
}

function alterar(linha) {
    campo = document.querySelectorAll("tr");
    let i = linha.parentNode.parentNode.rowIndex;
    campo[i].setAttribute("contentEditable", "true");

}

function salvar(linha) {
    linhas = tabela.rows.length;
    campo = document.querySelectorAll("tr");
    for (let index = 0; index < linhas; index++) {
        campo[index].setAttribute("contentEditable", "false");
    }
    alert('Informações salvas!');
}