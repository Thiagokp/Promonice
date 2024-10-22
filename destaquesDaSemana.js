document.getElementById("Recentes").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = 'Recentes.html'
});
document.getElementById("logo").addEventListener("click", function(event){
    event.preventDefault();  
    window.location.href = 'index.html'
});
document.getElementById("Home").addEventListener("click", function(event){
    event.preventDefault();  
    window.location.href = 'index.html'
});

const produtos = document.querySelectorAll('.Produto');
const like = document.getElementsByClassName("like");
const Dislike = document.getElementsByClassName("Dislike");

Array.from(like).forEach(function (element) {
    element.addEventListener('click', function () {
        let likeCount = element.parentElement.querySelector(".like-count");
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
});
Array.from(Dislike).forEach(function (element) {
    element.addEventListener('click', function () {
        let dislikeCount = element.parentElement.querySelector(".dislike-count");
        dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
    });
});

produtos.forEach((produto) => {
    const descricao = produto.querySelector('.descProdutos');
    const verMaisBtn = document.createElement('span');
    verMaisBtn.textContent = 'Ver Mais';
    verMaisBtn.classList.add('ver-mais');
    produto.appendChild(verMaisBtn);

    verMaisBtn.addEventListener('click', () => {
        if (descricao.classList.contains('textoLimitado')) {
            descricao.classList.remove('textoLimitado');
            descricao.classList.add('mostrarTextoCompleto');
            verMaisBtn.textContent = 'Ver Menos';
        } else {
            descricao.classList.add('textoLimitado');
            descricao.classList.remove('mostrarTextoCompleto');
            verMaisBtn.textContent = 'Ver Mais';
        }
    });
});