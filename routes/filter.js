const express = require('express')
const router = express.Router()
const Record = require('../models/record')


router.get('/month/:month', (req, res) => {
  const month = req.params.month
  Record.find({ userId: req.user._id }, (err, records) => {
    if (err) console.log('filter month err')

    const monthItem = records.filter(record => {
      return month === record.date.substring(5, 7)
    })

    let totalAmount = 0
    for (record of monthItem) {
      totalAmount += record.amount
    }
    res.render('index', { records: monthItem, totalAmount })
  })
})

router.get('/category/:category', (req, res) => {
  Record.find({ category: req.params.category, userId: req.user._id }, (err, records) => {
    if (err) console.log('filter category err')

    let totalAmount = 0
    for (record of records) {
      totalAmount += record.amount
    }
    res.render('index', { records, totalAmount })
  })
})

module.exports = router
