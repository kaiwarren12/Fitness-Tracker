const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    weight: {
        type: Number,
        required: true,
    },

    sets: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
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