const express = require('express')
const app = express()
const path = require('path')

//settings
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

//middlewares


//routes
app.use(require('./routes/index'))

//static files
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'),()=>{
	console.info('server on', app.get('port'))
})