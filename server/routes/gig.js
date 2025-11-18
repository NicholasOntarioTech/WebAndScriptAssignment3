let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Gig = require('../models/gig');

// Get route for the read gig list - Read Operation
//Route if URL is Gigs/
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

//Also route to the gig list page if url is Gigs/list
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
        let newGig = Gig({ //When making a new gig, all these variables must be taken in. 
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
router.get('/edit/:id',async(req,res,next)=>{
    try
    {
        const id = req.params.id;
        const gigToEdit = await Gig.findById(id);
        res.render("Gigs/edit",
            {
                title:"Edit Gig",
                gig: gigToEdit
            }
        )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})
// Post route for processing the Edit Page - Update Operation
router.post('/edit/:id',async(req,res,next)=>{
    try
    {
        let id = req.params.id;
        let updateGig = Gig({ //When editing a gig, all these variables must be taken in
            "_id":id,
            "performer":req.body.performer,
            "description":req.body.description,
            "date":req.body.date,
            "time":req.body.time,
            "duration":req.body.duration,
            "price":req.body.price
        })
        Gig.findByIdAndUpdate(id,updateGig).then(()=>{
            res.redirect("/gigs")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})
// Get route for performing delete operation - Delete Operation
router.get('/delete/:id',async(req,res,next)=>{
    try
    {
        let id = req.params.id;
        Gig.deleteOne({_id:id}).then(()=>{
            res.redirect("/gigs")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})

module.exports = router;