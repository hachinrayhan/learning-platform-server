const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(crs => crs.id === id);
    res.send(course);
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(crs => crs.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log('Server is running on port', port);
})