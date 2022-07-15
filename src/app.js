const express = require('express')
const path = require('path')
const hbs= require('hbs')
// console.log(__dirname)
// console.log(__filename)
const app = express()
//define pathfor express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partial')

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

// setup handlebar engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
// this is called route handler
app.get('', (req, res) => {
    
    res.render('index',{
        title:'weather appp',
        name:'Pujaa',
        age:24
    })
})
app.get('/about', (req, res) => {

    res.render('about',{
        title:'about text',
        name:'sanket',
        age:26
    })
})
app.get('/help', (req, res) => {

    res.render('help',{
        title:'help text',
        name:'sanket',
        age:27
    })
})

app.get('', (req, res) => {

    res.send('<h1>Weather</h1>')
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

//handle error like page not found

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})
app.get('*', (req, res) => {

    res.render('404',{
        title: '404',
        name: 'Puja',
        Errormessage:'Article page not found .'
    
    })
})
// app.get('/help/*', (req, res) => {

//     res.send('Header article not found')
// })
// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Puja'
//     }, {
//         name: 'Sanket'
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is raining',
//         location: 'Indiaa'
//     })
// })

//query string 



app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})