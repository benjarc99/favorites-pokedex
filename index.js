import getDataPokemonAndPrintLS from "./async-data.js";
import favoritesLS from "./local-storage.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  getDataPokemonAndPrintLS();
  favoritesLS(".btn-add-favs", ".btn-remove-favs");
});
