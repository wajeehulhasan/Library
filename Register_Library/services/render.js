import Userdb from "../model/model.js";
import Book from "../model/book.js";

export const homesRoutes = (req, res) => {
    Userdb.find()
        .then(users => {
            res.render('all_user', { users });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while retrieving users"
            })
        });

};


// export const bookRoutes = (req, res) => {
//     Book.find()
//     .then(books => {
//         res.render('all_book', { books });
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message || "some error occur while retrieving users"
//         })
//     });

// };

const bookRoutes = (req, res) => {
    Book.find()
        .populate('users')
        .then(books => {
            res.render('all_book', { books });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving books."
            });
        });
};
export { bookRoutes };

export const register = (req, res) => {
    res.render('index');

};

export const bform = (req, res) => {
    // 

    Userdb.find()
        .then(users => {
            res.render('book', { users });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while retrieving users"
            })
        });



};