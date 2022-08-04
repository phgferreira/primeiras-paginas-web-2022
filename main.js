// Lista de carros e suas caracteristicas
const carros = [
    {nome: "Chevrolet Onix",    categoria: "Compactos",  descricao: "ONIX HATCH LT 1.0 12V Flex 5p Mec.",        foto: "img/compactos/chevrolet_onix.png"},
    {nome: "Fiat Mobi",         categoria: "Compactos",  descricao: "MOBI Like 1.0 Fire Flex 5p.",               foto: "img/compactos/fiat_mobi.png"},
    {nome: "Hyundai HB20",      categoria: "Compactos",  descricao: "HB20 Vision 1.0 TB Flex 12V Aut.",          foto: "img/compactos/hyundai_hb20.png"},
    {nome: "Peugeot 208",       categoria: "Compactos",  descricao: "208 Like 1.0 Flex 6V 5p Mec.",              foto: "img/compactos/peugeot_208.png"},
    {nome: "Renault Kwid",      categoria: "Compactos",  descricao: "KWID ZEN 1.0 FLEX 12V 5P MEC. (SN)",        foto: "img/compactos/renault_kwid.png"},
    {nome: "Volkswagen Gol",    categoria: "Compactos",  descricao: "Gol 1.0 Flex 12V 5p.",                      foto: "img/compactos/volkswagen_gol.png"},

    {nome: "Fiat Cronos",       categoria: "Sedans",     descricao: "CRONOS DRIVE 1.3 8V Flex.",                 foto: "img/sedans/fiat_cronos.png"},
    {nome: "Hyundai HB2S",      categoria: "Sedans",     descricao: "HB20S Vision 1.0 Flex 12V Mec.",            foto: "img/sedans/hyundai_hb20s.png"},
    {nome: "Volkswagen Voyage", categoria: "Sedans",     descricao: "VOYAGE 1.0 Flex 12V 4p.",                   foto: "img/sedans/volkswagen_voyage.png"},

    {nome: "Fiat Pulse",        categoria: "SUVs",       descricao: "PULSE DRIVE 1.0 Turbo 200 Flex Aut.",       foto: "img/suvs/fiat_pulse.png"},
    {nome: "Hyundai Creta",     categoria: "SUVs",       descricao: "Creta Action 1.6 16V Flex Aut.",            foto: "img/suvs/hyundai_creta.png"},
    {nome: "Jeep Renegade",     categoria: "SUVs",       descricao: "Renegade Long. T270 1.3 TB 4x2 Flex Aut.",  foto: "img/suvs/jeep_renegade.png"},
    {nome: "Nissan Kicks",      categoria: "SUVs",       descricao: "KICKS Sense 1.6 16V Flex Aut.",             foto: "img/suvs/nissan_kicks.png"},
    {nome: "Peugeot 2008",      categoria: "SUVs",       descricao: "2008 Allure Essencial 1.6 Flex 16V Aut.",   foto: "img/suvs/peugeot_2008.png"},

    {nome: "BYD TAN EV 4x4",    categoria: "Elétricos",  descricao: "TAN EV 4x4 (Elétrico)",                     foto: "img/eletricos/byd_tan.png"},
    {nome: "Peugeot E-208",     categoria: "Elétricos",  descricao: "e-208 GT 5p Aut. (Elétrico)",               foto: "img/eletricos/peugeot_e_208.png"},

    {nome: "Chery Tiggo",       categoria: "Blindados",  descricao: "Tiggo 8 TXS 1.6 16V TGDi Aut. (Blindado)",  foto: "/img/blindados/chery_tiggo.png"}

];

// ##################### CONSTRUÇÃO DO CONTEÚDO #####################

// Usa o cartão modelo para gerar os demais cartões com dados dos carros
const modelo = document.querySelector('.cartaoModelo');
// OBS: Essa lista é um único elemento
const lista = document.querySelector('.listaCarros');

function loadCarros(pesquisa) {
    
    // Filtra: Se a pesquisa for nula então passa, senão verifica categoria ou nome ou descricao
    carros.filter( function(carro) {
        return (pesquisa === null || pesquisa == 'undefined') ? true : (
            carro.categoria.toUpperCase().includes(pesquisa.toUpperCase()) ||
            carro.nome.toUpperCase().includes(pesquisa.toUpperCase()) ||
            carro.descricao.toUpperCase().includes(pesquisa.toUpperCase())
        );
    } )
    // Para cada item da lista vamos realizar o seguinte procedimento ...
    .forEach(carro => {
        // Gera uma cópia do modelo
        const cartao = modelo.cloneNode(true);
        
        // Modifica o cartão cópia
         modificaCartao(cartao, carro);
        
        // Adiciona a copia na lista de carros HTML
        lista.appendChild(cartao);
    });
    
}
// Inicialmente ao carregar o body passa categoria como nulo
document.body.onload = function () {
    loadCarros(null);
}

// ##################### CONSTRRUÇÕES DOS CARTÕES #####################

// Adiciona a URL no início para poder comparar com o src da imagem depois
const isFavorito = window.location.href + 'img/icones/favorite_car_on.png';
const isNotFavorito = window.location.href + 'img/icones/favorite_car_off.png';

// Função que modifica um cartão de acordo com os dados do carro
function modificaCartao(cartao, carro) {

    // Muda o display para o padrão para o elemento ser exibido
    cartao.style.display = 'block';
    // Remove a classe de modelo
    cartao.classList.remove('cartaoModelo');
    // Modifica os elementos filhos
    cartao.querySelector('.fotoCarro').setAttribute('src', carro.foto);
    cartao.querySelector('.fotoCarro').setAttribute('alt', `Foto de ${carro.nome}`)
    cartao.querySelector('h3').innerHTML = carro.nome;
    cartao.querySelector('p').innerHTML = carro.descricao;

    // Programa o botão de favorito
    const favorito = cartao.querySelector('.carroFavorito');
    favorito.onclick = function () {
        favorito.setAttribute('src', (favorito.src === isNotFavorito) ? isFavorito : isNotFavorito)
    };

}

// ##################### CONFIGURAÇÃO DO FILTRO CATEGORIA #####################
const menu = document.querySelectorAll('nav ul li input[type="button"');
menu.forEach(item => {
    item.onclick = function () {
        // Zera a lista de carros e volta com o modelo para recarregar a página
        lista.innerHTML = "";
        lista.appendChild(modelo);
        // Passa o valor do botão do menu como atributo para a função recarregar os carros da págian
        loadCarros(item.value);
    }
});

// ##################### CONFIGURAÇÃO DO FILTRO PESQUISA #####################
const inputPesquisa = document.querySelector('.pesquisaForm input[type="text"]');
inputPesquisa.onkeyup = function () {
        // Zera a lista de carros e volta com o modelo para recarregar a página
        lista.innerHTML = "";
        lista.appendChild(modelo);
        // Passa o valor do botão do menu como atributo para a função recarregar os carros da págian
        loadCarros(inputPesquisa.value);
}