const path = require('path');
const express = require('express');
const hbs = require('hbs');

const checkWishBeginner = require('./utils/checkWishBeginner.js')
const checkWishStand = require('./utils/checkWishStand.js')
const checkWishChar = require('./utils/checkWishChar.js')
const checkWishWeapon = require('./utils/checkWishWeapon.js')

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

app.get('/help',( req, res )=>{
    res.render('help',{
        title: "Help page",
        name:"Radon"
    })
});

app.get('/wish/beginner',( req, res )=>{
    if(!req.query.address){
        return res.send({
            error:"link needed"
        })
    }
    address = req.query.address;

    checkWishBeginner(address, (error,results = {}) =>{
        if(error){
            return res.send({
                error
            });
        }

       res.send(results);
    })

});
app.get('/wish/stand',( req, res )=>{
    if(!req.query.address){
        return res.send({
            error:"link needed"
        })
    }
    address = req.query.address;

    checkWishStand(address, (error,results = {}) =>{
        if(error){
            console.log(error);
            return res.send({
                error
            });
        }

       res.send(results);
    })

});
app.get('/wish/char',( req, res )=>{
    if(!req.query.address){
        return res.send({
            error:"location needed"
        })
    }
    address = req.query.address;
   // console.log(address);
    checkWishChar(address, (error,results = {}) =>{
        if(error){
            return res.send({
                error
            });
        }

       res.send(results);
    })

});
app.get('/wish/weapon',( req, res )=>{
    if(!req.query.address){
        return res.send({
            error:"location needed"
        })
    }
    address = req.query.address;

    checkWishWeapon(address, (error,results = {}) =>{
        if(error){
            return res.send(error);
        }

       res.send(results);
    })

});

app.get('*',(req,res)=>{ //404 has to be last
    res.render('errorPage',{
        title: "Error 404",
        name:"Radon",
        errorMsg:"Page"
    })
})

app.listen(port, () =>{ //heroku will give
    console.log('server running on port ' + port);
});