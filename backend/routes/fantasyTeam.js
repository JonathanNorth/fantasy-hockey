const router = require('express').Router();
let FantasyTeam = require('../models/fantasyTeam.model');

router.route('/').get((req, res) => {
  fantasyTeam.find()
    .then(fantasyTeams => res.json(fantasyTeams))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.fantasyTeam;
  const firstName = req.body.fantasyTeam;
  const lastName = req.body.fantasyTeam;

  const newfantasyTeam = new FantasyTeam({
      username,
      firstName,
      lastName
    });

  newfantasyTeam.save()
    .then(() => res.json('fantasyTeam added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;