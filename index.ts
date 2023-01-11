import express, { response } from "express"
import {PrismaClient} from "@prisma/client"

const app = express()
const prisma = new PrismaClient()
app.use(express.json())

app.get("/planets", async (request, response) => {
    const planets = await prisma.planet.findMany()
    response.json(planets)
})
app.post("/planets", async (request, response) => {
    const { name, diameter, moons} = request.body
    const planet = await prisma.planet.create({
        data: {
            name,
            diameter,
            moons
        }
    })
    response.json(planet)
})

app.listen(3000, ()=> console.log("running on port",3000 ))