const matchCtrl = {};

const Match = require('../models/Match');
const Team = require('../models/Team');
const Result = require('../models/Results');

matchCtrl.view = async (req,res) => {
    if(req.params.match == 1){
        team_1 = await Team.find({num_team: 1});
        team_2 = await Team.find({num_team: 2});
        res.json({
            message: 'Partido 1',
            n_team_1: team_1[0]['name'],
            n_team_2: team_2[0]['name'],
        });
    }
    if(req.params.match == 2){
        team_1 = await Team.find({"num_team": 1});
        team_3 = await Team.find({"num_team": 3});
        res.json({
            message: 'Partido 2',
            n_team_1: team_1[0]['name'],
            n_team_3: team_3[0]['name'],
        });
    }
    if(req.params.match == 3){
        team_1 = await Team.find({"num_team": 1});
        team_4 = await Team.find({"num_team": 4});
        res.json({
            message: 'Partido 3',
            n_team_1: team_1[0]['name'],
            n_team_4: team_4[0]['name'],
        });
    }
    if(req.params.match == 4){
        team_2 = await Team.find({"num_team": 2});
        team_3 = await Team.find({"num_team": 3});
        res.json({
            message: 'Partido 4',
            n_team_2: team_2[0]['name'],
            n_team_3: team_3[0]['name'],
        });
    }
    if(req.params.match == 5){
        team_2 = await Team.find({"num_team": 2});
        team_4 = await Team.find({"num_team": 4});
        res.json({
            message: 'Partido 5',
            n_team_2: team_2[0]['name'],
            n_team_4: team_4[0]['name'],
        });
    }
    if(req.params.match == 6){
        team_3 = await Team.find({"num_team": 3});
        team_4 = await Team.find({"num_team": 4});
        res.json({
            message: 'Partido 6',
            n_team_3: team_3[0]['name'],
            n_team_4: team_4[0]['name'],
        });
    }
}



matchCtrl.addScore = async (req,res) => {
    team_1 = await Team.find({num_team: 1});
    team_2 = await Team.find({num_team: 2});
    team_3 = await Team.find({num_team: 3});
    team_4 = await Team.find({num_team: 4});

    name_t1 = team_1[0]['name'];
    name_t2 = team_2[0]['name'];
    name_t3 = team_3[0]['name'];
    name_t4 = team_4[0]['name'];

    goals_t1 = team_1[0]['goals'];
    goals_t2 = team_2[0]['goals'];
    goals_t3 = team_3[0]['goals'];
    goals_t4 = team_4[0]['goals'];

    score_t1 = team_1[0]['total_score'];
    score_t2 = team_2[0]['total_score'];
    score_t3 = team_3[0]['total_score'];
    score_t4 = team_4[0]['total_score'];
    
    if(req.params.match == 1){

        const {goals_1,goals_2} = req.body
        const newMatch = new Match({
            N_match: 1,
            team_1: name_t1,
            team_2: name_t2,
            goals_1: goals_1,
            goals_2: goals_2
        })

        if (goals_1>goals_2){
            score_1 = 3;
            score_2 = 0;
            res.json({message: 'Win '+ name_t1});
        } else if (goals_1<goals_2){
            score_1 = 0;
            score_2 = 3;
            res.json({message: 'Win '+ name_t2});
        }else{
            score_1 = 0;
            score_2 = 0;
            res.json({message: 'Tie'});
        }

        await Team.findOneAndUpdate({name: name_t1},{
            goals: goals_t1 + goals_1,
            total_score: score_t1 + score_1
        });

        await Team.findOneAndUpdate({name: name_t2},{
            goals: goals_t2 + goals_2,
            total_score: score_t2 + score_2
        });

    }

    if(req.params.match == 2){

        const {goals_1,goals_2} = req.body
        const newMatch = new Match({
            N_match: 2,
            team_1: name_t1,
            team_2: name_t3,
            goals_1: goals_1,
            goals_2: goals_2
        })

        if (goals_1>goals_2){
            score_1 = 3;
            score_2 = 0;
            res.json({message: 'Win '+ name_t1});
        } else if (goals_1<goals_2){
            score_1 = 0;
            score_2 = 3;
            res.json({message: 'Win '+ name_t3});
        }else{
            score_1 = 0;
            score_2 = 0;
            res.json({message: 'Tie'});
        }

        await Team.findOneAndUpdate({name: name_t1},{
            goals: goals_t1 + goals_1,
            total_score: score_t1 + score_1
        });

        await Team.findOneAndUpdate({name: name_t3},{
            goals: goals_t3 + goals_2,
            total_score: score_t3 + score_2
        });

    }

    if(req.params.match == 3){

        const {goals_1,goals_2} = req.body
        const newMatch = new Match({
            N_match: 3,
            team_1: name_t1,
            team_2: name_t4,
            goals_1: goals_1,
            goals_2: goals_2
        })

        if (goals_1>goals_2){
            score_1 = 3;
            score_2 = 0;
            res.json({message: 'Win '+ name_t1});
        } else if (goals_1<goals_2){
            score_1 = 0;
            score_2 = 3;
            res.json({message: 'Win '+ name_t4});
        }else{
            score_1 = 0;
            score_2 = 0;
            res.json({message: 'Tie'});
        }

        await Team.findOneAndUpdate({name: name_t1},{
            goals: goals_t1 + goals_1,
            total_score: score_t1 + score_1
        });

        await Team.findOneAndUpdate({name: name_t4},{
            goals: goals_t4 + goals_2,
            total_score: score_t4 + score_2
        });

    }

    if(req.params.match == 4){

        const {goals_1,goals_2} = req.body
        const newMatch = new Match({
            N_match: 4,
            team_1: name_t2,
            team_2: name_t3,
            goals_1: goals_1,
            goals_2: goals_2
        })

        if (goals_1>goals_2){
            score_1 = 3;
            score_2 = 0;
            res.json({message: 'Win '+ name_t2});
        } else if (goals_1<goals_2){
            score_1 = 0;
            score_2 = 3;
            res.json({message: 'Win '+ name_t3});
        }else{
            score_1 = 0;
            score_2 = 0;
            res.json({message: 'Tie'});
        }

        await Team.findOneAndUpdate({name: name_t2},{
            goals: goals_t2 + goals_1,
            total_score: score_t2 + score_1
        });

        await Team.findOneAndUpdate({name: name_t3},{
            goals: goals_t3 + goals_2,
            total_score: score_t3 + score_2
        });

    }

    if(req.params.match == 5){

        const {goals_1,goals_2} = req.body
        const newMatch = new Match({
            N_match: 5,
            team_1: name_t2,
            team_2: name_t4,
            goals_1: goals_1,
            goals_2: goals_2
        })

        if (goals_1>goals_2){
            score_1 = 3;
            score_2 = 0;
            res.json({message: 'Win '+ name_t2});
        } else if (goals_1<goals_2){
            score_1 = 0;
            score_2 = 3;
            res.json({message: 'Win '+ name_t4});
        }else{
            score_1 = 0;
            score_2 = 0;
            res.json({message: 'Tie'});
        }

        await Team.findOneAndUpdate({name: name_t2},{
            goals: goals_t2 + goals_1,
            total_score: score_t2 + score_1
        });

        await Team.findOneAndUpdate({name: name_t4},{
            goals: goals_t4 + goals_2,
            total_score: score_t4 + score_2
        });

    }

    if(req.params.match == 6){

        const {goals_1,goals_2} = req.body
        const newMatch = new Match({
            N_match: 6,
            team_1: name_t3,
            team_2: name_t4,
            goals_1: goals_1,
            goals_2: goals_2
        })

        if (goals_1>goals_2){
            score_1 = 3;
            score_2 = 0;
            res.json({message: 'Win '+ name_t3});
        } else if (goals_1<goals_2){
            score_1 = 0;
            score_2 = 3;
            res.json({message: 'Win '+ name_t4});
        }else{
            score_1 = 0;
            score_2 = 0;
            res.json({message: 'Tie'});
        }

        await Team.findOneAndUpdate({name: name_t3},{
            goals: goals_t3 + goals_1,
            total_score: score_t3 + score_1
        });

        await Team.findOneAndUpdate({name: name_t4},{
            goals: goals_t4 + goals_2,
            total_score: score_t4 + score_2
        });
    }
}

matchCtrl.results = async (req,res) => {    
    
    team_1 = await Team.find({num_team: 1});
    team_2 = await Team.find({num_team: 2});
    team_3 = await Team.find({num_team: 3});
    team_4 = await Team.find({num_team: 4});

    goals_t1 = team_1[0]['goals'];
    goals_t2 = team_2[0]['goals'];
    goals_t3 = team_3[0]['goals'];
    goals_t4 = team_4[0]['goals'];

    score_t1 = team_1[0]['total_score'];
    score_t2 = team_2[0]['total_score'];
    score_t3 = team_3[0]['total_score'];
    score_t4 = team_4[0]['total_score'];

    const newResult = new Result({
        game: 1,
        position_1: '',
        position_2: '',
        position_3: '',
        position_4: '',
    });

    await newResult.save();

    scores = [score_t1,score_t2,score_t3,score_t4];

    scores.sort(function(a,b){return b - a});

    

    team_p1 = await Team.find({total_score: scores[0]});

    if(team_p1.length != undefined){
        max = Math.max(team_p1[0]['goals'],team_p1[1]['goals']);
        team_p1 = await Team.find({total_score: scores[0], goals: max});
    }

    scores.shift();

    

    if (scores[0] != scores[1]){
        team_p1 = await Team.find({total_score: scores[0]});
    }else if (goals[0] != goals[1]){
        team_p1 = await Team.find({total_score: scores[0], goals: goals[0]});
    }

    //team_p1 = await Team.find({total_score: scores[0]});
    //team_p2 = await Team.find({total_score: scores[1]});
    //team_p3 = await Team.find({total_score: scores[2]});
    //team_p4 = await Team.find({total_score: scores[3]});

    res.json([{
        primero: team_p1[0]['name'],
        puntos: team_p1[0]['total_score'],
        goles: team_p1[0]['goals']
    },{
        segundo: team_p2[0]['name'],
        puntos: team_p2[0]['total_score'],
        goles: team_p2[0]['goals']
    },{
        tercero: team_p3[0]['name'],
        puntos: team_p3[0]['total_score'],
        goles: team_p3[0]['goals']
    },{
        cuarto: team_p4[0]['name'],
        puntos: team_p4[0]['total_score'],
        goles: team_p4[0]['goals']
    }])

}

module.exports = matchCtrl;