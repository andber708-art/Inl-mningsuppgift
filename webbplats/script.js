// JS till submit form by Hilda

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const thankYou = document.createElement("p");
  thankYou.className = "thank-you";
  thankYou.textContent = "Tack för din prenumeration!";
  form.after(thankYou);
});
// Kommentar bara för att det krävs :)
