const express = require('express');
const Financial = require('../models/financial');

const router = express.Router();


//Save a Employee Info


router.post('/financial/save',(req,res)=>{

    let newPost = new Financial(req.body);
    
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Details saved successfully"
        });
    });
});


//get Employees Info


router.get('/financial',(req,res) =>{
  Financial.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});




//get a specific Employee Info



router.get("/financial/:id",(req,res) =>{

    let postId = req.params.id;

    Financial.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            post
        });
    });

});



//update a Employee Info



router.put('/financial/update/:id',(req,res)=>{
  Financial.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});



//Delete a Employee Info



router.delete('/financial/delete/:id',(req,res) =>{
  Financial.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deletePost
        });
    });
});

module.exports = router;