// Obre el item pregunta al fer clic a l'icona
document.addEventListener("DOMContentLoaded", () => {
  const preguntas = document.querySelectorAll(".faq-question");

  preguntas.forEach((h4) => {
    h4.addEventListener("click", () => {
      const answer = h4.nextElementSibling;
      if (answer && answer.classList.contains("faq-answer")) {
        answer.classList.toggle("visible");
        h4.classList.toggle("open");
      }
    });
  });
});

// Inserta l'any actual al footer
document.getElementById("any-actual").textContent = new Date().getFullYear();
