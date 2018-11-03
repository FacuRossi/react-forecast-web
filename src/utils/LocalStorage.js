import { MAX_CITIES_ALLOWED } from "../config/settings";

export const addItemInArray = (key, item) => {
  let savedArray = JSON.parse(localStorage.getItem(key));
  if (!savedArray) {
    localStorage.setItem(key, JSON.stringify([item]));
  } else if (savedArray.length < MAX_CITIES_ALLOWED) {
    localStorage.setItem(key, JSON.stringify(savedArray.concat(item)));
  } else {
    let copy = [...savedArray];
    localStorage.setItem(key, JSON.stringify(copy.slice(1).concat(item)));
  }
};

export const deleteItemInArray = (key, id) => {
  let savedArray = JSON.parse(localStorage.getItem(key));
  localStorage.setItem(
    key,
    JSON.stringify(savedArray.filter(city => city.name !== id))
  );
};

export const getItem = key => {
  return JSON.parse(localStorage.getItem(key));
};
