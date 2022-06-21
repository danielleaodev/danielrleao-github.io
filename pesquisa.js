var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    pesquisa();
    // impede o envio do form
    e.preventDefault();
});

const mostraErroPesquisa = (data) => {
    alert ('Erro na requisição do conteúdo.');
}

const pesquisa = () => {
    console.log('funcionou');

    let xhr = new XMLHttpRequest ();
    let url = "https://api.themoviedb.org/3/search/multi?api_key=f47631f86b65cb56aeef0bf7a7900478&language=pt-br&query="
    url += campo.value;
    xhr.open ('GET', url, true);
    xhr.send ();

    xhr.onload = mostraPesquisa;
    xhr.onerror = mostraErroPesquisa;

    
    // xhr.onload = mostraFilmes;
    // xhr.onerror = mostraErro;
}

const mostraPesquisa = (data) => {
    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem ('db_filmes', data.target.response)

    let dadosHTML = '';

    for (let cont=1; cont<=10; cont++) {
        let filme = dadosFilmes.results[cont];
dadosHTML+=`
<div class="card bg-black col-lg-12 col-12">
<div class="row">
    <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <img class="cardImgPesquisa" width="100%" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="cartaz do filme">
    </div>
    <div class=" col-12 col-md-9 col-lg-9 col-xl-9">
        <h5 class="card-title tituloFilmePesquisa">${filme.title}</h5>
        <p class="card-text dataFilmePesquisa">${filme.release_date}</p>
        <p class="card-text descFilmePesquisa">${filme.overview}</p>
    </div>
    <a href="https://www.themoviedb.org/movie/${filme.id}" class="btn corbgbotao">Página do Filme</a>
</div>
</div>
        `
    }
    document.getElementById ('divPesquisa').innerHTML = dadosHTML
}