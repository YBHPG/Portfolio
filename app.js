import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';
import https from 'https';

const __dirname = path.resolve();
const adress = '127.0.0.1';
const httpPort = 8080;
const httpsPort = 8443;

const cert = fs.readFileSync('./ssl/certificate.crt');
const ca = fs.readFileSync('./ssl/ca_bundle.crt');
const privateKey = fs.readFileSync('./ssl/private.key');

const app = express();

const httpOptions = {
    cert: cert,
    ca: ca,
    key: privateKey
};
const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpOptions, app);

app.use('/static', express.static(__dirname + '/static'));
app.use((req, res, next) => {
    if (req.protocol === 'http') {
        res.redirect(301, `https://${adress}:${httpsPort}`);
    } else {
        next();
    }
});

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

httpServer.listen(httpPort, adress, () => {
    console.log(`Server is running at http://${adress}:${httpPort}`);
});
httpsServer.listen(httpsPort, adress, () => {
    console.log(`Server is running at https://${adress}:${httpsPort}`);
});
