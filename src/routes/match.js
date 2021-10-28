const { Router } = require('express');
const router = Router();

const {view,addScore,results} = require('../controllers/match.controllers')

router.route('/:match')
    .get(view)
    .post(addScore)

router.route('/')
    .get(results)


module.exports = router;