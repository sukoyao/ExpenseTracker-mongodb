const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Handlebars = require('handlebars')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

Handlebars.registerHelper('switch', (value, options) => {
  this.switch_value = value
  this.switch_break = false
  return options.fn(this)
})

Handlebars.registerHelper('case', (value, options) => {
  if (value === this.switch_value) {
    this.switch_break = true
    return options.fn(this)
  }
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(
  session({
    secret: 'qwrqerqergerg',
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use(flash())

app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.use('/', require('./routes/home'))
app.use('/records', require('./routes/record'))
app.use('/filter', require('./routes/filter'))
app.use('/users', require('./routes/user'))
app.use('/auth', require('./routes/auths'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/record', {
  useNewUrlParser: true,
  useCreateIndex: true
})

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb is connected')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('App is running on http://localhost:3000')
})
