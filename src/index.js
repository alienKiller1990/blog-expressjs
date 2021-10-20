
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';


// import PostModel from './models/Post.js';
import PostController from './controllers/PostController.js';
const Post = new PostController()

const app = express();
mongoose.connect('mongodb://localhost/blog');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/posts', Post.index());

app.get('/posts', Post.create());
app.get('/posts', Post.read());

app.delete('/posts/:id', Post.read());

app.put('/posts/:id', Post.update());





app.listen(3333, () => {
    console.log('server started!')
});

