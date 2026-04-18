import Deck from "./deck.js";

const STORAGE_KEY = "collection";
let decks = [];

export function getDecks() {
    return decks;
}

export function add(deck) {
    decks.push(deck);
    return deck;
}

export function remove(id) {
    let index = decks.findIndex((d) => d.id === id);
    if (index === -1) return null;
    let removed = decks[index];
    decks.splice(index, 1);
    return removed;
}

export function get(id) {
    let found = decks.find((d) => d.id === id);
    if (!found) return null;
    return found;
}

export function tags() {
    let all = [];
    decks.forEach((d) => {
        d.tags.forEach((t) => {
            if (all.indexOf(t) === -1) {
                all.push(t);
            }
        });
    });
    return all;
}

export async function load() {
    let stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        //found it in localStorage
        let parsed = JSON.parse(stored);
        decks = parsed.map((d) => Deck.fromJSON(d));
        return decks;
    }

    //nothing stored so get from file
    let response = await fetch('./data/collection.json');
    let data = await response.json();
    decks = data.map((d) => Deck.fromJSON(d));
    save();
    return decks;
}

export function save() {
    let plain = decks.map((d) => d.toJSON());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plain));
}

export function toString() {
    return JSON.stringify(decks.map((d) => d.toJSON()));
}
