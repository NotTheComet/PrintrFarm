import * as path from 'path';
import * as fs from 'fs';

const nodes: string[] = [];

export function AddClient(data) {
	let dataparse = JSON.parse(data);

	const Entry = `{'id': ${dataparse.id}, 
								 'name': ${dataparse.name}, 
								 'typeofClient': ${dataparse.type}}`;
	nodes.push(Entry);
}