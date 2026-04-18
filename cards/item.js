function makeId() {
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let arr = new Array(10).fill(0);
    return arr.map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export default class Item {

    constructor(options) {
        if (!options) options = {};

        if (options.id) {
            this.id = options.id;
        }
        else {
            this.id = makeId();
        }
    }

    toJSON() {
        return { id: this.id };
    }

    static fromJSON(obj) {
        return new Item(obj);
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
}
