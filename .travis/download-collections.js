const http = require('http');
const https = require('https');
const unzip = require('unzip');
const path = require('path');
const fs = require('fs');

const sources = {
  'conwaylife': 'http://www.conwaylife.com/patterns/all.zip'
}
const collectionsDir = '../patterns';

try {
  if (! fs.existsSync(collectionsDir)) {
    fs.mkdirSync(collectionsDir);
  }
  
  for (const collection in sources) {
    const url = sources[collection];
    const protocol = url.indexOf('https') === 0 ? https : http;
    protocol.get(url, function(response) {
      const { statusCode } = response;
    
      let error;
      if (statusCode !== 200) {
        error = new Error(`Request Failed: ${url}\n` +
                          `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        response.resume();
        process.exit(1);
      }
      
      const collectionDir = path.join(collectionsDir, collection);
      response.pipe(unzip.Extract({ path: collectionDir }));
    });
  }
  
}
catch (err) {
  console.error(err);
  process.exit(1);
}
