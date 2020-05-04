var path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
      
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

    };
    
// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('It works!');
// });
// router.get('../public/survey.html', (req, res) => {
//   res.send('This is the Survey!');
// });
// module.exports = router;


// app.get()

//react.js vs express.js
// app.start()