const express = require('express'),
    router = express.Router();

const bcrypt = require('bcrypt');

const lastSession = 0;
const loginData = {};

router.get("/lilypad", (req, res) => {
    const cookies = req.cookies;
    res.cookie('number', cookies.number ? Number(cookies.number) + 1 : 1);
    res.render("lilypad", {
        number: cookies.number || 0,
        name: cookies.name
    });
});

router.get("/clear", (req, res) => {
    res.clearCookie('number');
    res.redirect("/lilypad");
});

router.get("/name", (req, res) => {
    res.render("newFrog");
});

router.get("/frogs/login", (req, res) => {
    res.render('loginFrog');
});

router.post("/frogs/login", (req, res) => {
    const userName = req.body.name;
    const password = req.body.password;
    const userInfo = loginData[userName];
    if (!userInfo) {
        res.send("no such user");
    } else {
        const userHash = loginData[userName].hashedPassword;

        console.log('in frogs/login');

        if (userHash) {
            bcrypt
                .compare("myPlaintextPassword", userHash)
                .then(function(result) {
                    console.log("compare result:");
                    console.log(result);
                    loginData[userName].sessionID = lastSession++;
                    res.clearCookie('number');
                    res.clearCookie('name');
                    res.cookie('frogSessionID', loginData[userName].sessionID);
                    res.cookie('name', userName);
                    res.send('logged in');
                });
        } else {
            res.send('user unknown');
        }
    }
});

router.get("/frogs/new", (req, res) => {
    console.log('hitting this');
    res.render('newFrog');
});

router.post("/frogs/new", (req, res) => {
    console.log('registering new frog');
    const userName = req.body.name;
    const password = req.body.password;
    bcrypt
        .hash(password, 10)
        .then(function(hash) {
            const userRecord = loginData.userName || {};
            userRecord.hashedPassword = hash;
            loginData[userName] = userRecord;
            loginData[userName].sessionID = lastSession++;

            console.log(req.cookies);
            console.log("loginData:");
            console.log(loginData);

            res.clearCookie('number');
            res.clearCookie('name');

            res.cookie('frogSessionID', loginData[userName].sessionID);
            res.send("received");
        });
});

module.exports = router;