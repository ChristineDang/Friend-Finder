const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('It works!');
});
router.get('../public/survey.html', (req, res) => {
  res.send('This is the Survey!');
});
module.exports = router;


// app.get()

//react.js vs express.js
// app.start()