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
    db.Exercise.create(req.body, (err, newExercise) => {
        if(err) return console.log(err);
        res.redirect(`/workouts/${newExercise._id}`);
    });
});

//delete exercise
router.delete('/:id', (req, res) => {
    db.Exercise.findByIdAndDelete(req.params.id, (err, deletedExercise) => {
        if (err)  return console.log(err);
        res.redirect('/workouts');
    });
});

//edit exercise route
router.get('/:id/edit', (req, res) => {
    db.Exercise.findById(req.params.id, (err, foundExercise) => {
        if (err) return console.log(err);
    res.render('exercises/edit', {
        exercise: foundExercise
    });
});
});

//edit exercise
router.put('/:id', (req, res) => {

    if(req.body.completed === 'on'){
        req.body.completed = true
    } else {
        req.body.completed = false
    };
    db.Exercise.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedExercise) => {
            if (err) return console.log(err);
            res.redirect(`/workouts/${updatedExercise._id}`)
        }
    )
});


module.exports = router;