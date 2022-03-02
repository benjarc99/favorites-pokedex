const d = document;
export default function menuHamburguesa() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".panel-btn *")) {
      d.querySelector(".panel-btn").classList.toggle("is-active");
    }
  });
}
