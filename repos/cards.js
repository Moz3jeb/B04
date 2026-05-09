import prisma from "./prisma.js"
import { createId } from "@paralleldrive/cuid2"

// helper to check slide is in deck
async function checkSlide(deckId, slideId){
   let s = await prisma.slide.findUnique({ where:{ id: slideId } })
   if(!s) return null
   if(s.deck != deckId) return null
   return s
}

// sqlite doesnt do json so we save as string
function parseCard(c){
  if(!c) return c
  return { ...c, tags: JSON.parse(c.tags), data: JSON.parse(c.data) }
}

export async function getAll(deckId, slideId){
   try{
      let s = await checkSlide(deckId, slideId)
      if(!s) return { error:{ message:"slide not found in deck", status:404 } }
      let c = await prisma.card.findMany({ where:{ slide: slideId } })
      return { data: c.map(parseCard) }
   }catch(e){
      return { error:{ message:"err", status:500 } }
   }
}

export async function create(deckId, slideId, body){
   try{
      let s = await checkSlide(deckId, slideId)
      if(!s) return { error:{ message:"slide not found in deck", status:404 } }
      if(!body || !body.type) return { error:{ message:"type required", status:400 } }

      // check type exists
      let t = await prisma.cardType.findUnique({ where:{ type: body.type } })
      if(!t) return { error:{ message:"bad type", status:400 } }

      let c = await prisma.card.create({ data:{
        id: createId(),
        type: body.type,
        tags: JSON.stringify(body.tags || []),
        data: JSON.stringify(body.data || {}),
        slide: slideId
      } })
      return { data: parseCard(c) }
   }catch(e){
      return { error:{ message:"cant create card", status:500 } }
   }
}

export async function remove(deckId, slideId, cardId){
   try{
      let card = await prisma.card.findUnique({ where:{ id: cardId } })
      if(!card) return { error:{ message:"card not found", status:404 } }
      if(card.slide != slideId) return { error:{ message:"card not in slide", status:400 } }
      let s = await checkSlide(deckId, slideId)
      if(!s) return { error:{ message:"slide not in deck", status:400 } }
      let d = await prisma.card.delete({ where:{ id: cardId } })
      return { data: parseCard(d) }
   }catch(e){
      return { error:{ message:"cant delete card", status:500 } }
   }
}

// patch card  - todo: maybe more validation
export async function update(deckId, slideId, cardId, body){
   try{
      let card = await prisma.card.findUnique({ where:{ id: cardId } })
      if(!card) return { error:{ message:"card not found", status:404 } }
      if(card.slide != slideId) return { error:{ message:"card not in slide", status:400 } }
      let s = await checkSlide(deckId, slideId)
      if(!s) return { error:{ message:"slide not in deck", status:400 } }

      // need to stringify if user sends object
      let newdata = { ...body }
      if(newdata.tags !== undefined) newdata.tags = JSON.stringify(newdata.tags)
      if(newdata.data !== undefined) newdata.data = JSON.stringify(newdata.data)

      let updated = await prisma.card.update({ where:{ id: cardId }, data: newdata })
      return { data: parseCard(updated) }
   }catch(e){
      return { error:{ message:"cant update card", status:500 } }
   }
}
