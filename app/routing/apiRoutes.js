const friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //post to api
    app.post("/api/friends", function(req, res) {
        let appAns = (req.body).scores;
        let friendName = "";
        let friendPhoto = "";
        let difference =0;

        for (let i = 0; i<friends.length; i++) {
            let tempVal = 0;
            for (let j=0; j<appAns.length;j++) {
                difference += Math.abs(friends[i].scores[j] - appAns[j]);
            }

            if (tempVal < difference){
                difference = tempVal;
                friendName = friends[i].name;
                friendPhoto = friends[i].photo;
            }
        }

        friends.push(req.body);
        res.json({name: friendName, photo: friendPhoto});
    });
};