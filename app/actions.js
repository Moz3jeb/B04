"use server";

// list of favorite card ids - just kept in memory
let favorites = [];

// return the current list
export async function getFavorites() {
  return favorites.slice();
}

// add or remove a card id from the favorites list
export async function toggleFavorite(cardId) {
  if (!cardId) {
    return favorites.slice();
  }
  let i = favorites.indexOf(cardId);
  if (i === -1) {
    // not there yet -> add
    favorites.push(cardId);
  } else {
    // already there -> remove
    favorites.splice(i, 1);
  }
  return favorites.slice();
}
