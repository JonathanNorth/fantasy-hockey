const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fantasyTeamSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3,
        required: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    teamName: {
        type: String,
        trim: true,
        required: true
    },
}, {
    timestamps:true,
});

const FantasyTeam = mongoose.model('fantasyTeam', fantasyTeamSchema);

module.exports = FantasyTeam;