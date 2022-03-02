const d = document,
  ls = localStorage;

export default function favoritesLS(btnAddFavs, btnRmFavs) {
  let arrayLS = [];

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnAddFavs)) {
      let dataLS = {
        id: e.target.id,
        name: e.target.dataset.name,
      };

      if (ls.getItem("myFavs") === null) {
        arrayLS.push(dataLS);
        ls.setItem("myFavs", JSON.stringify(arrayLS));
      } else {
        let myFavsLS = ls.getItem("myFavs");
        myFavsLS = JSON.parse(myFavsLS);

        myFavsLS.push(dataLS);
        ls.setItem("myFavs", JSON.stringify(myFavsLS));
      }

      e.target.classList.add("btn-oculto");
      e.target.nextElementSibling.classList.remove("btn-oculto");
    }
    if (e.target.matches(btnRmFavs)) {
      let myFavsLS = ls.getItem("myFavs");
      myFavsLS = JSON.parse(myFavsLS);

      let indexRemove = myFavsLS.findIndex(
        (el) => (el.id === e.target.id) & (el.name === e.target.dataset.name)
      );
      myFavsLS.splice(indexRemove, 1);

      ls.setItem("myFavs", JSON.stringify(myFavsLS));

      e.target.classList.add("btn-oculto");
      e.target.previousElementSibling.classList.remove("btn-oculto");
    }
  });
}
