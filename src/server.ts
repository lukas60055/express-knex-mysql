import express from 'express';
import router from './routes/index';
import websites from './routes/websites';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.set('port', port);

app.use(express.json());
app.use(express.urlencoded());

app.use(router);
app.use('/api/websites', websites);
app.use('*', (req, res) => res.send(404));

app.listen(app.get('port'), () => {
  console.log(`Listening on ${port}`);
});
