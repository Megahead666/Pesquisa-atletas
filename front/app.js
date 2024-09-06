
function pesquisar() {
//obtem a seção html
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
        section.innerHTML =  "<P> Nada foi Encontrado. Digite um nome ou um esporte!</p>"
        return
    }

campoPesquisa = campoPesquisa.toLowerCase();

//inicializa uma string para armazenar resultados
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";


//itera sobre cada dado na lista
for(let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    //cria um novo elemento html para cada resultado
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
    resultados += `
    <div class="item-resultado">
    <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href=${dado.link} target="_blank">Mais informções</a>
    </div>
`;
}
   }
if (!resultados){
    resultados = "<P> Nada foi Encontrado </p>"
}
//aTRIBUI OS RESULTADOS GERADOS A SEÇÃO HTML
section.innerHTML = resultados;
}