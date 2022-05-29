import express from 'express';
import path from 'path';
import fs from 'fs';
import https from 'https';

const __dirname = path.resolve();
const adress = '194.169.160.214';
const port = 80;

const cert = fs.readFileSync('./ssl/certificate.crt');
const ca = fs.readFileSync('./ssl/ca_bundle.crt');
const privateKey = fs.readFileSync('./ssl/private.key');

const httpOptions = {
    cert: cert,
    ca: ca,
    key: privateKey
};

const app = express();
const httpsServer = https.createServer(httpOptions, app);

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

app.get('/.well-known/pki-validation/4ABA000B996255A60A39992EA1D7CC5C.txt', (req, res) => {
    res.sendFile(__dirname + '/static/txt/4ABA000B996255A60A39992EA1D7CC5C.txt');
});

app.get('/.well-known/4ABA000B996255A60A39992EA1D7CC5C.txt', (req, res) => {
    res.sendFile(__dirname + '/static/txt/4ABA000B996255A60A39992EA1D7CC5C.txt');
});

/* ==================================================*/
/* START */

httpsServer.listen(port, adress, () => {
    console.log(`Server is running at https://${adress}:${port}`);
});
