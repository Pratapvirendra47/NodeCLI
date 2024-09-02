import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createNewUser, signIn } from './handlers/user';
// Make an api
const app = express();

const customLogger = (message) => (req, res, next) => {
	console.log("Hello from ", message);
	next();
}

/**
 * @name Middleware
 * @description Middleware applied at the global level of application it will before running the handlers
 */

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/**
 * @name Custom Middleware
 * @description Any request registered after this custom middleware will have the access to req object which contains sshhh_secret
 */

// app.use((req, res, next) => {
// 	res.status(401);
// 	res.send("Nope !!");
// })

// app.use(customLogger('custom logger'));

app.get('/', (req, res) => {
	console.log("hello from the express");
	res.status(200);
	res.json({ message: "hello from the server !!" });
})

app.use('/api', protect, router);

app.post('/user', createNewUser);
app.post('/signin', signIn);

export default app;