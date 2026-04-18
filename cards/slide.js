import Item from "./item.js";
import ForeignWord from "./foreign-word.js";
import PlayingCard from "./playing-card.js";
import StringList from "./string-list.js";

//pick the right class based on type
function toCard(obj) {
    if (obj.type === "foreign-word") return ForeignWord.fromJSON(obj);
    if (obj.type === 'playing-card') return PlayingCard.fromJSON(obj);
    if (obj.type === "string-list") return StringList.fromJSON(obj);
    return null;
}

export default class Slide extends Item {

    constructor(options) {
        if (!options) options = {};
        super(options);

        this.title = options.title || "Untitled";
        this._cards = [];

        if (options.cards) {
            options.cards.forEach((c) => {
                if (c instanceof Item) {
                    this._cards.push(c);
                }
                else {
                    this._cards.push(toCard(c));
                }
            });
        }
    }

    get cards() {
        return this._cards.slice();
    }

    get tags() {
        let all = [];
        this._cards.forEach((c) => {
            c.tags.forEach((t) => {
                if (all.indexOf(t) === -1) {
                    all.push(t);
                }
            });
        });
        return all;
    }

    add(card) {
        this._cards.push(card);
        return card;
    }

    remove(id) {
        let index = this._cards.findIndex((c) => c.id === id);
        if (index === -1) return null;
        let removed = this._cards[index];
        this._cards.splice(index, 1);
        return removed;
    }

    get(id) {
        let found = this._cards.find((c) => c.id === id);
        if (!found) return null;
        return found;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            cards: this._cards.map((c) => c.toJSON())
        };
    }

    static fromJSON(obj) {
        return new Slide(obj);
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
}
