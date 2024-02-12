import mongoose, { Schema } from "mongoose";

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    owner: {
        type: String,
        require: true
    },
    race: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true
    },
    keeper: {
        type: Schema.ObjectId, 
        unique: true,
        lowerCase: true,
        require: true,
        ref: 'user'
    }
})

export default mongoose.model('animals', animalSchema)