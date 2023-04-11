const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  menu.classList.toggle("active");
});

window.onscroll = () => {
  menuIcon.classList.remove("fa-xmark");
  menu.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home, .hanging, footer, .about-img", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .about p, .portfolio-box, .contact .form-holder, .team-holder, .blog-holder",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  ".card, .portfolio .text, .team .text, .client-card, .contact .text",
  { origin: "left" }
);
ScrollReveal().reveal(
  ".home-left p, .about h1, .testimonials .text, .blog .text, .services .text",
  { origin: "right" }
);
