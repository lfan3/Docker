const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
//?mongoDB from docker-compose file
const dbHost = 'mongodb://192.168.99.100:27017/mean-docker';
mongoose.connect(dbHost);

//mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//mongoose model
const User = mongoose.model('User', userSchema);

router.get('/', (req, res) => {
    res.send('good news: api works');
});

//get all users
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)
        res.status(200).json(users);
    });
});

router.get('/users/:id', (req, res) => {
    User.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)
        res.status(200).json(users);
    });
});

router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;
