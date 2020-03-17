const fs = require('fs');
const sharp = require('sharp');

module.exports = (id) => {
    const readStream = fs.createReadStream('gs.png');

    const reducedId = id % 254;

    const column = reducedId % 10;
    const row = Math.floor(reducedId / 10);

    const transform = sharp();

    transform.extract({
        width: 56,
        height: 56,
        top: 18 + (row * 188),
        left: 1 + (column * 171)
    });

    return readStream.pipe(transform);
}