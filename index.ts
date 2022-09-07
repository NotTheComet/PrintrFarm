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

app.get('/nodes/:node/:req/:data', (req, res) => {
	let params = req.params;
	
	let node = req.params.node;
	//let ip = req.params.ip; 
	let request = req.params.req;
	let data = req.params.data;
	
	if (requestValues.includes(request)) {
		if (request == 'init') {
		
		}
		if (request == 'jobs') {
		
		}
		if (request == 'info') {
		
		}
	}
});

app.listen(() => {
  console.log('Server started');
});
