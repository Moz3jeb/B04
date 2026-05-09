import prisma from "./prisma.js"
import { createId } from "@paralleldrive/cuid2"


// get slides of a deck
export async function getAll(deckId){
    try{
        // first check deck exists
        let dk = await prisma.deck.findUnique({ where:{ id: deckId } })
        if(!dk) return { error:{ message:"deck not found", status:404 } }

        let s = await prisma.slide.findMany({ where:{ deck: deckId } })
        return { data: s }
    }catch(e){
        return { error:{ message:"err", status:500 } }
    }
}


export async function create(deckId, title){
    try{
        if(!title) return { error:{ message:"title required", status:400 } }
        let dk = await prisma.deck.findUnique({ where:{ id: deckId } })
        if(!dk) return { error:{ message:"deck not found", status:404 } }
        let s = await prisma.slide.create({ data:{ id: createId(), title:title, deck:deckId } })
        return { data: s }
    }catch(e){
        return { error:{ message:"cant create slide", status:500 } }
    }
}


// delete slide only if empty (no cards)
export async function remove(deckId, slideId){
    try{
        let s = await prisma.slide.findUnique({ where:{ id: slideId }, include:{ cards:true } })
        if(!s) return { error:{ message:"slide not found", status:404 } }
        if(s.deck != deckId) return { error:{ message:"slide doesnt belong to deck", status:400 } }
        if(s.cards.length>0) return { error:{ message:"slide not empty", status:400 } }
        let d = await prisma.slide.delete({ where:{ id: slideId } })
        return { data: d }
    }catch(e){
        return { error:{ message:"cant delete slide", status:500 } }
    }
}
