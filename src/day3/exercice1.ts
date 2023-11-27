import * as fs from 'fs';
const file = fs.readFileSync('file.txt', 'utf-8');
const lines = file.split('\n');