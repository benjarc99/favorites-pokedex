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

  const printCardFavoritesPokemon = (data) => {
    if (!(ls.getItem("myFavs") === null)) {
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

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
      $containerCards.appendChild($fragment);
    }
  };

  const getMyFavs = (async () => {
    try {
      const idMyFavsLS = myFavsLS.map((el) => {
        return el.id;
      });

      for (let i = 0; i < idMyFavsLS.length; i++) {
        let res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${idMyFavsLS[i]}`
          ),
          pokemon = await res.data;

        printCardFavoritesPokemon(pokemon);
      }
    } catch (err) {
      console.log(err);
    }
  })();
}
