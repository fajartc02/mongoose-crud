const router = require('express').Router()
const booksRouter = require('./books')
const transactionsRouter = require('./transactions')
const customerRouter = require('./customers')

router.use('/books', booksRouter)
router.use('/customers', customerRouter)
router.use('/transactions', transactionsRouter)

router.get('/', (req, res) => {
    // console.log('connect routes');
})


module.exports = router