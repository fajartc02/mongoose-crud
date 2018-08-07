const router = require('express').Router()
const { createBook, readBooks, updateBook, deleteBook } = require('../controllers/controllerBooks')

router.post('/', createBook)
router.get('/', readBooks)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)


module.exports = router