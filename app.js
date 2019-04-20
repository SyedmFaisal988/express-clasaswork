const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

// console.log(__dirname);
// console.log(__filename);

 //const newPath = path.join(__dirname, '../public/html');
 const newPath = path.join(__dirname, '/public/');
 const viewsFolder = path.join(__dirname, '/templates/views');
 const partialFolder = path.join(__dirname, '/templates/partials');

 hbs.registerPartials(partialFolder);
 app.set('views', viewsFolder);
 app.use(express.static(newPath));
 app.set('view engine', 'hbs');
console.log(newPath);

app.get('/', (req, res)=>{
    console.log(req.query);
    let createdBy = req.query.createdBy;
    if(!createdBy)    
        createdBy = "SyedmFaisal988";
    res.render('index', {
        title: "This page is Awsome",
        createdBy,
    });
})

app.get('/about', (req, res)=>{
    console.log(req.query);
    res.render('about');
 })

app.get('*',(req, res)=>{
    res.send('no page found');
})

app.listen(3000, ()=>{
    console.log('Server started on 3000');
})