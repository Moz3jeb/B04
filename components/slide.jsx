"use client";

// one slide inside a deck. shows title, tags, cards, add card form
import { Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import Card from "./card";

// some sample words for the foreign-word card
const SAMPLE_WORDS = [
  { word: "木漏れ日", pronunciation: "komorebi", translation: "sunlight through leaves" },
  { word: "森林浴", pronunciation: "shinrin-yoku", translation: "forest bathing" },
  { word: "金継ぎ", pronunciation: "kintsugi", translation: "golden repair" },
];

const PIPS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];

// random id generator
function makeId() {
  return Math.random().toString(36).slice(2, 12);
}

export default function Slide(props) {
  const [type, setType] = useState("foreign-word");
  const [tagsText, setTagsText] = useState("");

  // collect this slide's tags from its cards (memoized)
  const tags = useMemo(() => {
    let out = [];
    if (props.slide.cards) {
      for (let i = 0; i < props.slide.cards.length; i++) {
        let c = props.slide.cards[i];
        if (c.tags) {
          for (let j = 0; j < c.tags.length; j++) {
            if (out.indexOf(c.tags[j]) === -1) {
              out.push(c.tags[j]);
            }
          }
        }
      }
    }
    out.sort();
    return out;
  }, [props.slide.cards]);

  // build a card object based on the selected type
  function buildCard() {
    // split the tags input
    let inputTags = [];
    let parts = tagsText.split(",");
    for (let i = 0; i < parts.length; i++) {
      let p = parts[i].trim();
      if (p !== "") {
        inputTags.push(p);
      }
    }

    let data = {};
    if (type === "foreign-word") {
      data = SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
    } else if (type === "playing-card") {
      data = {
        pip: PIPS[Math.floor(Math.random() * PIPS.length)],
        suit: SUITS[Math.floor(Math.random() * SUITS.length)],
      };
    } else if (type === "string-list") {
      data = { items: ["item 1", "item 2", "item 3"] };
    }

    return {
      id: makeId(),
      type: type,
      tags: inputTags,
      data: data,
    };
  }

  function addCard(e) {
    e.preventDefault();
    const card = buildCard();

    const url =
      process.env.NEXT_PUBLIC_API_BASE +
      "/" +
      props.deckId +
      "/" +
      props.slide.id;

    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    })
      .then((res) => {
        if (res.ok) {
          setTagsText("");
          props.onRefresh();
        }
      })
      .catch((err) => console.log(err));
  }

  function deleteSlide() {
    const url =
      process.env.NEXT_PUBLIC_API_BASE +
      "/" +
      props.deckId +
      "/" +
      props.slide.id;

    fetch(url, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          props.onRefresh();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="slide">
      <div className="header">
        <div className="meta">
          <h3 className="title">{props.slide.title}</h3>
          <ul className="tags">
            {tags.map((t) => (
              <li key={t} className="tag">
                #{t}
              </li>
            ))}
          </ul>
        </div>
        <form className="new" onSubmit={addCard}>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="foreign-word">foreign-word</option>
            <option value="playing-card">playing-card</option>
            <option value="string-list">string-list</option>
          </select>
          <input
            type="text"
            placeholder="tags (comma separated)"
            value={tagsText}
            onChange={(e) => setTagsText(e.target.value)}
          />
          <button type="submit" title="add card">
            <Plus size={16} />
          </button>
          <button type="button" title="remove slide" onClick={deleteSlide}>
            <X size={16} />
          </button>
        </form>
      </div>

      <div className="cards">
        {props.slide.cards &&
          props.slide.cards.map((card) => {
            // is this card a favorite?
            let isFav = false;
            if (props.favorites.indexOf(card.id) !== -1) {
              isFav = true;
            }
            return (
              <Card
                key={card.id}
                deckId={props.deckId}
                slideId={props.slide.id}
                card={card}
                isTagSelected={props.isTagSelected}
                onRefresh={props.onRefresh}
                isFavorite={isFav}
                onToggleFavorite={props.onToggleFavorite}
              />
            );
          })}
      </div>
    </section>
  );
}
