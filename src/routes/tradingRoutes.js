var express = require("express");
var tradeRoutes = express.Router();
var trade = require("../models/trading");

tradeRoutes.route("/")
    .get(function (req, res) {
    var query = {};
    if(req.query.forsell){
        query.forsell = req.query.forsell
    }else{
        if(req.query.owner){
            query.owner = req.query.owner
        }
    }
        trade.find(query, function (err, trading) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(trading);
            }
        });
    
    })






.post(function (req, res) {
    var newTrad = new trade(req.body);
    newTrad.save(function (err, newTradeObject) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newTradeObject);
        }
    });
})

tradeRoutes.route("/:id")
    .get(function (req, res) {
        trade.findById(req.params.id, function (err, tradeObject) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(tradeObject);
            }
        });
    })

.put(function (req, res) {
    trade.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, updatedTrade) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send("updated" + updatedTrade);
        }
    });
})

.delete(function (req, res) {
        trade.findByIdAndRemove(req.params.id, function (err, deletedTrade) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send("deleted" + deletedTrade);
            }
        });
    });




module.exports = tradeRoutes;