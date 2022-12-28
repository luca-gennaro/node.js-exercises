// Use the techniques you've learnt so far to create your own HTTP server with Express. Your server should:

// Automatically recompile and restart when you make changes
// Have a GET route that sends a JSON response
// Have an integration test for the GET route
// Use an environment variable to configure the server port

const express =require("express")
require("express-async-errors")

const app = express();

app.get("/planets", (request, response) => {
    response.json([
        { name: "Mercury" },
        { name: "Venus" }
    ])
})


module.exports = app