import bcrypt from "bcrypt";
import logger from "#config/logger.js";

export const hashPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (e) {
        logger.error(`Error hashing the password: ${e}`);
        throw new Error('Error hashing');
    }
};

export const createUser = async ({ name, email, password, role = 'user' }) => {
    try {
        const existingUser=db
    } catch (e) {
        logger.error(`Error creating the user: ${e}`);
        throw e;
    }
};
