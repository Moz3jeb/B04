import Card from "./card.js";

export default class PlayingCard extends Card {

    constructor(options) {
        if (!options) options = {};
        options.type = "playing-card";
        super(options);
    }

    get tags() {
        let list = [];
        if (this.data.pip) list.push(this.data.pip);
        if (this.data.suit) list.push(this.data.suit);
        return list;
    }

    static fromJSON(obj) {
        return new PlayingCard({ id: obj.id, data: obj.data });
    }
}
