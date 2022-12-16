import express from 'express';
import path from 'path';
import { router } from './routes.js';

const __dirname = path.resolve();
const adress = '127.0.0.1';
const port = 3000;

const app = express();
app.use('/static', express.static(__dirname + '/static'));
app.use('/', router);

/* ==================================================*/
/* START */

app.set('port', process.env.PORT || 7777);

app.listen(app.get('port'), () => {
    console.log(`Server is running at http://${adress}:${app.get('port')}`);
});