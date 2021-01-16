const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    Name: {
        type: String,
    },

    type: {
        type: String,
    },

    weight: {
        type: Number,
    },

    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    duration: {
        type: Number,
    },
});

db.workout.aggregate([
    {
        $addFields: {
            totalDuration: {$sum: "$duration"}
        }
    }
])

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;