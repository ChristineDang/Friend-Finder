var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
// const app = require('./app/data/friends');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// const server = app.listen(3000, () => {
//   console.log(`Express is running on port ${server.address().port}`);
// });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});