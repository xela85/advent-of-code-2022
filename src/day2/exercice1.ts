import * as fs from 'fs';
const file = fs.readFileSync('file.txt', 'utf-8');

const solutionMap: { [string: string]: number } = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6,
}

const res = file.split('\n').map(str => solutionMap[str]).reduce((a, b) => a + b, 0);
console.log(res);