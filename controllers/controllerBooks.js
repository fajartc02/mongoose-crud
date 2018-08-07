const Book = require('../models/modelBook') 
var mongoose = require('mongoose');



module.exports = {
    createBook: (req, res) => {
        let newBook = req.body
        // console.log(newBook);
        Book.create(newBook)
        .then((book) => {
            res.status(201).json({
                message: 'Success to added book',
                data: book
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'failed to adeded book',
                err: err.message
            })
        })
    },

    readBooks: (req, res) => {
        Book.find()
        .then((books) => {
            res.status(201).json({
                message: 'Success To read data',
                data: books
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to read data',
                err: err.message
            })
        })
    },

    updateBook: (req, res) => {
        let id = mongoose.Types.ObjectId(req.params.id);
        Book.updateOne( { _id: id }, { title: req.body.title })
        .then((data) => {
            res.status(201).json({
                message: 'Success To update book',
                data: data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to update book',
                err: err.message
            })
        })
    },

    deleteBook: (req, res) => {
        let id = mongoose.Types.ObjectId(req.params.id)
        Book.deleteOne({_id: id})
        .then(() => {
            res.status(201).json({
                message: 'success to delete book',
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'failed to delete book'
            })
        })
    }
}