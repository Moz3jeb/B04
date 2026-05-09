import * as slides from "../../../repos/slides.js"
import * as decks from "../../../repos/decks.js"

export async function GET(req, ctx){
  let { deck } = ctx.params
  let r = await slides.getAll(deck)
  if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
  return Response.json(r.data)
}

export async function POST(req, ctx){
  let { deck } = ctx.params
  let body = await req.json()
  let r = await slides.create(deck, body.title)
  if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
  return Response.json(r.data, { status: 201 })
}

export async function DELETE(req, ctx){
   let { deck } = ctx.params
   let r = await decks.remove(deck)
   if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
   return Response.json(r.data)
}
