import Card from "./card.js";

export default class ForeignWord extends Card {

    constructor(options) {
        if (!options) options = {};
        options.type = "foreign-word";
        super(options);
    }

    get tags() {
        let list = [];
        if (this.data.word) list.push(this.data.word);
        if (this.data.pronunciation) list.push(this.data.pronunciation);
        if (this.data.translation) list.push(this.data.translation);
        return list;
    }

    static fromJSON(obj) {
        return new ForeignWord({ id: obj.id, data: obj.data });
    }
}
