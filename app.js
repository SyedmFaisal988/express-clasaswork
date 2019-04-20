const express = require('express');
const app = express();
const path = require('path');

// console.log(__dirname);
// console.log(__filename);

 //const newPath = path.join(__dirname, '../public/html');
 const newPath = path.join(__dirname, '/public/');

 app.use(express.static(newPath));
 app.set('view engine', 'hbs');
console.log(newPath);

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('*',(req, res)=>{
    res.send('no page found');
})

app.listen(3000, ()=>{
    console.log('Server started on 3000');
})