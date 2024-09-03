const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener('click', () => {

    const botaoEstaAberto = elementoPlataformas.classList.contains('ativo');
    console.log(botaoEstaAberto);
    

    if(botaoEstaAberto) {
        elementoPlataformas.classList.remove('ativo');
    }else{
        elementoPlataformas.classList.add('ativo');
    }
});