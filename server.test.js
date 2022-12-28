const supertest = require("supertest")
const app = require("./app")

const request = supertest(app)

test("GET /planets", async ()=>{
    const response = await request
    .get("/planets")
    .expect(200)
    .expect("Content-Type", /application\/json/)
    
    expect(response.body).toEqual([
        {name: "Mercury"},
        {name: "Venus"}
    ])
})