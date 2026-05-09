import * as decks from "../../repos/decks.js"

export async function GET(){
    let r = await decks.getAll()
    if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
    return Response.json(r.data)
}

export async function POST(req){
    let body = await req.json()
    let r = await decks.create(body.title)
    if(r.error) return Response.json({ message: r.error.message }, { status: r.error.status })
    return Response.json(r.data, { status: 201 })
}
