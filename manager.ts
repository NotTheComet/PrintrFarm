import * as axios from 'axios';

let apikey = '';

let nodes: string[] = [];

enum urlPaths {
	serverInfo = '/api/server'
}

function AddNode(url: string) {
	let apiurl = url;
	
	let node = axios.create({
		baseURL: url,
		timeout: 1000,
		headers: {'X-Api-Key': `${apikey}`}
	}); 

	
}
