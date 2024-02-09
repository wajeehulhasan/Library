import express from 'express';
import { create, bookie } from '../controller/controller.js';
import * as services from '../services/render.js';
const route = express.Router();

// API
route.post('/', create);
route.post('/add_book', bookie);


// Route get
route.get('/',services.register);
route.get('/book',services.bform);
route.get('/all_user',services.homesRoutes)
route.get('/all_book',services.bookRoutes)
export default route;