let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Gig = require('../models/gig');

// Get route for the read gig list - Read Operation
router.get('/',async(req,res,next)=>{
    try
    {
        const GigList = await Gig.find();
        //console.log(GigList);
        res.render('Gigs/list',{
            title:'Gigs',
            GigList:GigList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gigs/list',{
            error:'Error on server'
        })
    }
})

router.get('/list',async(req,res,next)=>{
    try
    {
        const GigList = await Gig.find();
        //console.log(GigList);
        res.render('Gigs/list',{
            title:'Gigs',
            GigList:GigList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gigs/list',{
            error:'Error on server'
        })
    }
})

// Get route for displaying the Add Page - Create Operation
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Gigs/add',{
            title:'Add a Gig'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gigs/add',{
            error:'Error on server'
        })
    }
})
// Post route for processing the Add Page - Create Operation
router.post('/add',async(req,res,next)=>{
    try
    {
        let newGig = Gig({
            "performer":req.body.performer,
            "description":req.body.description,
            "date":req.body.date,
            "time":req.body.time,
            "duration":req.body.duration,
            "price":req.body.price
        });
        Gig.create(newGig).then(()=>{
            res.redirect('/gigs')
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gigs/add',{
            error:'Error on server'
        })
    }
})
// Get route for displaying the Edit Page - Update Operation
router.get('/edit',async(req,res,next)=>{
    try{
        res.render('Gigs/edit',{
            title:'Edit a Gig'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gigs/edit',{
            error:'Error on server'
        })
    }
})
// Post route for processing the Edit Page - Update Operation
router.post('/edit',async(req,res,next)=>{

})
// Get route for performing delete operation - Delete Operation
router.get('/delete',async(req,res,next)=>{
    try{
        res.render('Gigs/delete',{
            title:'Delete a Gig'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gigs/delete',{
            error:'Error on server'
        })
    }
})
module.exports = router;