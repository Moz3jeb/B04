import { PrismaClient } from './client/index.js'

const prisma = new PrismaClient()

// flashcard card types used by the app
const types = ["foreign-word","playing-card","string-list"]

async function main(){
    for (let i=0;i<types.length;i++){
        await prisma.cardType.upsert({
            where:{ type: types[i] },
            update:{},
            create:{ type: types[i] }
        })
    }
    console.log("done seeding")
}

main().catch(e=>{ console.log(e); process.exit(1) }).finally(async()=>{ await prisma.$disconnect() })
