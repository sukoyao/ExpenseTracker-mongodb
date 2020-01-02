const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  Record.find({ userId: req.user._id }, (err, records) => {
    if (err) return console.console.error(err)

    let totalAmount = 0
    for (record of records) {
      totalAmount += record.amount
    }

    return res.render('index', { records, totalAmount })
  })
})

module.exports = router
