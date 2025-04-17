import express from 'express';
import router from './routes/songs.routes.js';
import pageRouter from './routes/pug.routes.js';

const app = express();
app.set('view engine', 'pug');
app.set('views','src');

app.use("/", router,pageRouter);

const PORT = 8002;
app.listen(PORT, () => console.log(`Starting server - http://localhost:${PORT}`));