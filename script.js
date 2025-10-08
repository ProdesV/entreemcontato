// Inicializa os carrosséis
const topSwiper = new Swiper('.top-carousel', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});

const bottomSwiper = new Swiper('.bottom-carousel', {
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

// EmailJS (substitua pelos seus IDs)
emailjs.init("SEU_USER_ID");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this)
    .then(() => alert("Mensagem enviada com sucesso!"))
    .catch(() => alert("Erro ao enviar mensagem."));
});
