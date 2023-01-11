import express from "express"
import {PrismaClient} from "@prisma/client"
import cors from "cors"

const corsOption = {
    origin: "http://localhost:8080"
}

const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(cors(corsOption))

// GET MANY 

app.get("/planets", async (request, response) => {
    const planets = await prisma.planet.findMany()
    response.json(planets)
})

// GET UNIQUE

app.get("/planets/:id", async (request, response) => {
    const {id} = request.params
    const planet = await prisma.planet.findUnique({
       where: {
        id: Number(id)
       } 
    })
    response.json(planet)
})

// POST

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

// PUT

app.put("/planets/:id", async (request, response)=>{
    const {id} = request.params
    const { name, diameter, moons} = request.body
    const planet = await prisma.planet.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            diameter,
            moons
        }
    })
    response.json(planet)
})

// DELETE

app.delete("/planets/:id", async (request, response) => {
    const {id} = request.params
    const planet = await prisma.planet.delete({
        where: {
            id: Number(id)
        }
    })
    response.json(planet)
})



app.listen(3000, ()=> console.log("running on port",3000 ))