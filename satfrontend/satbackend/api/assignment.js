const express = require('express');
const router = express.Router();
const assignmentData = require('../models/assignmentModel');
const { request } = require('express');

router.get('/', (req, res) => {
    assignmentData.find()
    .then(assignment => {
        res.json(assignment)
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/create', (req, res) => {
    const createdAssignment = new assignmentData({
        username:request.body.username,
        assignmentReport:request.body.assignmentReport,
        timeSubmitted:request.body.timeSubmitted
    })
    createdAssignment.save()
    .then(assignment => {
        res.json(assignment)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/:id', (req, res) => {
    assignmentData.findById(request.params.id)
    .then(assignment => {
        res.json(assignment)
    })
    .catch(err => {
        res.json(err)
    })
})

router.delete('/:id', (req, res) => {
    assignmentData.findByIdAndDelete(request.params.id)
    .then(()=> {
        res.json('student deleted')
    })
    .catch(err => {
        res.json(err)
    })
})

router.post('/update/:id', (req, res) =>{
    assignmentData.findById(request.params.id)
    .then(assignment =>{
        assignment.username =request.body.username,
        assignment.assignmentReport =request.body.assignmentReport,
        assignment.timeSubmitted =request.body.timeSubmitted
        
        assignment.save()
        .then(() => {
            res.json('Excercise updated')
        })
    })
        .catch(err => {
            res.json(err) 
    })
})

module.exports = router;