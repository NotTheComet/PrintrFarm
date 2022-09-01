import express from 'express';
import * as path from 'path';
import * as os from 'os';

const app = express();

app.get('/', (req, res) => { res.redirect('/dashboard');});

app.get('/dashboard', (req, res) => {
	res.sendFile(path.join(os.homedir + 'PrintrFarmServer' + '/html/dashboard.html'));
});

app.listen(() => {
  console.log('Server started');
});
