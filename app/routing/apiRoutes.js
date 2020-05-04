var friends = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
        console.log("json response")
    });

    app.post("/api/friends", function(req, res){
        friends.push(req.body);
        res.json(friends[0]) 

        var topScore = 100;
        var score = 0;
        var topMatch = friends[0];

        for (var i in friends) {
            for (var j = 0; j <5; j++) {
                score += Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body.scores[j]));
            }
            if ((topScore > score) && (user.name != friends[i].name)) {
                topMatch = friends[i];
                topScore = score;
            }
            score = 0;
        }
        var 
    });

    app.post("/api/clear", function(req, res){
        friends.length = 0;

        res.json({ok: true});
    });
};


// const routes = require("/api/friends")
// const routes = require("/api/friends")

// app.get("/api/friends")
// app.post("/api/friends")

//read update and delete CRUD