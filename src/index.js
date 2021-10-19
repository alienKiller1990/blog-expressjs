
import mongoose from 'mongoose';
import PostModel from './models/Post.js';

mongoose.connect('mongodb://localhost/blog');

const post = new PostModel({
    title: 'Новая запись',
    text: 'Hello world'
});

post.save().then(() => {
    console.log('Ok!!')
})

