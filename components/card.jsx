"use client";

// a single card. type can be foreign-word, playing-card, or string-list
import { Heart, X } from "lucide-react";

const PIPS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
const SOME_WORDS = [
  { word: "生きがい", pronunciation: "ikigai", translation: "the reason for being" },
  { word: "懐かしい", pronunciation: "natsukashi", translation: "nostalgic" },
  { word: "侘び寂び", pronunciation: "wabi-sabi", translation: "beauty in imperfection" },
  { word: "浮世", pronunciation: "ukiyo", translation: "fleeting life" },
  { word: "積読", pronunciation: "tsundoku", translation: "book hoarder" },
];
const SOME_TAGS = ["japanese", "tag1", "tag2", "ci", "cd", "favorite"];

// pick a random item from an array
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Card(props) {
  const card = props.card;

  // figure out if the card should be hidden
  let visible = true;
  if (card.tags && card.tags.length > 0) {
    visible = false;
    for (let i = 0; i < card.tags.length; i++) {
      if (props.isTagSelected(card.tags[i])) {
        visible = true;
        break;
      }
    }
  }

  // build the css class list
  let className = "card " + card.type;
  if (visible === false) {
    className = className + " filtered";
  }
  if (props.isFavorite === true) {
    className = className + " favorite";
  }

  // when the user clicks the card body -> shuffle (regenerate)
  function shuffle(e) {
    // ignore clicks on the buttons
    if (e.target.closest && e.target.closest("button")) {
      return;
    }

    // make new tags (1-2 random tags)
    let newTags = [pick(SOME_TAGS)];
    let extra = pick(SOME_TAGS);
    if (newTags.indexOf(extra) === -1) {
      newTags.push(extra);
    }

    // make new data depending on type
    let newData = {};
    if (card.type === "foreign-word") {
      newData = pick(SOME_WORDS);
    } else if (card.type === "playing-card") {
      newData = { pip: pick(PIPS), suit: pick(SUITS) };
    } else if (card.type === "string-list") {
      let n = 3 + Math.floor(Math.random() * 4);
      let items = [];
      for (let i = 0; i < n; i++) {
        items.push("item " + (i + 1));
      }
      newData = { items: items };
    }

    const url =
      process.env.NEXT_PUBLIC_API_BASE +
      "/" +
      props.deckId +
      "/" +
      props.slideId +
      "/" +
      card.id;

    fetch(url, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tags: newTags, data: newData }),
    })
      .then((res) => {
        if (res.ok) {
          props.onRefresh();
        }
      })
      .catch((err) => console.log(err));
  }

  function remove(e) {
    e.stopPropagation();

    const url =
      process.env.NEXT_PUBLIC_API_BASE +
      "/" +
      props.deckId +
      "/" +
      props.slideId +
      "/" +
      card.id;

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

  function toggleFav(e) {
    e.stopPropagation();
    props.onToggleFavorite(card.id);
  }

  // render the content based on type
  let content = null;
  if (card.type === "foreign-word") {
    content = (
      <div className="content">
        <div className="word">{card.data && card.data.word}</div>
        <div className="pronunciation">
          {card.data && card.data.pronunciation}
        </div>
        <div className="translation">
          {card.data && card.data.translation}
        </div>
      </div>
    );
  } else if (card.type === "playing-card") {
    content = (
      <div className="content">
        <div className="pip">{card.data && card.data.pip}</div>
        <div className="suit">{card.data && card.data.suit}</div>
      </div>
    );
  } else if (card.type === "string-list") {
    content = (
      <div className="content">
        <ul>
          {card.data &&
            card.data.items &&
            card.data.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      </div>
    );
  } else {
    content = <div className="content">unknown</div>;
  }

  return (
    <div
      className={className}
      id={card.id}
      onClick={shuffle}
      style={props.isFavorite ? { outline: "2px solid red" } : {}}
    >
      {content}
      <div className="meta">
        <ul className="tags">
          {card.tags &&
            card.tags.map((t) => (
              <li key={t} className="tag">
                #{t}
              </li>
            ))}
        </ul>
      </div>
      <div className="actions">
        <button
          type="button"
          onClick={toggleFav}
          title={props.isFavorite ? "unfavorite" : "favorite"}
        >
          <Heart
            size={16}
            fill={props.isFavorite ? "red" : "none"}
            color={props.isFavorite ? "red" : "currentColor"}
          />
        </button>
        <button type="button" onClick={remove} title="remove card">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
