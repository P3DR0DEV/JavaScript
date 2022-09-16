const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required
    },
    description: String
});

const model = mongoose.model('Home', HomeSchema,'Agenda')

module.exports = model