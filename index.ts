import express from 'express';
import * as path from 'path';
import * as os from 'os';

const app = express();

enum Validrequest {
	init = 'init',
	job = 'job',
  info = 'info'
}
const requestValues = Object.values(Validrequest);

app.get('/', (req, res) => { res.redirect('/dashboard');});

app.get('/dashboard', (req, res) => {
	res.sendFile(path.join(os.homedir + '/PrintrFarmServer' + '/html/dashboard.html'));
	console.log(req.ip, 'conneted to Dashboard');
});

app.listen(() => {
  console.log('Server started');
});
