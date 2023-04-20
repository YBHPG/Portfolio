import Router from 'express';
import path from 'path';

export const router = Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

router.get('/ru', (req, res) => {
    res.sendFile(__dirname + '/static/html/index-ru.html');
});

router.get('/ru/work', (req, res) => {
    res.sendFile(__dirname + '/static/html/index-ru.html');
});

router.get('/ru/about', (req, res) => {
    res.sendFile(__dirname + '/static/html/about-ru.html');
});

router.get('/en', (req, res) => {
    res.sendFile(__dirname + '/static/html/index-en.html');
});

router.get('/en/work', (req, res) => {
    res.sendFile(__dirname + '/static/html/index-en.html');
});

router.get('/en/about', (req, res) => {
    res.sendFile(__dirname + '/static/html/about-en.html');
});

router.get('/love', (req, res) => {
    res.sendFile(__dirname + '/static/html/love.html')
});

router.get('/tiles-demo', (req, res) => {
    res.sendFile(__dirname + '/static/html/tiles-demo.html')
});

router.get('/love', (req, res) => {
    res.sendFile(__dirname + '/static/html/love.html')
});

router.get('/tiles-demo', (req, res) => {
    res.sendFile(__dirname + '/static/html/tiles-demo.html')
});

router.get('/i18-test', (req, res) => {
    console.log(res.__('header.work'));
    res.render(__dirname + '/static/html/index.ejs')
});
