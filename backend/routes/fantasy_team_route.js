const router = require('express').Router();
let FantasyTeamRepository = require ('../repositories/FantasyTeamRepository')

router.get('/', async (req, res) => {
    console.log("Testing")
    const fantasyTeams = await FantasyTeamRepository.getAllFantasyTeams()
    res.send(fantasyTeams)
})

router.post('/', async (req, res) => {
    let fantasyTeam = FantasyTeamRepository.addFantasyTeam(req.body)
})

router.get('/id', async (req, res) => {
    let fantasyTeam = await FantasyTeamRepository.getFantasyTeamByID(req.body)
    res.send(fantasyTeam)
})

module.exports = router;