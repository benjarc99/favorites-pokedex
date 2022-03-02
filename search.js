const d = document;

export default function searchPokemon(btnSearch, inputSearch) {
  const $btnSearch = d.getElementById(btnSearch),
    $inputSearch = d.getElementById(inputSearch);

  d.addEventListener("input", (e) => {
    if (e.target === $inputSearch) {
      if (e.target.value === "") {
        d.querySelectorAll(".card").forEach((card) =>
          card.classList.remove("card-oculta")
        );
      }
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $btnSearch) {
      const $cards = d.querySelectorAll(".card");

      $cards.forEach((card) => {
        card
          .querySelector("h4")
          .textContent.toLocaleLowerCase()
          .includes($inputSearch.value.toLocaleLowerCase())
          ? card.classList.remove("card-oculta")
          : card.classList.add("card-oculta");
      });
    }

    // Menu - hamburguesa
    if (e.target.matches(".panel-btn *")) {
      d.querySelector(".panel-btn").classList.toggle("is-active");
    }
  });
}
