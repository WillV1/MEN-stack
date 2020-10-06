const express = require('express');
const router = express.Router();
const exercises = require('../models/Exercise');

//index route
router.get('/', (req,res) => {
    res.render('exercises/index', {exercises: exercises});
});

//add exercise route
router.get('/new', (req, res) =>{
    res.render('exercises/add');
});

//show route
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const exercise = exercises[id];

    res.render('exercises/show', {
        exercise: exercise,
        id: id
    });
});

//create exercise
router.post('/', (req, res) => {
    req.body.completed = req.body.completed === 'on';
    exercises.push(req.body);
    res.redirect('/workouts');
});

//delete exercise
router.delete('/:id', (req, res) => {
    exercises.splice(req.params.id, 1);
    res.redirect('/workouts');
});

//edit exercise route
router.get('/:id/edit', (req, res) => {
    res.render('exercises/edit', {
        exercise: exercises[req.params.id],
        id: req.params.id
    });
});

//edit exercise
router.put('/:id', (req, res) => {

    if(req.body.completed === 'on'){
        req.body.completed = true
    } else {
        req.body.completed = false
    };

    exercises[req.params.id] = req.body;

    exercises.splice(req.params.id, 1, req.body);
    res.redirect(`/workouts/${req.params.id}`)
});


module.exports = router;