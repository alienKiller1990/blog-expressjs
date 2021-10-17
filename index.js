// const express = require('express');
// const bodyParser = require('body-parser')

// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())

// const posts = [
//     {
//         title: 'Hello World',
//         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquam esse nulla sapiente nobis enim quidem delectus, ex quaerat asperiores.'
//     },
//     {
//         title: 'The Meeting',
//         text: '19: 35 Lorem ipsum dolor sit amet.'
//     },
//     {
//         title: '404',
//         text: ' elit. Illum aliquam esse nulla sapiente nobis enim quidem delectus, ex quaerat asperiores.'
//     },
//     {
//         title: '12345',
//         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquam esse nulla sapiente nobis enim quidem delectus, ex quaerat asperiores.orem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquam esse nulla sapiente nobis enim quidem delectus, ex quaerat asperiores.'
//     }
// ]

// app.get('/posts', function(req, res) {
//     return res.send(posts);
// });
// app.get('/posts/:id', function(req, res) {
//     const id = req.params.id;
//     return res.send(posts[id]);
// });
// app.post('/posts', function(req, res) {
//     const data = req.body;
//     console.log(data);
//     posts.push(data);
//     return res.send(posts)
// });

// app.listen(3333, function(){
//     console.log('SERVER ZAPUSHEN!!')
// })
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
