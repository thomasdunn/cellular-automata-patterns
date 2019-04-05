const fs = require('fs');
const file = process.argv[process.argv.length-1];
const stats = fs.statSync(file);
const size = parseInt(stats['size'], 10);
const minFileSize = 50000;
const pass = size >= minFileSize;
if (! pass) {
  console.error(`FILE_TOO_SMALL - file '${file}' ${size} bytes < min size (${minFileSize} bytes)`);
}
process.exit(+!pass);
