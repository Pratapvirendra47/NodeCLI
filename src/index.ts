import * as dotenv from 'dotenv';
import app from "./server";

/**
 * @name dotenv
 * @description dotenv was installed to access the env files to load the environment variables and used it in our code
 */
dotenv.config();

app.listen(3001, () => {
	console.log("Server running at http://localhost:3001");
})