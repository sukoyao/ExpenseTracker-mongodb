const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  res.send('列出所有record')
})

router.get('/new', authenticated, (req, res) => {
  return res.render('new')
})

router.post('/', authenticated, (req, res) => {
  const record = new Record({
    name: req.body.name,
    category: req.body.category,
    date: req.body.date,
    amount: req.body.amount,
    userId: req.user._id
  })
  record.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

router.get('/:id/edit', authenticated, (req, res) => {
  Record.findOne(
    { _id: req.params.id, userId: req.user._id },
    (err, record) => {
      if (err) return console.error(err)
      return res.render('edit', { record })
    }
  )
})

router.put('/:id', authenticated, (req, res) => {
  Record.findOne(
    { _id: req.params.id, userId: req.user._id },
    (err, record) => {
      if (err) return console.error(err)
      Object.assign(record, req.body) // 更新表單資料，Object.assign(target array, ...sources array)
      record.save(err => {
        if (err) return console.error(err)
        return res.redirect('/')
      })
    }
  )
})

router.delete('/:id/delete', authenticated, (req, res) => {
  Record.findOne(
    { _id: req.params.id, userId: req.user._id },
    (err, record) => {
      if (err) return console.error(err)
      record.remove(err => {
        if (err) return console.error(err)
        return res.redirect('/')
      })
    }
  )
})

module.exports = router
