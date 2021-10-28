const { Router } = require('express');
const router = Router();

const {createTeam,view,deleteTeam} = require('../controllers/registration.controllers')

router.route('/')
    .get(view)
    .post(createTeam)
    .delete(deleteTeam)

module.exports = router;