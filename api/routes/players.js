const express = require( 'express' );
const router = express.Router();
const mongoose = require('mongoose');

const Player = require( '../models/player' );

router.get('/', (req, res, next) => {

    Player.find()
    .select('p_id p_class room x_position y_position xp')
    .exec()
    .then(docs => {
        const response = {
        count: docs.length,
        players: docs.map(doc => {
            return {
                p_id: doc.p_id,
                p_class: doc.p_class,
                room: doc.room,
                x_position: doc.x_position,
                y_postion: doc.y_position,
                xp: doc.xp
            }
        })
        };

        console.log(response);

        if (docs.length >= 0) {
        res.status(200).json(response);
        }
        else{
        res.status(404).json({
            message: 'No entires found'
        });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
        error : err
        });
    });
});

router.post('/', (req, res, next) => {
    const player = new Player({
        _id: new mongoose.Types.ObjectId(),
        p_id: req.body.p_id,
        p_class: req.body.p_class,
        room: req.body.room,
        x_position: req.body.x_position,
        y_position: req.body.y_position,
        xp: req.body.xp
    });

    // status 201 for resource creation
    player
        .save()
        .then( result => {
            console.log(result);
            res.status(201).json({
                message : 'Created player succesfully',
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error : err})
        });
});

router.get('/:playerId', ( req, res, next ) => {
    // const id = req.params.eventId;

    res.status(200).json({
        message: 'getting player info'
    });
});


router.patch('/:playerId', ( req, res, next ) => {
    res.status(200).json({
        message: 'player info updated'
    });
});

router.delete('/:playerId', ( req, res, next ) => {
    res.status(200).json({
        message: 'player deleted'
    });
});


// export router with configured routes
module.exports = router;