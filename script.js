
/* =========================================
   FIRLAN ADVOGADOS — LINK NA BIO
   Funcionalidades do site
========================================= */

// Atualiza automaticamente o ano do rodapé
const anoAtual = document.getElementById("ano");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

// Adiciona feedback visual ao clicar nos links
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("link-clicado");
  });
});
if (window.lucide) {
  lucide.createIcons();
}