const target = document.querySelectorAll("[data-animation]");
const header = document.querySelector("header");
const animationClass = "animated";

// função para animar elementos html quando aparecer na tela do usuário.
function animateScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 0.75;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

const html = document.documentElement;

function toggleMode() {
  html.classList.toggle("light");
}
animateScroll();

// eventlistener para mudar a header depois que o usuário descer um pouco a tela com o scroll
window.addEventListener("scroll", function () {
  header.classList.toggle("header-stuck", window.scrollY > 100);

  animateScroll();
});
