import express from 'express';
import path from 'path';
import mongodb from 'mongodb';

const __dirname = path.resolve();
const adress = '127.0.0.1';

const app = express();
app.use('/static', express.static(__dirname + '/static'))

/* ==================================================*/
/* GETTERS */

app.get('/', async (req, res) => {
    const projects = await loadProjects().find({}).toArray();
    res.send(await projects.find({}).toArray());
});

/* ==================================================*/
/* START */

app.set('port', process.env.PORT || 7777);

app.listen(app.get('port'), () => {
    console.log(`Server is running at http://${adress}:${app.get('port')}`);
});

async function loadProjects() {
    const client = await mongodb.MongoClient.connect('mongodb://admin:161100@localhost:27017/portfolioProjects?authMechanism=DEFAULT', { useNewUrlParser: true });

    return client.db('portfolioProjects').collection('workProjects');
}