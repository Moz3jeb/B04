import * as collection from "../cards/collection.js";
import { renderCollection } from "./render.js";
import Deck from "../cards/deck.js";
import Slide from "../cards/slide.js";
import ForeignWord from "../cards/foreign-word.js";
import PlayingCard from "../cards/playing-card.js";
import StringList from "../cards/string-list.js";

let container;

//random words i use for fake data
const WORDS = ['apple','river','mountain','book','music','window',
    "table","cloud","forest","planet", 'bridge',"garden",
    "summer","ocean","paper","lamp","coffee","stone","rabbit","key"];

function randomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function randomCard(type) {
    if (type === "foreign-word") {
        return new ForeignWord({
            data: {
                word: randomWord(),
                pronunciation: randomWord(),
                translation: randomWord()
            }
        });
    }
    if (type === "playing-card") {
        let pips = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let suits = ["hearts", "spades", "diamonds", "clubs"];
        return new PlayingCard({
            data: {
                pip: pips[Math.floor(Math.random() * pips.length)],
                suit: suits[Math.floor(Math.random() * suits.length)]
            }
        });
    }
    if (type === "string-list") {
        return new StringList({
            data: {
                items: [randomWord(), randomWord(), randomWord()]
            }
        });
    }
    return null;
}

function onEvent(type, payload) {
    if (type === "add-card") {
        let slide = findSlide(payload.slideId);
        if (slide) {
            let card = randomCard(payload.type);
            slide.add(card);
        }
    }
    else if (type === "add-slide") {
        let deck = collection.get(payload.deckId);
        if (deck) {
            let slide = new Slide({ title: payload.title });
            deck.add(slide);
        }
    }
    else if (type === "remove-slide") {
        let decks = collection.getDecks();
        decks.forEach((d) => {
            if (d.get(payload)) {
                d.remove(payload);
            }
        });
    }
    else if (type === "remove-deck") {
        collection.remove(payload);
    }
    else if (type === "update") {
        // card was shuffled, nothing to change in the model, just save + re-render
    }

    collection.save();
    renderCollection(container, onEvent);
}

function findSlide(id) {
    let decks = collection.getDecks();
    let result = null;
    decks.forEach((d) => {
        let s = d.get(id);
        if (s) result = s;
    });
    return result;
}

async function main() {
    try {
        await collection.load();
    } catch (err) {
        console.log("load fail", err);
    }
    container = document.getElementById("collection");
    console.log("decks loaded", collection.getDecks().length);
    renderCollection(container, onEvent);

    let deckForm = document.getElementById("new-deck-form");
    deckForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let t = deckForm.elements["title"].value;
        let deck = new Deck({ title: t });
        collection.add(deck);
        collection.save();
        renderCollection(container, onEvent);
        deckForm.reset();
    });
}

main();
