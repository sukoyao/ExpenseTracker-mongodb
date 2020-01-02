const mongoose = require('mongoose')
const Record = require('../record')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/record', {
  useNewUrlParser: true,
  useCreateIndex: true
})

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb is connected')
  Record.create({
    name: '午餐',
    category: 'food',
    date: '2019-04-05',
    amount: '100'
  })
  Record.create({
    name: '客運',
    category: 'travel',
    date: '2019-03-06',
    amount: '150'
  })
  Record.create({
    name: '電影票',
    category: 'leisure',
    date: '2019-04-08',
    amount: '300'
  })
  Record.create({
    name: '房租',
    category: 'home',
    date: '2019-03-01',
    amount: '15000'
  })
  Record.create({
    name: '機車違停罰單',
    category: 'other',
    date: '2019-04-03',
    amount: '600'
  })
  Record.create({
    name: '機票',
    category: 'travel',
    date: '2019-05-03',
    amount: '6600'
  })
  console.log('done')
})
