const express = require('express');
const crop = require('./crop');

const port = process.env.PORT || 3000;
const server = express();

server.get("/:id/avatar.png", (req, res) => {
    const intId = parseInt(req.params.id);

    if (isNaN(intId)) {
        res.json({});
        return;
    }

    res.type('image/png');
    crop(parseInt(intId)).pipe(res);
 });

 server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});