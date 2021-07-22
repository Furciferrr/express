import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'
import serverRouters from './routes/server.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()


app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)

app.use(serverRouters)

app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features Page', active: 'features'})
})

 /* app.get('/download', (req, res) => {
    // res.send('<h1>Hello Express</h1>')
    res.download(path.resolve(__dirname, 'static', 'index.html'))
 }) */
app.listen(PORT, () => {
    console.log('server init')
})