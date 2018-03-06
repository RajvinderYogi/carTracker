const express = require('express');
const router = express.Router();
const Make = require('../models/make');

//GET: /makes
router.get('/', (req, res, next) => {
    //get manufacturer document from db
    Make.find((err,makes)=>{
        if (err){
            console.log(err);
        }
        else {
            res.render('makes/index', {
                title:"Manufacturer List",
                makes:makes
            });
        }
    });
});
//GET /makes/add
router.get('/add', (req, res, next)=>{
    res.render('makes/add', {
        title:'Add a New Manufacturer'
    });
});


 //POST: /makes/add
router.post('/add', (req, res, next)=>{

    Make.create({
        name: req.body.name,
        country: req.body.country,
        yearFounded: req.body.yearFounded,
    }, (err, makes)=>{
        if (err){
            console.log(err);
        }
        else {
            res.redirect('/makes')
        }
    });
});

//GET: /Delete
router.get('/delete/:_id', (req, res, next) =>{
    let _id= req.params._id;

    Make.remove({_id: _id}, (err) =>{
        if(err){
            console.log(err);
        }
        else {
            res.redirect('/makes');
        }
    });
});

//GET:  /makes/edit
router.get('/edit/:_id', (req, res, next)=>{
    let _id= req.params._id;
    Make.findById(_id, (err, makes)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('makes/edit', {
                title:'Edit Manufacturer Details',
                make: makes
            });
        }
    });
});

//POST: /makes/edit
router.post('/edit/:_id', (req, res, next)=>{
    let _id = req.params._id;

    Make.update({_id:_id},
        {$set:{
               name:req.body.name,
               country:req.body.country,
               yearFounded:req.body.yearFounded
            }}, null, (err)=>{
            if (err){
                console.log(err);
            }
            else {
                res.redirect('/makes')
            }
        });
});
//make public
module.exports = router;