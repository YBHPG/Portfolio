import express from 'express';
import path from 'path';

const __dirname = path.resolve();
<<<<<<< Updated upstream
const adress = '0.0.0.0';
const port = 8080;
=======
const adress = '127.0.0.1';
const port = 80;
>>>>>>> Stashed changes

const app = express();
app.use('/static', express.static(__dirname + '/static'))

/* ==================================================*/
/* GETTERS */

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/ru', (req, res) => {
    res.sendFile(__dirname + '/static/html/index-ru.html');
});

app.get('/ru/work', (req, res) => {
    res.sendFile(__dirname + '/static/html/index-ru.html');
});

app.get('/ru/about', (req, res) => {
    res.sendFile(__dirname + '/static/html/about-ru.html');
});

app.get('/en', (req, res) => {
    res.sendFile(__dirname + '/static/html/index-en.html');
});

app.get('/en/work', (req, res) => {
    res.sendFile(__dirname + '/static/html/index-en.html');
});

app.get('/en/about', (req, res) => {
    res.sendFile(__dirname + '/static/html/about-en.html');
});

app.get('/.well-known/pki-validation/4ABA000B996255A60A39992EA1D7CC5C.txt', (req, res) => [
    res.sendFile(__dirname + '/static/txt/4ABA000B996255A60A39992EA1D7CC5C.txt')
])

/* ==================================================*/
/* START */

app.listen(port, adress, () => {
    console.log(`Server is running at http://${adress}:${port}`);
});