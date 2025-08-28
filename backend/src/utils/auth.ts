import bcrypt from 'bcrypt'

export const hashPassword = async (password : string) => {
    try {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    } catch (error) {
        console.log(`Error while hashing password ${error}`)
        return password
    }
}

export const checkPassword = async (enteredPassword: string , hash: string) => {
    const result = await bcrypt.compare(enteredPassword,hash)
    return result;
}