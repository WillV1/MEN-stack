const express = require('express');
const router = express.Router();
const exercises = require('../models/Exercise');

//index route
router.get('/', (req,res) => {
    res.render('exercises/index', {exercises: exercises})
});

//show route
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const exercise = exercises[id];

    res.render('exercises/show', {exercise: exercise})

});



module.exports = router;