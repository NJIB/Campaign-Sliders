// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config();
const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();

const PORT = process.env.PORT || 8082;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
// ===============================
require('./routes/html-routes')(app);

// =============================================================
async function startup() {

  await app.listen(PORT);
  console.log('----------------------------');
  console.log(`WEB SERVER LISTENING ON: http://localhost:${PORT}`);
}

startup();

