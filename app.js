import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';
import https from 'https';

const __dirname = path.resolve();
const adress = 'vladl.space';
const httpPort = 80;
const httpsPort = 443;

const app = express();
const httpsOptions = {
    ca: fs.readFileSync('./ssl/ca_bundle.crt'),
    cert: fs.readFileSync('./ssl/certificate.crt'),
    key: fs.readFileSync('./ssl/private.key')
};
const httpServer = http.createServer(httpPort, app);
const httpsServer = https.createServer(httpsPort, app, httpsOptions);
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

/* ==================================================*/
/* START */

<<<<<<< Updated upstream
app.listen(port, () => {
    console.log(`Server is running at http://${adress}:${port}`);
});
=======
httpsServer.listen(port, adress, () => {
    console.log(`Server is running at https://${adress}:${port}`);
});
>>>>>>> Stashed changes
