const express = require('express')

const nav = [
    {link:'./books', name:'Books'},
    {link:'./authors', name:'Authors'},
    {link:'./admin', name:'Add Book'}
];


const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}));

// Router Handlers
app.use('/books', booksRouter)
app.use('/authors', authorsRouter)
app.use('/admin', adminRouter)

app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('views',__dirname + '/src/views')

app.get('/', (req, res) => {
    res.render("index", {
        nav,
        title: 'Library App'
    })
})

app.listen(5050);