import * as cards from "../../../../../repos/cards.js"


export async function DELETE(req, ctx){
  let { deck, slide, card } = ctx.params
  let r = await cards.remove(deck, slide, card)
  if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
  return Response.json(r.data)
}

export async function PATCH(req, ctx){
  let { deck, slide, card } = ctx.params
  let body = await req.json()
  let r = await cards.update(deck, slide, card, body)
  if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
  return Response.json(r.data)
}
