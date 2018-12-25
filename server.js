import express from "express";
import fs from "fs";
import { join } from "path";

let app = express();

app.get("/events", (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    fs.readFile(join(`${__dirname}/mocks/events.json`), (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

app.get("/colors", (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    fs.readFile(join(`${__dirname}/mocks/colors.json`), (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

app.listen(3001, () => {
    console.info("Now listening on port 3001!")
});
