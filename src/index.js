const path = require('path');
const express = require('express');
const app = express();
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates");

// to set the view engine 
app.set('view engine', "hbs"); // if pug/ EJS had been there then mention pug / EJS instead of hbs

// We can rename views folder 
app.set('views',templatePath);

// template engine route
app.get("/", (req,res) => {
    res.render('index', {
        channelName : "Welcome Bapita" // dynamic content to index.hbs
    });
})

app.get("/about", (req,res) => {
    res.render("about");
})
// to serve a website using  built-in middleware express.static
app.use(express.static(staticPath));

app.listen(8000, () => {
    console.log("listening 8000 port ..")
})