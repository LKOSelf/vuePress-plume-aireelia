import { Dir } from "./path.js";
import path from 'path';
import fs from 'fs';

export default function noteInfo(){
const noteGrandDir = path.join(Dir.grandParentDir, 'notes');
const grandFile = fs.readdirSync(noteGrandDir);

let data = { title: [] }
for(const md of grandFile){
    if(md != 'README.md'){
        data["title"].push(md)
    }
}
return data;
}
