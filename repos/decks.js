import prisma from "./prisma.js"
import { createId } from "@paralleldrive/cuid2"

// parse the json columns on a card row
function parseCard(c){
  if(!c) return c
  return { ...c, tags: JSON.parse(c.tags), data: JSON.parse(c.data) }
}

// get all decks with their slides and cards nested
export async function getAll(){
  try{
    let d = await prisma.deck.findMany({
      include: {
        slides: {
          include: { cards: true }
        }
      }
    })
    // need to parse card json columns
    let result = []
    for(let i=0;i<d.length;i++){
      let deck = d[i]
      let slides = []
      for(let j=0;j<deck.slides.length;j++){
        let s = deck.slides[j]
        let cards = []
        for(let k=0;k<s.cards.length;k++){
          cards.push(parseCard(s.cards[k]))
        }
        slides.push({ ...s, cards: cards })
      }
      result.push({ ...deck, slides: slides })
    }
    return { data: result }
  }catch(e){
    console.log(e)
    return { error: { message:"something wrong", status:500 } }
  }
}

// make new deck
export async function create(title){
  try{
    if(!title || typeof title != "string") return { error:{ message:"title required", status:400 } }
    let d = await prisma.deck.create({ data:{ id: createId(), title: title } })
    return { data: d }
  }catch(e){
    console.log(e)
    return { error:{ message:"cant create", status:500 } }
  }
}

// delete only if no slides
export async function remove(id){
  try{
    let deck = await prisma.deck.findUnique({ where:{ id }, include:{ slides:true } })
    if(!deck) return { error:{ message:"deck not found", status:404 } }
    if(deck.slides.length>0) return { error:{ message:"deck not empty", status:400 } }
    let d = await prisma.deck.delete({ where:{ id } })
    return { data: d }
  }catch(e){
    console.log(e)
    return { error:{ message:"cant delete", status:500 } }
  }
}
