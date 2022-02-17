const router = require('express').Router();
let FantasyTeam = require('../models/fantasyTeam.model');

router.route('/').get((req, res) => {
  FantasyTeam.find()
    .then(fantasyTeams => res.json(fantasyTeams))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const teamName = req.body.teamName;

  const newFantasyTeam = new FantasyTeam({
      username,
      firstName,
      lastName,
      teamName
    });

  newFantasyTeam.save()
    .then(() => res.json('fantasyTeam added!' + newFantasyTeam))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;