import prisma from "../db";
import { comparePassoword, createJWT, hashPassowrd } from "../modules/auth";

export const createNewUser = async (req, res) => {
	const user = await prisma.user.create({
		data: {
			username: req.body.username,
			password: await hashPassowrd(req.body.password)
		}
	})
	const token = createJWT(user);
	res.json({ token });
}

export const signIn = async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			username: req.body.username
		}
	})
	const isValid = await comparePassoword(req.body.password, user.password);
	if (!isValid) {
		res.status(401);
		res.json({ message: "Nope" });
		return;
	}

	const token = createJWT(user);
	res.json({ token });

}