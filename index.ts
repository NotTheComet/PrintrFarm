import { Express } from 'express';
import * as http from 'http';
import * as path from 'path';

const port = 6000;
const app = express();

app.get('/', (req, res) => {
	 res.redirect('/dashboard');
});
function Listen() {
	http.createServer(app).listen(port);
	console.log(`Started server at ${port}`);
}
