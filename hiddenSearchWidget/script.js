const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const body = document.querySelector(".body1");
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
