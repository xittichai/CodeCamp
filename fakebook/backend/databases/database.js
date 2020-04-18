const fs = require('fs');

const get = (fullFilePath, encoding = 'utf8') => fs.readFile(fullFilePath, encoding, (error, jsonString) => {
    if (error) {
        console.log('File read failed:', error);
        return;
    }
    console.log('File data:', jsonString);
});

module.exports = get;