
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import PostModel from './models/Post.js';

const app = express();
mongoose.connect('mongodb://localhost/blog');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/posts', (req, res) => {

    const data = req.body;

    const post = new PostModel({
        title: data.title,
        text: data.text
    });

    post.save().then(() => {
        res.send({ status: 'ok' });
    });
});

app.get('/posts', (req, res) => {
    PostModel.find().then((err, posts) => {
        if (err) {
            return res.send(err);
        }
        res.json(posts);
    });
});

app.listen(3333, () => {
    console.log('server started!');
});