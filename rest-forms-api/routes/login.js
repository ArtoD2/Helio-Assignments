const express = require('express');
const router = express.Router();
const db = require('../data/array')

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userName = req.param("username")
    res.render('main',{username: userName});
});

router.post('/', function(req, res, next) {
    
    let userName =  req.body.username
    res.render('main',{username: userName});

});

router.post('/signin', function(req, res, next) {
    
    let user = db.getUser(req.body.username, req.body.password)
    res.render('main',{action: "Got",user});

});

router.post('/signup', function(req, res, next) {
    
    let user = db.addUser(req.body.username, req.body.password)
    res.render('main',{action: "Added",user});
    
});

router.post('/changepass', function(req, res, next) {
    
    let user = db.addUser(req.body.username, req.body.password, req.body.password)
    res.render('main',{action: "Password Changed",user}); 
    
});




module.exports = router;