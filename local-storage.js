const d = document,
  ls = localStorage;

export default function favoritesLS(btnAddFavs, btnRmFavs) {
  let arrayLS = [];

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnRmFavs)) {
      let myFavsLS = ls.getItem("myFavs");
      myFavsLS = JSON.parse(myFavsLS);

      let dataLS = e.target.dataset.name;

      let indexRemove = myFavsLS.findIndex((el) => el === dataLS);
      myFavsLS.splice(indexRemove, 1);

      ls.setItem("myFavs", JSON.stringify(myFavsLS));

      e.target.parentElement.classList.add("card-oculta");
    }
  });
}
