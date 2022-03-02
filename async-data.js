const d = document,
  ls = localStorage;

export default function getDataPokemonAndPrintLS() {
  const $template = d.querySelector("template").content,
    $fragment = d.createDocumentFragment(),
    $containerCards = d.querySelector(".container-cards");

  let myFavsLS;
  if (ls.getItem("myFavs")) {
    myFavsLS = ls.getItem("myFavs");
    myFavsLS = JSON.parse(myFavsLS);
  }

  // const idMyFavsLS = myFavsLS.map((el) => {
  //   return [el.id];
  // });
  // console.log(idMyFavsLS);

  const printCardPokemon = (data) => {
    $template
      .querySelector(".img-card")
      .setAttribute("src", `${data.sprites.front_default}`);
    $template.querySelector(
      "h4"
    ).textContent = `${data.name[0].toUpperCase()}${data.name.slice(1)}`;

    $template.querySelectorAll("button").forEach((el) => {
      el.id = data.id;
      el.dataset.name = data.name;
    });

    if (data.types.length === 2) {
      $template.querySelector(
        ".text-card"
      ).textContent = `Type: ${data.types[0].type.name}, ${data.types[1].type.name}`;
    } else {
      $template.querySelector(
        ".text-card"
      ).textContent = `Type: ${data.types[0].type.name}`;
    }

    if (!(ls.getItem("myFavs") === null)) {
      let findIndex = myFavsLS.findIndex(
        (el) => (el.id == data.id) & (el.name === data.name)
      );
      if (findIndex > -1) {
        $template.querySelector(".btn-add-favs").classList.add("btn-oculto");
        $template
          .querySelector(".btn-remove-favs")
          .classList.remove("btn-oculto");
      }
      if (findIndex === -1) {
        $template.querySelector(".btn-add-favs").classList.remove("btn-oculto");
        $template.querySelector(".btn-remove-favs").classList.add("btn-oculto");
      }
    }

    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
    $containerCards.appendChild($fragment);
  };

  const getDataPokemon = (async () => {
    try {
      for (let id = 1; id <= 150; id++) {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
          pokemon = await res.data;

        printCardPokemon(pokemon);
      }
    } catch (err) {
      console.log(err);
    }
  })();
}
