if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
  
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require("express-session");
const cors = require('cors');
let {Holdings} = require('./Models/Holdings');
let {Positions} = require('./Models/Positions');
let {Watchlist} = require('./Models/WatchList');
let {Orders} = require('./Models/Orders');
let {Users} = require('./Models/Users');


const app = express();
const db_url = process.env.MONGO_URL;
const port = 3000;
app.listen(port,()=>{
    console.log(`app is listening on port : ${port}`)
});

const MongoStore = require('connect-mongo');

const sessionOptions = {
    secret: "Zerodha",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: db_url }),
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));


app.use(bodyParser.json());

app.use(cors({
    origin: true, // This will allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true,  // Allow credentials (cookies, sessions)
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow necessary headers
}));




app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());



mongoose.connect(db_url)
.then(()=>{console.log('Connected to DB');})
.catch(()=>{console.log('Error in Connecting to DB');});

app.use((req, res, next) => {
    res.locals.currUser = req.user;
    next();
  });

app.get("/",(req,res)=>{
    return res.send('ok');
})
app.get('/allHoldings',async (req,res)=>{
    const result = await Holdings.find();
    res.send(result);
})


app.get('/allPositions',async (req,res)=>{
    const result = await Positions.find();
    res.send(result);
});

app.get('/allWatchlist',async (req,res)=>{
    const result = await Watchlist.find();
    res.send(result);
})

app.post('/newOrder',async (req,res)=>{
    const order = new Orders({
        ...req.body
    });
    const result = await order.save();
    console.log(result);
});

app.post('/signUp',async (req,res)=>{
    console.log('signup');

    let { username, email, password } = req.body;
    let newUser = new Users({
        email: email,
        username: username,
    });
    try {
        let user = await Users.register(newUser, password);
        req.login(user, (err) => {
            if (err) {
                console.error("Login error:", err);
                return res.status(500).json({ message: "Failed to log in after signup" });
            }
            console.log("User logged in:", user);
            return res.json({ redirectURL: 'https://zerodhaclone-2-k6wb.onrender.com/login' });
        });
    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({ message: "Error during registration" });
    }
});

app.post("/login", (req, res, next) => {
    return passport.authenticate("local", (err, user, info) => {
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
            return res.json({
                success: true,
                message: 'Login successful',
                redirectURL: 'https://zerodhaclone-2-k6wb.onrender.com/',
                user : req.user,
            });
        });
        console.log(req.user);
    })(req, res, next);
});

app.get('/user',(req,res)=>{
    console.log('get user');
    const data = res.locals.user;
    console.log(data);
    res.json(data);
})


