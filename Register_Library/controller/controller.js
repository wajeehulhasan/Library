import Userdb from '../model/model.js';
import Book from '../model/book.js'

const create = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
    console.log('Received data:', req.body, name, email, phone, password);

    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty" })
        return;
    }

    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })

    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/all_user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while creating a create operation"
            })
        })
};

// const bookie = (req, res) => {
//     const users = req.body.users;
//     const book = req.body.book;
//     const author = req.body.author;
//     const date = req.body.date;

//     console.log('Received data:', req.body, users, book, author, date);

//     if (!req.body) {
//         res.status(400).send({ message: "content cannot be empty" })
//         return;
//     }

//     const booki = new Book({
//         users: req.body.users,
//         book: req.body.book,
//         author: req.body.author,
//         date: req.body.date,
//     })

//     booki
//         .save(booki)
//         .then(data => {
//             // res.send(data)
//             res.redirect('/all_book')
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "some error occur while creating a create operation"
//             })
//         })
// };

const bookie = (req, res) => {
    const users = req.body.users;
    const book = req.body.book;
    const author = req.body.author;
    const date = req.body.date;


    const bookInstance = new Book({
        book: book,
        author: author,
        date: date,
        users: users
    });


    bookInstance.save()
        .then(data => {
            res.redirect('/all_book');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a book."
            });
        });
};
export { create, bookie };