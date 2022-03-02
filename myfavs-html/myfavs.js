import menuHamburguesa from "../hamburguesa.js";
import getDataPokemonAndPrintLS from "./my-favs-async-data.js";
import favoritesLS from "./my-favs-ls.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  getDataPokemonAndPrintLS();
  menuHamburguesa();
  favoritesLS(".btn-add-favs", ".btn-remove-favs");
});
