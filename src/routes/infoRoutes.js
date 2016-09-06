var express = require("express");
var infoRoutes = express.Router();
var info = require("../models/info");

infoRoutes.route("/")
.get(function(req,res){
    info.find(function(err,trading){
        if(err){
            res.status(500).send(err);
        } else{
            res.send(trading);
        }
    });
})

.post(function(req, res){
    var newTrad = new info(req.body);
    newTrad.save(function(err, newInfoO){
        if(err){
            res.status(500).send(err);
        } else {
            res.send(newInfoO);
        }
    });
})

infoRoutes.route("/:id")
.get(function(req,res){
    info.findById(req.params.id, function(err, infoObject){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(infoObject);
        }
    });
})

.put(function(req, res){
    info.findByIdAndUpdate(req.params.id,req.body, {new:true},function(err,updatedinfo){
        if(err){
            res.status(500).send(err);
        } else {
            res.send("updated" + updatedinfo);
        }
    });
})

.delete(function(req,res){
    info.findByIdAndRemove(req.params.id,function(err, deletedinfo){
        if(err){
            res.status(500).send(err);
        } else {
            res.send("deleted" + deletedinfo);
        }
    });
});

module.exports = infoRoutes;