const express = require('express');
const request = require('request');
const app = express();

app.use('/', (req, res) => {
    const url = 'https://www.google.com' + req.url;
    req.pipe(request(url)).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
