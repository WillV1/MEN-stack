const express = require('express');
const router = express.Router();
const exercises = require('../models/Exercise');

//index route
router.get('/', (req,res) => {
    res.render('exercises/index', {exercises: exercises})
});



module.exports = router;