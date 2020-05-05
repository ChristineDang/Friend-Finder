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

        //parseInt not working, choices still turning into objects in an array
            //I think this is causing Ahmed to keep popping up as the friend recommendation
        for (var i in friends) {
            // for (var j = 0; j < 5; j++) {
            //     score += Math.abs(parseInt(friends[i].score[j]) - parseInt(req.body.score[j]));
            // }
            for (var j = 0; j < 5; j++) {
                score += Math.abs(Number(friends[i].score[j]) - Number(req.body.score[j]));
            }
            if ((topScore > score)) {
                topMatch = friends[i];
                topScore = score;
            }
            score = 0;
        }
    });

    app.post("/api/clear", function(req, res){
        friends.length = 0;

        res.json({ok: true});
    });
};

//Previous test method before using past activities as a guide for this assignment
    // const routes = require("/api/friends")
    // const routes = require("/api/friends")

    // app.get("/api/friends")
    // app.post("/api/friends")

    //read update and delete CRUD