/*
    Express.js is a framework of Node.js, most popular as of now. 
    It is a web application framework that provides us with a simple API to build websites, 
    web apps and back ends.
*/

/**
 * why we need Express JS ?
 * Node JS is all about core modules so if we try to write a small REST API server in Node
    and then in Express, we would find that it would take 5-10 times lesser time and lines of code. 
 * 
 */

 /******************/ Template Engine /***********/
 To add dynamic data in express, we use template engine like 
 handlebars(extension of Mustache templating), pug, EJS 

To use handlebars, we need to work with hbs package view engine
To mention such files, we keep them in templates/views


/*************/ Partials /*********/
If we have a code which will be used repeatedly in our application, sowe would create a 
partial file of that code and would call whereever necessary in the application. 
To mention such files, we keep them in templates/partials