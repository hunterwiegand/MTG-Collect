const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
// Route requires
const routes = require('./routes')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Sessions
app.use(
	session({
		secret: 'sad-stone', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser



// Routes
app.use(routes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, 'client/build')))

	app.get("*", (req,res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	})
};



// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});