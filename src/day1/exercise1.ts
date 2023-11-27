import { group } from 'console';
import * as fs from 'fs';

const file = fs.readFileSync('file.txt', 'utf-8');

const groups = file.split('\n\n');

const res = groups.map(lines => {
    const numbers = lines.split('\n').map(str => Number(str));
    const groupSum = numbers.reduce((a, b) => a + b);
    return groupSum;
});

const top = res.sort().reverse().slice(0, 3).reduce((a, b) => a + b);


console.log(top);