const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.type('html');
    res.status(404);
    res.send('not found');
});

app.use((err, req, res) => {
    console.log(err);
    res.type('html');
    res.status(500);
    res.send('internal error');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
