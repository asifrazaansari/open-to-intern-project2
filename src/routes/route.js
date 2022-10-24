const express = require('express')
const router = express.Router()
const collegeController = require('../controllers/collegeController')
const internController = require('../controllers/internController')

router.post('/functionup/colleges', collegeController.createCollege)

router.post('/functionup/interns', internController.createIntern)

router.get('/functionup/collegeDetails', internController.getIntern)

router.all('/*', async function (req, res) {
    return res.status(400).send({ status: false, message: "Page not found" })
})

module.exports = router