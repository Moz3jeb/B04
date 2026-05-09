"use client";

// one deck. shows title, tags, slides, and a button to add a slide
import { Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import Slide from "./slide";

export default function Deck(props) {
  const [title, setTitle] = useState("");

  // collect tags from all cards in this deck (memoized)
  const tags = useMemo(() => {
    let out = [];
    if (props.deck.slides) {
      for (let i = 0; i < props.deck.slides.length; i++) {
        let s = props.deck.slides[i];
        if (s.cards) {
          for (let j = 0; j < s.cards.length; j++) {
            let c = s.cards[j];
            if (c.tags) {
              for (let k = 0; k < c.tags.length; k++) {
                if (out.indexOf(c.tags[k]) === -1) {
                  out.push(c.tags[k]);
                }
              }
            }
          }
        }
      }
    }
    out.sort();
    return out;
  }, [props.deck.slides]);

  function addSlide(e) {
    e.preventDefault();
    let t = title.trim();
    if (t === "") {
      t = "Untitled";
    }

    const url = process.env.NEXT_PUBLIC_API_BASE + "/" + props.deck.id;
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: t, cards: [] }),
    })
      .then((res) => {
        if (res.ok) {
          setTitle("");
          props.onRefresh();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="deck">
      <div className="header">
        <div className="meta">
          <h2 className="title">{props.deck.title}</h2>
          <ul className="tags">
            {tags.map((t) => (
              <li key={t} className="tag">
                #{t}
              </li>
            ))}
          </ul>
        </div>
        <form className="new" onSubmit={addSlide}>
          <input
            type="text"
            placeholder="new slide"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" title="add slide">
            <Plus size={16} />
          </button>
          <button
            type="button"
            title="remove deck"
            onClick={() => props.deleteDeck(props.deck.id)}
          >
            <X size={16} />
          </button>
        </form>
      </div>

      <div className="slides">
        {props.deck.slides &&
          props.deck.slides.map((slide) => (
            <Slide
              key={slide.id}
              deckId={props.deck.id}
              slide={slide}
              isTagSelected={props.isTagSelected}
              onRefresh={props.onRefresh}
              favorites={props.favorites}
              onToggleFavorite={props.onToggleFavorite}
            />
          ))}
      </div>
    </section>
  );
}
