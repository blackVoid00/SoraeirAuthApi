const express = require('express');
const User = require('../model/user');
const router = express.Router();
 

//get
router.get('/',function (req, res,next) {
    User.find({}).then(function (User) {
        res.send(User);
    })
    
});

//add
router.post('/',function (req, res,next) {
  Gps.create(req.body).then(function(User){
        res.send(User);
    }).catch(next);
  
   
});

//update
router.put('/:id',function (req, res,next) {
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(User){
        User.findOne({_id:req.params.id}).then(function(User){
            res.send();
        });
    });
});


//delete
router.delete('/:id',function (req, res,next) {
    User.findByIdAndRemove({_id:req.params.id}).then(function(User){
        res.send(User); 
    });
});


module.exports= router;
