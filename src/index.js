const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send ('API Funcionando!!!');
});

module.exports = app;
