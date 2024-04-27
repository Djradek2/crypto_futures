const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv');
var dbService = require('./dbService');
const { readFileSync } = require("fs");
const { Server } = require("socket.io");
const { createServer } = require("https");
var fs = require('fs');
env.config();

process.on('uncaughtException', function (e) {
    now = new Date();
    fs.appendFile('crashLog.txt', (Date() + ": " + e.toString() + "\n"), function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
    delete require.cache[require.resolve('./dbService')];
    dbService = require('./dbService');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

const httpsServer = createServer({
    key: readFileSync("privkey.pem"),
    cert: readFileSync("fullchain.pem"),
    ca: readFileSync("cert.pem"),
    requestCert: true,
    rejectUnauthorized: false,
    cors: {
        origin: "*",  //:4173
        methods: ["GET", "POST"],
      },
});

const io = new Server(httpsServer, {   //3001 is the port
//    key: readFileSync("./privkey.pem"),
//    cert: readFileSync("./fullchain.pem"),
//    ca: readFileSync('./cert.pem'),
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
    //console.log("someone connected")
    const db = dbService.getDbServiceInstance();
    try{
        const result = db.getAllData("30sec");
        result
        .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        socket.on("request30sec", () => {
            //console.log("someone requested")
            const db = dbService.getDbServiceInstance();
            const result = db.getAllData("30sec");
            result
            .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        });
        socket.on("request1min", () => {
            //console.log("someone requested")
            const db = dbService.getDbServiceInstance();
            const result = db.getAllData("1min");
            result
            .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        });
        socket.on("request2min", () => {
            //console.log("someone requested")
            const db = dbService.getDbServiceInstance();
            const result = db.getAllData("2min");
            result
            .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        });
        socket.on("request3min", () => {
            //console.log("someone requested")
            const db = dbService.getDbServiceInstance();
            const result = db.getAllData("3min");
            result
            .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        });
        socket.on("request5min", () => {
            //console.log("someone requested")
            const db = dbService.getDbServiceInstance();
            const result = db.getAllData("5min");
            result
            .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        });
        socket.on("request10min", () => {
            //console.log("someone requested")
            const db = dbService.getDbServiceInstance();
            const result = db.getAllData("10min");
            result
            .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        });
        socket.on("request15min", () => {
            //console.log("someone requested")
            const db = dbService.getDbServiceInstance();
            const result = db.getAllData("15min");
            result
            .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        });
        socket.on("request30min", () => {
            //console.log("someone requested")
            const db = dbService.getDbServiceInstance();
            const result = db.getAllData("30min");
            result
            .then(data => socket.emit("dataSent", data.slice(data.length-10,data.length).reverse()))
        });
    } catch{}
});

httpsServer.listen(3001);

// app.listen(process.env.SERVER_PORT, () => console.log('server online'));
