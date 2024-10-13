if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require("express-session");
const cors = require('cors');
let { Holdings } = require('./Models/Holdings');
let { Positions } = require('./Models/Positions');
let { Watchlist } = require('./Models/WatchList');
let { Orders } = require('./Models/Orders');
let { Users } = require('./Models/Users');

const app = express();
const db_url = process.env.MONGO_URL;
const port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port : ${port}`);
});

const MongoStore = require('connect-mongo');

const sessionOptions = {
    secret: "Zerodha",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: db_url }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'Lax', 
    },
};

app.use(session(sessionOptions));

app.use(bodyParser.json());

app.use(cors({
    origin: true,  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,  
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

mongoose.connect(db_url)
    .then(() => { console.log('Connected to DB'); })
    .catch(() => { console.log('Error in Connecting to DB'); });


app.use((req, res, next) => {
    res.locals.currUser = req.user;
    next();
});


app.get("/", (req, res) => {
    return res.send('ok');
});

app.get('/allHoldings', async (req, res) => {
    const result = await Holdings.find();
    res.send(result);
});

app.get('/allPositions', async (req, res) => {
    const result = await Positions.find();
    res.send(result);
});

app.get('/allWatchlist', async (req, res) => {
    const result = await Watchlist.find();
    res.send(result);
});

app.post('/newOrder', async (req, res) => {
    const order = new Orders({
        ...req.body
    });
    const result = await order.save();
    console.log(result);
});

app.post('/signUp', async (req, res) => {
    console.log('signup');

    let { username, email, password } = req.body;
    let newUser = new Users({
        email: email,
        username: username,
    });
    console.log('signup');
    try {
        let user = await Users.register(newUser, password);
        return res.json({ redirectURL: 'https://zerodhaclone-2-k6wb.onrender.com/login' });
    } catch (error) {
        console.error("Registration error:", error);
        console.log(error);
        return res.status(500).json(error);
    }
});

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.error("Authentication error:", err);
            return res.status(500).json({ message: "Internal server error during authentication" });
        }
        if (!user) {
            return res.status(401).json({
                success: false,
                message: info?.message || 'Login failed',
            });
        }
        req.logIn(user, (err) => {
            if (err) {
                console.error("Login error:", err);
                return res.status(500).json({ message: "Failed to log in user" });
            }
            console.log(`logged in ${req.user.username}`);
            console.log("Session ID:", req.sessionID);  // Debugging session ID
            console.log("Session Data:", req.session);  // Debugging session data
            return res.json({
                success: true,
                message: 'Login successful',
                user: req.user,
                redirectURL: "https://zerodhaclone-2-k6wb.onrender.com/"
            });
        });
    })(req, res, next);
});

// Route to get logged-in user
app.get('/user', (req, res) => {
    console.log('Request Cookies:', req.cookies);  // Logs all cookies in the request
    console.log('Session ID:', req.sessionID);  // Logs session ID on server side
    console.log('Session Data:', req.session);  // Logs session details, including user

    if (!req.session || !req.session.passport || !req.session.passport.user) {
        console.log('User not logged in');
        return res.status(401).json({ message: 'User not logged in' });
    }

    console.log('Logged in user:', req.session.passport.user);
    res.json(req.user);  // Send user session data
});

app.get('/someRoute', (req, res) => {
    if (!res.locals.currUser) {
        return res.status(401).json({ message: 'User not logged in' });
    }

    const loggedInUser = res.locals.currUser;
    res.json({ message: 'Success', user: loggedInUser });
});
