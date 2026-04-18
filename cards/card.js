import Item from "./item.js";

export default class Card extends Item {

    constructor(options) {
        if (!options) options = {};
        super(options);

        this.type = options.type;
        this.data = options.data || {};
    }

    get tags() {
        return [];
    }

    toJSON() {
        return {
            id: this.id,
            type: this.type,
            tags: this.tags,
            data: this.data
        };
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
}
