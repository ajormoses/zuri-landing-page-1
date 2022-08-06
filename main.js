const modal = document.querySelector(".modal");
const hire_talent_btn = document.querySelector(".hire-talent");

hire_talent_btn.addEventListener("click", () => {
  modal.style.display = "block";
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
