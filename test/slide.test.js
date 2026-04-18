import { test, expect } from "bun:test";
import Slide from "../cards/slide.js";
import ForeignWord from "../cards/foreign-word.js";
import PlayingCard from "../cards/playing-card.js";

test("add() puts a card in the slide", () => {
    let slide = new Slide({ title: "test" });
    let card = new ForeignWord({ data: { word: "hola", pronunciation: "ola", translation: "hi" } });
    slide.add(card);
    expect(slide.cards.length).toBe(1);
    expect(slide.cards[0].id).toBe(card.id);
});

test("remove() takes a card out by id", () => {
    let slide = new Slide();
    let c1 = new ForeignWord({ data: { word: "bonjour" } });
    let c2 = new ForeignWord({ data: { word: "hello" } });
    slide.add(c1);
    slide.add(c2);

    slide.remove(c1.id);

    expect(slide.cards.length).toBe(1);
    expect(slide.cards[0].id).toBe(c2.id);
});

test("get() returns the card so we can change it", () => {
    let slide = new Slide();
    let card = new ForeignWord({ data: { word: "one" } });
    slide.add(card);

    let ref = slide.get(card.id);
    ref.data.word = "changed";

    expect(slide.cards[0].data.word).toBe("changed");
});

test("cards getter gives a copy not the real array", () => {
    let slide = new Slide();
    let card = new ForeignWord({ data: { word: "x" } });
    slide.add(card);

    let copy = slide.cards;
    copy.pop();

    expect(slide.cards.length).toBe(1);
});

test("tags() gives unique values only", () => {
    let slide = new Slide();
    slide.add(new PlayingCard({ data: { pip: "A", suit: "hearts" } }));
    slide.add(new PlayingCard({ data: { pip: "A", suit: "spades" } }));

    let tags = slide.tags;

    let countA = tags.filter((t) => t === "A").length;
    expect(countA).toBe(1);
});
