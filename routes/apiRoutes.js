const router = require("express").Router();

const Workout = require("../public/models/Workout.js");

router.get("/api/workouts", (req, res) => {

    Workout.find().then((workout) => {

        res.json(workout);

    }).catch((err) => {

        res.status(500).json(err);

    });
});

router.put("/api/workouts/:id", (req, res) => {

    Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: { exercises: req.body }
        },
        { new: true }).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });


});

router.post("/api/workouts", (req, res) => {

    Workout.create(req.body).then((workout) => {

        res.json(workout);

    }).catch((err) => {

        res.status(500).json(err);

    });

});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(workout => {

            res.json(workout);

        }).catch((err) => {

            res.status(500).json(err);

        })
});

module.exports = router;