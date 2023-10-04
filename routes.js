import Router from 'express';
import path from 'path';

export const router = Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

router.get('/love', (req, res) => {
    res.sendFile(__dirname + '/static/html/love.html')
});

router.get('/tiles-demo', (req, res) => {
    res.sendFile(__dirname + '/static/html/tiles-demo.html')
});

router.get('/work', (req, res) => {
    res.render(__dirname + '/static/html/work.ejs')
});

router.get('/about', (req, res) => {
    res.render(__dirname + '/static/html/about.ejs')
});