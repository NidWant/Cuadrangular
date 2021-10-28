const registerCtrl = {};

const Team = require('../models/Team');

registerCtrl.view = async(req,res) => {
    const teams = await Team.find();
    res.json({teams});
}

registerCtrl.createTeam = async (req,res) => {
    const {name_team,number_team} = req.body;
    const newTeam = new Team({
        name: name_team,
        num_team: number_team,
        total_score: 0,
        goals: 0
    });

    await newTeam.save();

    res.json({message: 'Registration Saved'});
}

registerCtrl.deleteTeam = async (req,res) =>{
    await Team.deleteMany({num_teams: 1});
    await Team.deleteMany({num_teams: 2});
    await Team.deleteMany({num_teams: 3});
    await Team.deleteMany({num_teams: 4});
    res.json({message: 'Datos eliminados'});
}


module.exports = registerCtrl;
