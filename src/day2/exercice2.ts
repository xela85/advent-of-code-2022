import * as fs from 'fs';
const file = fs.readFileSync('file.txt', 'utf-8');

const solutionMap: { [string: string]: number } = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7,
}

const res = file.split('\n').map(str => solutionMap[str]).reduce((a, b) => a + b, 0);
console.log(res);