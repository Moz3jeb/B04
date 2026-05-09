import * as cards from "../../../../repos/cards.js"
import * as slides from "../../../../repos/slides.js"

export async function GET(req, ctx){
   let { deck, slide } = ctx.params
   let r = await cards.getAll(deck, slide)
   if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
   return Response.json(r.data)
}

export async function POST(req, ctx){
   let { deck, slide } = ctx.params
   let body = await req.json()
   let r = await cards.create(deck, slide, body)
   if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
   return Response.json(r.data, { status: 201 })
}

export async function DELETE(req, ctx){
   let { deck, slide } = ctx.params
   let r = await slides.remove(deck, slide)
   if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
   return Response.json(r.data)
}
