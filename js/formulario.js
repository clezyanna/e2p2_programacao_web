var botaoAdicionar = document.querySelector("#adicionar-livros");
botaoAdicionar.addEventListener("click", function dblclickfunction(event) {//dblclickfunction->faz acontecer o duplo clik->é clicado duas vezes;
    //isto é, quando clicamos rapidamente duas vezes em um único elemento em um período muito curto de tempo.
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

   
    var livroTr = montaTr(livro);

    var tabela = document.querySelector("#tabela-livros");


    form.reset();
});


function montaTr(livros) {
    var livrosTr = document.createElement("tr");
    livrosTr.classList.add("livros");

    livrosTr.appendChild(montaTd(livro.docente, "info-tipo de vinculo"));
    livrosTr.appendChild(montaTd(livro.discente, "info-Edição"));
    livrosTr.appendChild(montaTd(livro.técnico, "info-Ano de publicação"));
    livrosTr.appendChild(montaTd(livro.autor, "info-autor"));
    livrosTr.appendChild(montaTd(livro.título, "info-título"));

    return livroTr;
}
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
function validaAnodePublicacao(anodepublicacao) {
   if (ano de publicacao < 1900 || ano de publicacao > 2019) {
        return "";
    }else{
        return "publicação invalida";
    }
}