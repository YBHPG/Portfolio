import express from 'express';
import path from 'path';
import { router } from './routes.js';
import { I18n } from 'i18n';
import cookieParser from 'cookie-parser';

const __dirname = path.resolve();
const adress = '127.0.0.1';
const port = 3000;

const app = express();

const i18n = new I18n({
    locales: ['en', 'ru'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    cookie: 'userLang'
});

app.use(cookieParser());
app.use(i18n.init);
app.use('/static', express.static(__dirname + '/static'));
app.use('/', router);
app.set('view engine', 'ejs');

/* ==================================================*/
/* START */

app.set('port', process.env.PORT || 7777);

app.listen(app.get('port'), () => {
    console.log(`Server is running at http://localhost:${app.get('port')}`);
});