import Item from "./item.js";
import Slide from "./slide.js";

export default class Deck extends Item {

    constructor(options) {
        if (!options) options = {};
        super(options);

        this.title = options.title || "Untitled";
        this._slides = [];

        if (options.slides) {
            options.slides.forEach((s) => {
                if (s instanceof Slide) {
                    this._slides.push(s);
                }
                else {
                    this._slides.push(Slide.fromJSON(s));
                }
            });
        }
    }

    get slides() {
        return this._slides.slice();
    }

    get tags() {
        let all = [];
        this._slides.forEach((s) => {
            s.tags.forEach((t) => {
                if (all.indexOf(t) === -1) {
                    all.push(t);
                }
            });
        });
        return all;
    }

    add(slide) {
        this._slides.push(slide);
        return slide;
    }

    remove(id) {
        let index = this._slides.findIndex((s) => s.id === id);
        if (index === -1) return null;
        let removed = this._slides[index];
        this._slides.splice(index, 1);
        return removed;
    }

    get(id) {
        let found = this._slides.find((s) => s.id === id);
        if (!found) return null;
        return found;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            slides: this._slides.map((s) => s.toJSON())
        };
    }

    static fromJSON(obj) {
        return new Deck(obj);
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
}
