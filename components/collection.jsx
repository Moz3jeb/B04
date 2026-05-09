"use client";

// shows the filter bar + all the decks
import { Plus } from "lucide-react";
import { useState } from "react";
import Deck from "./deck";

export default function Collection(props) {
  // value of the new deck input box
  const [title, setTitle] = useState("");

  // when user clicks add button -> create a deck
  function addDeck(e) {
    e.preventDefault();

    let t = title.trim();
    if (t === "") {
      t = "Untitled";
    }

    const url = process.env.NEXT_PUBLIC_API_BASE;
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: t, slides: [] }),
    })
      .then((res) => {
        if (res.ok) {
          setTitle("");
          props.onRefresh();
        } else {
          console.log("could not create deck", res.status);
        }
      })
      .catch((err) => console.log(err));
  }

  // remove a whole deck
  function deleteDeck(deckId) {
    const url = process.env.NEXT_PUBLIC_API_BASE + "/" + deckId;
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
    <main className="collection">
      <header className="header">
        <form className="filter" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="filter-keyword">
            <span>Filter</span>
          </label>
          <ul className="tags">
            {props.allTags.map((tag) => {
              let cls = "tag";
              if (props.isTagSelected(tag)) {
                cls = cls + " selected";
              }
              return (
                <li
                  key={tag}
                  className={cls}
                  onClick={(e) => props.onToggleTag(tag, e.altKey)}
                >
                  #{tag}
                </li>
              );
            })}
          </ul>
        </form>

        <form className="new" onSubmit={addDeck}>
          <input
            type="text"
            placeholder="new deck"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" title="add deck">
            <Plus size={16} />
          </button>
        </form>
      </header>

      {props.decks.map((deck) => (
        <Deck
          key={deck.id}
          deck={deck}
          isTagSelected={props.isTagSelected}
          onRefresh={props.onRefresh}
          deleteDeck={deleteDeck}
          favorites={props.favorites}
          onToggleFavorite={props.onToggleFavorite}
        />
      ))}
    </main>
  );
}
