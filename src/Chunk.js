import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'

import fs from 'node:fs'
import path from 'node:path'


async function splitDoc(){
  const filePath = path.join('/home/devp-sriram/scrimba/mistral-ai/chat-app/src/', 'data.txt');
  const data = fs.readFileSync(filePath, 'utf8');

  const spliter = new RecursiveCharacterTextSplitter({
    chunkSize :250,
    chunkOverlap : 40,
  }) 

  const result  = await spliter.createDocuments([data]);
  console.log(result);
}

splitDoc();

