// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.post("/api/questions", function(req, res) {
    console.log(req.body);
    res.send("heloo");
  });
};
