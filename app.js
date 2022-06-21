const dadosFilmes = {
    "results": [
        {
          "backdrop_path": "/5jkE2SzR5uR2egEb1rRhF22JyWN.jpg",
          "genre_ids": [
            12,
            14
          ],
          "id": 671,
          "original_language": "en",
          "original_title": "Harry Potter and the Philosopher's Stone",
          "overview": "Esta é a primeira adaptação da série de best-sellers de Harry Potter, sobre um órfão que descobre que os seus pais eram feiticeiros e que ele também possui poderes mágicos. Harry Potter passou a maior parte do seu tempo debaixo da escada na casa dos Dursleys, seus tios que não gostam dele. Porém, quando é convidado para estudar na Escola de Feitiços e Magia Hogwart, Harry percebe que existem dois mundos: um é o mundo sem graça dos humanos comuns e o outro é cheio de magia, encanto e fantasia.",
          "popularity": 316.022,
          "poster_path": "/l1FfRmKRNXRSqXT5GlMo16MX2LX.jpg",
          "release_date": "2001-11-16",
          "title": "Harry Potter e a Pedra Filosofal",
          "vote_average": 7.9,
        },
        {
            "backdrop_path": "/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
            "genre_ids": [
                12,
                14
            ],
            "id": 672,
            "original_language": "en",
            "original_title": "Harry Potter and the Chamber of Secrets",
            "overview": "Harry Potter frequenta o segundo ano da «Hogwarts School», uma escola de bruxarias e feitiços. Ele é visitado por um duende doméstico chamado Dobby que o aconselha a não regressar à escola. Harry ignora este aviso e regressa. Ele continua famoso, mas detestado pelos Slytherins, e ainda mais por Snape e Malfoy. De repente, coisas estranhas começam a acontecer: as pessoas começam a ficar petrificadas e ninguém conhece a causa disso. Entretanto Harry continua a ouvir uma voz... uma voz que parece vir das paredes... lembra-se da história da Câmara dos Segredos - diz-se que só o verdadeiro descendente de Salazar Slytherin será capaz de abri-la...",
            "popularity": 280.55,
            "poster_path": "/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg",
            "release_date": "2002-11-13",
            "title": "Harry Potter e a Câmara dos Segredos",
            "vote_average": 7.7,
        },
        {
            "backdrop_path": "/vbk5CfaAHOjQPSAcYm6AoRRz2Af.jpg",
            "genre_ids": [
                12,
                14
            ],
            "id": 673,
            "original_language": "en",
            "original_title": "Harry Potter and the Prisoner of Azkaban",
            "overview": "Harry Potter, Ron e Hermione entram na adolescência e voltam à Hogwarts para o terceiro ano lectivo na escola de bruxaria. Em Hogwarts procuram resolver o mistério de um fugitivo, o assassino Sirius Black, que foge da prisão de bruxos de Azkaban e representa uma perigosa ameaça para o jovem bruxo.",
            "popularity": 258.2,
            "poster_path": "/1HdMUghqlgOIvbsU9ZtO40IPRzl.jpg",
            "release_date": "2004-05-31",
            "title": "Harry Potter e o Prisioneiro de Azkaban",
            "vote_average": 8,
        },
    ]

}

const mostraFilmes = (data) => {
    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem ('db_filmes', data.target.response)

    let dadosHTML = '';

    for (let cont=1; cont<=3; cont++) {
        let filme = dadosFilmes.results[cont];
        dadosHTML += `
            <div class="col-12 col-sm-12 col-lg-4">
                <div class="card bg-black" widht="100%">
                    <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top imgdetalhes" alt="Filme 1">
                </div>
                <p class="card-text">
                    <b>Título:</b> ${filme.title}<br>
                    <b>Descrição:</b> ${filme.overview}<br>
                    <b>Nota:</b> ${filme.vote_average}
                </p>
                <a href="detalhes.html?id=${filme.id}" type="button" class="btn corbgbotao btn-sm">Mais Detalhes</a>
            </div>
        `
    }
    document.getElementById ('divListaFilmes').innerHTML = dadosHTML
}


const mostraErro = (data) => {
    alert ('Erro na requisição do conteúdo.');
}

const init = () => {
    let xhr = new XMLHttpRequest ();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=f47631f86b65cb56aeef0bf7a7900478&language=pt-BR"
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send ();

}

document.body.onload = init;



// var form = document.getElementById('formulario');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
// });
// var input = document.querySelector("#pesquisaGeral");
// var texto = input.value;
// console.log(texto);
// let pesquisa = document.getElementById("formulario");
//     console.log('aqui');
//     console.log(pesquisa);
// pesquisa.addEventListener("submit", (e) => {
//         e.preventDefault();
//         console.log(e);
//         let xhr = new XMLHttpRequest ();
    
//    let url = https://api.themoviedb.org/3/search/multi?api_key=f47631f86b65cb56aeef0bf7a7900478&language=pt-br&query=
        // const pesquisaUser document.querySelector("#pesquisaGeral").value;
        // url += pesquisaUser();
        // xhr.open ('GET', url)
// })

// const mostraPesquisa = (data) => {
//     let respostaPesquisa = JSON.parse(data.target.response)
//     localStorage.setItem ('db_filmes', data.target.response)

//     let dadosHTML = '';

//     for (let cont=1; cont<=results[i]; cont++) {
//         let filme = dadosFilmes.results[cont];
//         dadosHTML += `
//             <div class="col-12 col-sm-12 col-lg-4">
//                 <div class="card bg-black" widht="100%">
//                     <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top imgdetalhes" alt="Filme 1">
//                 </div>
//                 <p class="card-text">
//                     <b>Título:</b> ${filme.title}<br>
//                     <b>Descrição:</b> ${filme.overview}<br>
//                     <b>Nota:</b> ${filme.vote_average}
//                 </p>
//                 <a href="detalhes.html?id=${filme.id}" type="button" class="btn corbgbotao btn-sm">Mais Detalhes</a>
//             </div>
//         `
//     }
//     document.getElementById ('divListaFilmes').innerHTML = dadosHTML
// }


// mostraFilmes = Função para pegar os filmes populares e exibir na tela index
//