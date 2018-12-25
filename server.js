import fs from "fs";
import { join } from "path";

import cors from "cors";
import express from "express";

let app = express();

function stopServer() {
    server.close(() => {
        process.exit(0);
        console.info("Server stopping...")
    });
}

app.use(cors());

app.get("/events", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Encoding", "gzip");

    fs.readFile(join(`${__dirname}/mocks/events.json.gz`), (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

app.get("/colors", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Encoding", "gzip");

    fs.readFile(join(`${__dirname}/mocks/colors.json.gz`), (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

const server = app.listen(3001, () => {
    console.info("Now listening on port 3001!")
});

// Ensure we shut down our server once we exit out
process.on('SIGTERM', stopServer);
process.on('SIGINT', stopServer);
