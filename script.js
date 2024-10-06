//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega

const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const contato = document.getElementById("contato");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) =>{
    //  Para não carregar a página quando clicar em enviar
    e.preventDefault();
});

