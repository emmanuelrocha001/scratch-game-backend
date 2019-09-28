const mongoose = require('mongoose');

// design object
const playerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    p_id: { type: Number, required: true},
    p_class: { type: Number, required: true},
    room: { type: String, default: 'start_area'},
    x_position: { type: Number, default: 0},
    y_position: { type: Number, default: 0},
    xp: { type: Number, default: 0}
  });



//constructor based on schema
module.exports = mongoose.model('Player', playerSchema);
