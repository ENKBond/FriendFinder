const friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //post to api
    app.post("/api/friends", function(req, res) {
        let friend = req.body;
        let match = {
            name: "",
            photo: "",
            scoreDiff: 0
        };
        let difference =0;
        for (let i = 0; i<friends.length; i++) {
            let currentFriend = friends[i];
            for (let j=0; j<currentFriend.scores.length;j++) {
                difference += Math.abs(currentFriend.scores[j] - parseInt(friend.scores[j]));
            }

            if (match.scoreDiff < difference){
                match.name = currentFriend.name;
                match.photo = currentFriend.photo;
                match.scoreDiff = difference;
            }
        }

        friends.push(match);
        res.json(match);
    });
};