import express from 'express';
import * as path from 'path';

const app = express();

app.get('/', (req, res) => { res.redirect('/dashboard');});

app.get('/dashboard', (req, res) => {
	res.
});

app.listen(() => {
  console.log('Server started');
});
