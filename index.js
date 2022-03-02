import getDataPokemonAndPrintLS from "./async-data.js";
import menuHamburguesa from "./hamburguesa.js";
import favoritesLS from "./local-storage.js";
import searchPokemon from "./search.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  getDataPokemonAndPrintLS();
  menuHamburguesa();
  searchPokemon("btn-search", "input-search");
  favoritesLS(".btn-add-favs", ".btn-remove-favs");
});
