const mongoose = require('mongoose');
const FantasyTeam = require('./fantasyTeam.model');
const Schema = mongoose.Schema;



const playerSchema = new Schema({
    firstName:      {   type: String, required: true },
    lastName:       {   type: String, required: true },
    birthdate:      {   type: Date,   required: true },
    NHLTeam:        {   type: String, enum: [   "Anaheim Ducks", "Arizona Coyotes", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks",
                                                "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Los Angeles Kings",
                                                "Florida Panthers", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersey Devils", "New York Islanders",
                                                "New York Rangers", "Ottawa Senators",  "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "Seattle Kraken", 
                                                "St Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Vancouver Canucks", "Vegas Golden Knights", 
                                                "Washington Capitals", "Winnipeg Jets"], required: true },
    position:       {   type: String, required: true },
    jerseyNumber:   {   type: Number, required: true },
    fantasyTeam:    [{type: Schema.Types.ObjectId, ref: 'FantasyTeam'}],
    fantasyDraftYear: { type: Date  },
    fantasyDraftPick: { type: Number, min: 1, max: 50 }

}, {
    timestamps: true,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;