# HW3 - flashcards api

this is my hw3, restful api with next.js + prisma + sqlite.

## how to run
- npm install
- npx prisma migrate dev
- npm run seed
- npm run dev

## endpoints
- GET /api -> all decks
- POST /api -> new deck
- DELETE /api/:deck -> delete deck (only if empty)
- GET /api/:deck -> slides in deck
- POST /api/:deck -> new slide
- DELETE /api/:deck/:slide -> delete slide
- GET /api/:deck/:slide -> cards in slide
- POST /api/:deck/:slide -> new card
- DELETE /api/:deck/:slide/:card -> delete card
- PATCH /api/:deck/:slide/:card -> update card

## tasks
- [x] schema
- [x] seed
- [x] decks repo
- [x] slides repo
- [x] cards repo
- [x] api routes
- [x] postman tested

## screenshots
see `results/` folder

## notes
done :)
