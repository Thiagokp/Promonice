document.getElementById("Recentes").addEventListener("click", function (event) {
    event.preventDefault();// Impede o comportamento padrão do link
    window.location.href = 'Recentes.html'
});
document.getElementById("logo").addEventListener("click", function(event){
    event.preventDefault();  // Impede o comportamento padrão do link
    window.location.href = "index.html"
});
document.getElementById("Home").addEventListener("click", function(event){
    event.preventDefault();  
    window.location.href = "index.html"
});

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