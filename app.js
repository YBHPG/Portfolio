import express from 'express';
import path from 'path';
import { router } from './routes.js';
import { I18n } from 'i18n';
import cookieParser from 'cookie-parser';

const __dirname = path.resolve();
const port = process.env.PORT || 3000;

const app = express();

const i18n = new I18n({
    locales: ['en', 'ru'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    cookie: 'userLang',
});

app.use(cookieParser());
app.use(i18n.init);
app.use('/static', express.static(__dirname + '/static'));
app.use('/', router);
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});