const path = require('path');
const fs = require('fs');

const collectionsDir = '../patterns';
const indexFile = '../index.json';
const index = [];

try {
    const collectionPaths = fs.readdirSync(collectionsDir);
    collectionPaths.forEach(collectionPath => {
        const collection = {};
        const contents = collection[path.parse(collectionPath).name] = [];
        index.push(collection);

        fs.readdirSync(path.join(collectionsDir, collectionPath)).forEach(file => {
            contents.push(path.parse(file).base);
        });
    });

    fs.writeFileSync(indexFile, JSON.stringify(index, ' ', 2));
}
catch (err) {
    console.error(err);
    process.exit(1);
}