const express = require('express')
const session = require('express-session');
const route = require('./routes')
const app = express()
const sessionConfig = {
  secret: //gatau ini apa
}
const port = 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(session(sesionConfig))

app.use('/breads', express.static('breads'));
app.use('/uploads', express.static('uploads'));
app.use(route)

app.listen(port, ()=>{
    console.log("This app is running at port : ", port )
})
