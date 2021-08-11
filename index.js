const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'))
})

app.get('/anketa', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'anketa.html'))
})

app.get('/a2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'a2.html'))
})

app.get('/a3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'a3.html'))
})

app.get('/a4', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'a4.html'))
})

app.get('/treesum', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'treeSum.html'))
})

app.get('/countries', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'countries.html'))
})

app.get('/b1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'b1.html'))
})

app.get('/b2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'b2.html'))
})

app.get('/b4', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'b4.html'))
})

app.get('/b5', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'b5.html'))
})

app.get('/b6', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'b6.html'))
})

app.get('/vowels', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'vowels.html'))
})

app.get('/roots', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'roots.html'))
})

app.get('/mood', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'mood.html'))
})

app.get('/drink', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'drink.html'))
})

app.get('/drink_class', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'drink_class.html'))
})

app.get('/vowels_arr', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'vowels_arr.html'))
})

app.get('/dyn_form', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dyn_form.html'))
})

app.get('/dyn_form_valid', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dyn_form_valid.html'))
})

app.get('/clock_dom', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'clock_dom.html'))
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер работает на порту: ${PORT}`);
})