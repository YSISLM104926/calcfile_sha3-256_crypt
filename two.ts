import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

function computeSHA3_256(filePath: string): string {
    const fileBuffer: Buffer = fs.readFileSync(filePath);
    const hash = crypto.createHash('sha3-256').update(fileBuffer).digest('hex');
    return hash
}


const dirPath: string = './task2';
const files: string[] = fs.readdirSync(dirPath);

if (files.length !== 256) {
    console.error('Expected 256 files but found:', files.length);
    process.exit(1);
}


let hashes: string[] = files.map((file: string): string => {
    const filePath: string = path.join(dirPath, file);
    return computeSHA3_256(filePath);
});


hashes.sort();



const concatenatedHashes: string = hashes.join('');


const email: string = 'likhon15-3916@diu.edu.bd'.toLowerCase();
const finalString: string = concatenatedHashes + email;
const finalHash: string = crypto.createHash('sha3-256').update(finalString).digest('hex');

console.log(finalHash)

