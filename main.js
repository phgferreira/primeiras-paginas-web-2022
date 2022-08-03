
// Adiciona a URL no início para poder comparar com o src da imagem depois
const isFavorito = window.location.href + '/img/icones/favorite_car_on.png';
const isNotFavorito = window.location.href + '/img/icones/favorite_car_off.png';

// Função que modifica um cartão de acordo com os dados do carro
function modificaCartao(cartao, carro) {

    // Torna a cópia visível
    cartao.style.visibility = 'visible';
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

// FALTA ELÉTRICOS E BLINDADOS
const carros = [
    {nome: "Chevrolet Onix",    categoria: "Compacto",  descricao: "ONIX HATCH LT 1.0 12V Flex 5p Mec.",        foto: "/img/compactos/chevrolet_onix.webp"},
    {nome: "Fiat Mobi",         categoria: "Compacto",  descricao: "MOBI Like 1.0 Fire Flex 5p.",               foto: "/img/compactos/fiat_mobi.webp"},
    {nome: "Hyundai HB20",      categoria: "Compacto",  descricao: "HB20 Vision 1.0 TB Flex 12V Aut.",          foto: "/img/compactos/hyundai_hb20.webp"},
    {nome: "Peugeot 208",       categoria: "Compacto",  descricao: "208 Like 1.0 Flex 6V 5p Mec.",              foto: "/img/compactos/peugeot_208.webp"},
    {nome: "Renault Kwid",      categoria: "Compacto",  descricao: "KWID ZEN 1.0 FLEX 12V 5P MEC. (SN)",        foto: "/img/compactos/renault_kwid.webp"},
    {nome: "Volkswagen Gol",    categoria: "Compacto",  descricao: "Gol 1.0 Flex 12V 5p.",                      foto: "/img/compactos/volkswagen_gol.webp"},

    {nome: "Fiat Cronos",       categoria: "Sedan",     descricao: "CRONOS DRIVE 1.3 8V Flex.",                 foto: "/img/sedans/fiat_cronos.webp"},
    {nome: "Hyundai HB2S",      categoria: "Sedan",     descricao: "HB20S Vision 1.0 Flex 12V Mec.",            foto: "/img/sedans/hyundai_hb20s.webp"},
    {nome: "Volkswagen Voyage", categoria: "Sedan",     descricao: "VOYAGE 1.0 Flex 12V 4p.",                   foto: "/img/sedans/volkswagen_voyage.webp"},

    {nome: "Fiat Pulse",        categoria: "SUV",       descricao: "PULSE DRIVE 1.0 Turbo 200 Flex Aut.",       foto: "/img/suvs/fiat_pulse.webp"},
    {nome: "Hyundai Creta",     categoria: "SUV",       descricao: "Creta Action 1.6 16V Flex Aut.",            foto: "/img/suvs/hyundai_creta.webp"},
    {nome: "Jeep Renegade",     categoria: "SUV",       descricao: "Renegade Long. T270 1.3 TB 4x2 Flex Aut.",  foto: "/img/suvs/jeep_renegade.webp"},
    {nome: "Nissan Kicks",      categoria: "SUV",       descricao: "KICKS Sense 1.6 16V Flex Aut.",             foto: "/img/suvs/nissan_kicks.webp"},
    {nome: "Peugeot 2008",      categoria: "SUV",       descricao: "2008 Allure Essencial 1.6 Flex 16V Aut.",   foto: "/img/suvs/peugeot_2008.webp"},

    {nome: "BYD TAN EV 4x4",    categoria: "Eletrico",  descricao: "TAN EV 4x4 (Elétrico)",                     foto: "/img/eletricos/byd_tan.webp"},
    {nome: "Peugeot E-208",     categoria: "Eletrico",  descricao: "e-208 GT 5p Aut. (Elétrico)",               foto: "/img/eletricos/peugeot_e_208.webp"},

    {nome: "Chery Tiggo",       categoria: "Blindado",  descricao: "Tiggo 8 TXS 1.6 16V TGDi Aut. (Blindado)",  foto: "/img/blindados/chery_tiggo.webp"}

];
const modelo = document.querySelector('.cartaoModelo');
// OBS: Essa lista é um único elemento
const lista = document.querySelector('.listaCarros');

for (i = 0; i < carros.length; i++) {

    // Gera uma cópia do modelo
    const cartao = modelo.cloneNode(true);

    // Modifica o cartão cópia
    modificaCartao(cartao, carros[i]);

    // Adiciona a copia na lista de carros HTML
    lista.appendChild(cartao);

}

// Depois de adicionado os cartões personalizados, remove o cartão modelo
modelo.style.display = 'none';

