const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json())
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    return res.send(posts);
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');

    const { title } = req.body;

    posts[id] = {
        id, title
    }

    /** for event */ 
    axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    })

    return res.status(201).json(posts[id]);
})

app.post('/events', (req, res) => {
    console.log('Received event', req.body.type)
    res.send({})
})

app.listen(4000, () => {
    console.log('App running port - 4000');
})

