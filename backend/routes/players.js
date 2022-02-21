const router = require('express').Router();
let Player = require('../models/player.model');

router.route('/').get((req, res) => {
  Player.find()
    .then(player => res.json(player))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName         = req.body.firstName;
  const lastName          = req.body.lastName;
  const NHLTeam           = req.body.NHLTeam;
  const birthdate         = req.body.birthdate;
  const position          = req.body.position;
  const jerseyNumber      = req.body.jerseyNumber;
  const fantasyTeam       = req.body.fantasyTeam;
  const fantasyDraftYear  = req.body.fantasyDraftYear;
  const fantasyDraftPick  = req.body.fantasyDraftPick;

  const newPlayer = new Player({
    firstName,
    lastName,
    birthdate,
    NHLTeam,
    position,
    jerseyNumber,
    fantasyTeam,
    fantasyDraftYear,
    fantasyDraftPick
  });

  newPlayer.save()
  .then(() => res.json('Player added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Player.findById(req.params.id)
    .then(player => res.json(player))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Player.findByIdAndDelete(req.params.id)
    .then(() => res.json('Player deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Player.findById(req.params.id)
    .then(player => {
      player.firstName        = req.body.firstName;
      player.lastName         = req.body.lastName;
      player.birthdate        = Date.parse(req.body.birthdate);
      player.NHLTeam          = req.body.NHLTeam;
      player.position         = req.body.position;
      player.jerseyNumber     = Number(req.body.jerseyNumber);
      player.fantasyTeam      = req.body.fantasyTeam;
      player.fantasyDraftYear = Date.parse(req.body.fantasyDraftYear);
      player.fantasyDraftPick = Number(req.body.fantasyDraftPick);
      player.save()
        .then(() => res.json('player updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;