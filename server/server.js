import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from "../src/app";

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);

            return res.status(500).send('An error occurred');
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${renderToString(<App/>)}</div>`)
        )
    });
});

app.listen(PORT, () => {
    console.log(`listening on ${3000}`);
});
