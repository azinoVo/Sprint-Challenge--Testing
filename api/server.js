const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
const db = require('../data/dbConfig');

server.use(express.json());
server.use(helmet());
server.use(cors());


server.get('/', (req, res) => {
    res.status(200).json({message: 'Hello Thar! Get / is working!'})
});

server.post('/api/games', (req, res) => {
    const {title, genre} = req.body;
    const game = {
        title: title,
        genre: genre
    }

    if (!title || !genre) {
        res.status(422).json({message: "Missing title or genre. Please Provide!"})
    } else {

        db('games')
        .insert(game)
        .then(ids => {
            const [id] = ids

            db('games')
            .where({id})
            .first()
            .then(game => {
                res.status(200).json(game);
            })
            .catch(err => {
                res.status(404).json({message: "Error finding game."});
            })

        })
        .catch(err => {
            res.status(500).json({message: "Error inserting game into database."});
        })
    }

});

server.get('/api/games', (req, res) => {

    db('games')
    .then(games => {
        res.status(200).json(games);
    })
    .catch(err => {
        res.status(404).json({message: "Cannot find games."})
    })
});


module.exports = server;