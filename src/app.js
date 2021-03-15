const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

//paths for express config
const pubDir = path.join(__dirname,'../public/');
const viewsDir = path.join(__dirname,'../templates/views')
const partialsDir = path.join(__dirname,'../templates/partials')

//hbs engine and location of views
app.set('view engine','hbs');
app.set('views',viewsDir);
hbs.registerPartials(partialsDir);

//static serve directory
app.use(express.static(pubDir));

app.get('',(req,res)=>{
    res.render('index',{
        title:'Wishes',
        name:"Radon"
    })
})

app.listen(port, () =>{ //heroku will give
    console.log('server running on port ' + port);
});