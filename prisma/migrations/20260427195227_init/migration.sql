-- CreateTable
CREATE TABLE "Deck" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Slide" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "deck" TEXT NOT NULL,
    CONSTRAINT "Slide_deck_fkey" FOREIGN KEY ("deck") REFERENCES "Deck" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "slide" TEXT NOT NULL,
    CONSTRAINT "Card_type_fkey" FOREIGN KEY ("type") REFERENCES "CardType" ("type") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Card_slide_fkey" FOREIGN KEY ("slide") REFERENCES "Slide" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CardType" (
    "type" TEXT NOT NULL PRIMARY KEY
);
