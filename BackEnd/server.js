const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyparser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');


// All of this is needed for cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const stringToConnect = "mongodb+srv://Admin:admin@cluster0.fdgof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(stringToConnect, { useNewUrlParser: true });

const Schema = mongoose.Schema;

var imageSchema = new Schema({
    artTitle: String,
    author: String,
    canvasSize: Number,
    artArray: [{ type: String }]
});

var imageModel = mongoose.model("image", imageSchema);


app.get('/api/images', (req, res) => {
    imageModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/api/images/:id', (req, res)=>{
    imageModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

app.put('/api/images/:id', (req, res)=>{
    imageModel.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, data) =>{
            res.send(data);
        })
})

app.post('/api/images', (req, res) => {
    imageModel.create({
        artTitle: req.body.artTitle,
        author: req.body.author,
        canvasSize: req.body.canvasSize,
        artArray: req.body.artArray
    })

    res.send('Art Successfully Uploaded!')
})

app.delete('/api/movies/:id', (req, res)=>{
    imageModel.findByIdAndDelete(req.params.id, (err, data)=>{
        res.send(data);
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})