"use client";

// main page - shows the collection of decks
import { useEffect, useMemo, useState } from "react";
import Collection from "../components/collection";
import { getFavorites, toggleFavorite } from "./actions";

export default function Home() {
  // list of all decks from the api
  const [decks, setDecks] = useState([]);

  // when this is true, we re-fetch the decks
  const [stale, setStale] = useState(true);

  // favorites list (just card ids)
  const [favorites, setFavorites] = useState([]);

  // tags the user picked. null means "show all"
  const [selectedTags, setSelectedTags] = useState(null);

  // load decks when stale
  useEffect(() => {
    if (stale === true) {
      const url = process.env.NEXT_PUBLIC_API_BASE;
      fetch(url, { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          setDecks(data);
          setStale(false);
        })
        .catch((err) => {
          console.log("error loading decks", err);
          setStale(false);
        });
    }
  }, [stale]);

  // load favorites once
  useEffect(() => {
    getFavorites().then((list) => setFavorites(list));
  }, []);

  // collect every tag from every card - memoized so we only walk
  // the deck/slide/card tree when decks actually change
  const allTags = useMemo(() => {
    let tags = [];
    for (let i = 0; i < decks.length; i++) {
      let d = decks[i];
      if (d.slides) {
        for (let j = 0; j < d.slides.length; j++) {
          let s = d.slides[j];
          if (s.cards) {
            for (let k = 0; k < s.cards.length; k++) {
              let c = s.cards[k];
              if (c.tags) {
                for (let t = 0; t < c.tags.length; t++) {
                  if (tags.indexOf(c.tags[t]) === -1) {
                    tags.push(c.tags[t]);
                  }
                }
              }
            }
          }
        }
      }
    }
    tags.sort();
    return tags;
  }, [decks]);

  // helper - is this tag selected?
  function isTagSelected(tag) {
    if (selectedTags === null) {
      return true;
    }
    return selectedTags.indexOf(tag) !== -1;
  }

  // toggle a tag on/off. with alt key it isolates
  function onToggleTag(tag, isolate) {
    if (isolate === true) {
      // alt-click: only this tag, or restore if already isolated
      if (selectedTags && selectedTags.length === 1 && selectedTags[0] === tag) {
        setSelectedTags(null);
      } else {
        setSelectedTags([tag]);
      }
      return;
    }

    let current = selectedTags;
    if (current === null) {
      current = allTags.slice();
    } else {
      current = current.slice();
    }

    let i = current.indexOf(tag);
    if (i === -1) {
      current.push(tag);
    } else {
      current.splice(i, 1);
    }

    if (current.length === allTags.length) {
      setSelectedTags(null);
    } else {
      setSelectedTags(current);
    }
  }

  // tell the page to reload decks from server
  function refresh() {
    setStale(true);
  }

  // call server action then update local state
  function onToggleFavorite(cardId) {
    toggleFavorite(cardId).then((list) => {
      setFavorites(list);
    });
  }

  return (
    <Collection
      decks={decks}
      allTags={allTags}
      isTagSelected={isTagSelected}
      onToggleTag={onToggleTag}
      onRefresh={refresh}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
