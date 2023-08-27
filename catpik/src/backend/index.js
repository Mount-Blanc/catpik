const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;
const authRoute= require('./routes/authRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));


app.route('/login',authRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });