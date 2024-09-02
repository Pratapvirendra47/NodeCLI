import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


/**
 * @function comparePassoword
 * @param password 
 * @description This password is complete text which is compared to the password that is stored in a database which is hashed
 */
export const comparePassoword = (password, hash) => {
	return bcrypt.compare(password, hash); //returns a promise i.e. TRUE or FALSE
}

/**
 * 
 * @param password 
 * @returns hashed password
 */
export const hashPassowrd = (password) => {
	return bcrypt.hash(password, 5) // 2nd variable is basically called a salt it gives you variety of inout that make people harder to guess
}

export const createJWT = (user) => {
	const token = jwt.sign({
		id: user.id,
		username: user.username
	}, process.env.JWT_SECRET);
	return token;
}

export const protect = (req, res, next) => {
	const bearer = req.headers.authorization;
	if (!bearer) {
		res.status(401);
		res.json({ message: "Not authorized" });
		return;
	}

	// Reason to split in empty space because it want my token to be Bearer qweqwedsfjkhsdkjfh jks
	// value will be store in token
	const [, token] = bearer.split(" ");
	if (!token) {
		res.status(401);
		res.json({ message: "Not a valid token" });
		return;
	}

	/**
	 * try and catch to verify the token using JWT secret
	 */
	try {
		const user = jwt.verify(token, process.env.JWT_SECRET);
		req.user = user;
		next();
	} catch (e) {
		console.error("Error: ", e);
		res.send(401);
		res.json({ message: "Not a valid token" });
		return;
	}
}