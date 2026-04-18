import Card from "../cards/card.js";
import ForeignWord from "../cards/foreign-word.js";
import PlayingCard from "../cards/playing-card.js";
import StringList from "../cards/string-list.js";
import Slide from "../cards/slide.js";
import Deck from "../cards/deck.js";
import * as collection from "../cards/collection.js";

//list of words used for shuffling
const WORDS = ["apple","river","mountain","book","music","window","table","cloud","forest",
    "planet","bridge","garden","summer","ocean","paper","lamp","coffee","stone","rabbit","key"];

function randomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function randomDataFor(type) {
    if (type === "foreign-word") {
        return { word: randomWord(), pronunciation: randomWord(), translation: randomWord() };
    }
    if (type === "playing-card") {
        let pips = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let suits = ["hearts", "spades", "diamonds", "clubs"];
        return {
            pip: pips[Math.floor(Math.random() * pips.length)],
            suit: suits[Math.floor(Math.random() * suits.length)]
        };
    }
    if (type === "string-list") {
        return { items: [randomWord(), randomWord(), randomWord()] };
    }
    return {};
}

let currentFilter = null;

function onTagClick(tagText, e) {
    e.stopPropagation();
    let cards = document.querySelectorAll(".card");
    if (currentFilter === tagText) {
        cards.forEach((c) => c.classList.remove("filtered"));
        currentFilter = null;
    }
    else {
        currentFilter = tagText;
        cards.forEach((c) => {
            let tagSpans = c.querySelectorAll(".tag");
            let has = false;
            tagSpans.forEach((t) => {
                if (t.textContent === tagText) has = true;
            });
            if (has) {
                c.classList.remove("filtered");
            }
            else {
                c.classList.add("filtered");
            }
        });
    }
}

function makeTagsElement(tags) {
    let wrap = document.createElement("div");
    wrap.className = "tags";
    tags.forEach((t) => {
        let span = document.createElement("span");
        span.className = "tag";
        span.textContent = t;
        span.addEventListener("click", (e) => onTagClick(t, e));
        wrap.appendChild(span);
    });
    return wrap;
}

//click the card to shuffle it
function attachShuffle(el, card, callback) {
    el.addEventListener("click", (e) => {
        if (e.target.classList.contains("tag")) return;
        card.data = randomDataFor(card.type);
        console.log("shuffle", card.id);
        if (callback) callback("update", card.id);
    });
}

ForeignWord.prototype.render = function (container, callback) {
    let el = document.createElement("div");
    el.className = "card foreign-word";
    el.dataset.id = this.id;

    let word = document.createElement("div");
    word.className = "word";
    word.textContent = this.data.word || "";
    el.appendChild(word);

    let pron = document.createElement("div");
    pron.className = "pronunciation";
    pron.textContent = this.data.pronunciation || "";
    el.appendChild(pron);

    let trans = document.createElement("div");
    trans.className = "translation";
    trans.textContent = this.data.translation || "";
    el.appendChild(trans);

    el.appendChild(makeTagsElement(this.tags));
    attachShuffle(el, this, callback);
    container.appendChild(el);
    return el;
};

PlayingCard.prototype.render = function (container, callback) {
    let el = document.createElement("div");
    el.className = "card playing-card";
    el.dataset.id = this.id;

    let pip = document.createElement("div");
    pip.className = "pip";
    pip.textContent = this.data.pip || "";
    el.appendChild(pip);

    let suit = document.createElement("div");
    suit.className = "suit";
    suit.textContent = this.data.suit || "";
    el.appendChild(suit);

    el.appendChild(makeTagsElement(this.tags));
    attachShuffle(el, this, callback);
    container.appendChild(el);
    return el;
};

StringList.prototype.render = function (container, callback) {
    let el = document.createElement("div");
    el.className = "card string-list";
    el.dataset.id = this.id;

    let ul = document.createElement("ul");
    let items = this.data.items || [];
    items.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    el.appendChild(ul);

    el.appendChild(makeTagsElement(this.tags));
    attachShuffle(el, this, callback);
    container.appendChild(el);
    return el;
};

Slide.prototype.render = function (container, callback) {
    let slide = this;
    let el = document.createElement("section");
    el.className = "slide";
    el.dataset.id = this.id;

    let h2 = document.createElement("h2");
    h2.textContent = this.title;
    el.appendChild(h2);

    el.appendChild(makeTagsElement(this.tags));

    function onCardEvent(type, id) {
        if (callback) callback(type, id);
    }

    let cardsBox = document.createElement("div");
    cardsBox.className = "cards";
    this._cards.forEach((c) => {
        c.render(cardsBox, onCardEvent);
    });
    el.appendChild(cardsBox);

    let form = document.createElement("form");
    form.className = "new-card-form";

    let select = document.createElement("select");
    ["foreign-word", "playing-card", "string-list"].forEach((t) => {
        let opt = document.createElement("option");
        opt.value = t;
        opt.textContent = t;
        select.appendChild(opt);
    });
    form.appendChild(select);

    let addBtn = document.createElement("button");
    addBtn.type = "submit";
    addBtn.textContent = "add card";
    form.appendChild(addBtn);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (callback) callback("add-card", { slideId: slide.id, type: select.value });
    });
    el.appendChild(form);

    let rm = document.createElement("button");
    rm.className = "remove";
    rm.textContent = "remove slide";
    rm.addEventListener("click", () => {
        if (slide._cards.length > 0) {
            alert("cant remove, slide is not empty");
            return;
        }
        if (callback) callback("remove-slide", slide.id);
    });
    el.appendChild(rm);

    container.appendChild(el);
    return el;
};

Deck.prototype.render = function (container, callback) {
    let deck = this;
    let el = document.createElement("section");
    el.className = "deck";
    el.dataset.id = this.id;

    let h2 = document.createElement("h2");
    h2.textContent = this.title;
    el.appendChild(h2);

    el.appendChild(makeTagsElement(this.tags));

    function onSlideEvent(type, id) {
        if (callback) callback(type, id);
    }

    let slidesBox = document.createElement("div");
    slidesBox.className = "slides";
    this._slides.forEach((s) => {
        s.render(slidesBox, onSlideEvent);
    });
    el.appendChild(slidesBox);

    let form = document.createElement("form");
    form.className = "new-slide-form";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "new slide title";
    input.required = true;
    form.appendChild(input);

    let btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "add slide";
    form.appendChild(btn);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (callback) callback("add-slide", { deckId: deck.id, title: input.value });
        input.value = "";
    });
    el.appendChild(form);

    let rm = document.createElement("button");
    rm.className = "remove";
    rm.textContent = "remove deck";
    rm.addEventListener("click", () => {
        if (deck._slides.length > 0) {
            alert("cant remove, deck has slides in it");
            return;
        }
        if (callback) callback("remove-deck", deck.id);
    });
    el.appendChild(rm);

    container.appendChild(el);
    return el;
};

export function renderCollection(container, callback) {
    container.innerHTML = "";

    let decks = collection.getDecks();
    decks.forEach((d) => {
        d.render(container, callback);
    });

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}
