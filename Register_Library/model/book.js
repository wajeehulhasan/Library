import mongoose from "mongoose";

const schema = new mongoose.Schema({
    users: {
        type: [String], 
        required: true,
    },
    book: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    },
});

const Book = mongoose.model('Book', schema);
export default Book;


