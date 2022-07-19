const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fantasyTeamSchema = new Schema({
    teamName: { type: String, required: true},
    gm: { 
        first: { type: String, required: true},
        last: { type: String, required: true}
    },
    prospects: [prospectsSchema],
    
}, { timestamp: true,
});

const FantasyTeam = mongoose.model('Prospect', fantasyTeamSchema);
module.exports = FantasyTeam;