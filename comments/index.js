const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json())
app.use(cors());

const commentByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    return res.send(commentByPostId[req.params.id] || [])
})


app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');

    const { content } = req.body;

    const comments = commentByPostId[req.params.id] || [];

    comments.push({ id: commentId, content })

    commentByPostId[req.params.id] = comments;

    axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id
        }
    })

    return res.status(201).send(comments);

})

app.post('/events', (req, res) => {
    console.log('Received event', req.body.type)
    res.send({})
})

app.listen(4001, () => {
    console.log('APP is listening in port - 4001')
})