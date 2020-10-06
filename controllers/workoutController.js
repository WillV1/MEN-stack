const express = require('express');
const router = express.Router();
const db = require('../models');

//index route
router.get('/', (req,res) => {
    db.Exercise.find({}, (err, allExercises) => {
        if(err) return console.log(err);
        res.render('exercises/index', {exercises: allExercises});
    });
});

//add exercise route
router.get('/new', (req, res) =>{
    res.render('exercises/add');
});

//show route
router.get('/:id', (req, res) => {
    db.Exercise.findById(req.params.id, (err, showExercise) => {
        if (err) return console.log(err);
    res.render('exercises/show', {
        exercise: showExercise,
    });
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