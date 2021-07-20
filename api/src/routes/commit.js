const { Router } = require('express');

const fetch = require('node-fetch');

const router = Router();

router.get('/', ( req, res ) => {
    const owner = 'Violeta-Fuentes'
    const repo = 'Take-Home-Test'

    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
    .then(response => response.json())
    .then(response => {
        res.send(response)
    })
    .catch(error => console.log(error))
})

module.exports = router