// creating express application
const express = require('express')
const app = express()

// app.get(route, callback func) i.e app.get("/", (req, res))
// In exoress we create API and it has functions as get (to read data), post (create a new data), put(update data) and delete 

// Callback function has two parameters, request(req) and response (res)
/*
    The request object represents the HTTP request and has properties for the request query string,
    parameters, body, HTTP Headers etc..

    similarly the response object represents the HTTP response that the express app sends 
    when it receives an HTTP request. 
*/
//////////////////////////////////////////////////////// 
app.get("/", (req, res) => {
    res.send("Hello World From express")
})

// routing 
app.get("/about", (req, res) => {
    res.send("Hello World From About Page")
})

app.listen(8000, ()=>{
    console.log("Listening port 8000")
})