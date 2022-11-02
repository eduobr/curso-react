import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLocaleLowerCase();
  //si el heroe incluye el nombre entonces lo va a regresar
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
