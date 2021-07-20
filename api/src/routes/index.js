const { Router } = require('express');

const CommitRoute = require('./commit');

const router = Router();

router.use('/commits', CommitRoute);

module.exports = router;