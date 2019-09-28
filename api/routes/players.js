const express = require( 'express' );
const router = express.Router();
const mongoose = require('mongoose');

const Player = require( '../models/player' );

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'get all players in server'
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