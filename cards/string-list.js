import Card from "./card.js";

export default class StringList extends Card {

    constructor(options) {
        if (!options) options = {};
        options.type = "string-list";
        if (!options.data) options.data = { items: [] };
        super(options);
    }

    get tags() {
        if (!this.data.items) return [];
        return this.data.items.slice();
    }

    static fromJSON(obj) {
        return new StringList({ id: obj.id, data: obj.data });
    }
}
