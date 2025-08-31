const dataUsers = require('../../config/data.users');
const bcrypt = require('bcrypt');
let idUser = 4; // para simular o autoincremento no id quando criar um Usuário novo.

const JWT_SECRET = process.env.JWT_SECRET;

const getAllUsers = () => {
    return dataUsers;
}

const registerUser = async (fullname, username, password, email, phone, role, notes) => {
    try {
        if(!username || !password || !fullname || !email || !phone || !role){
            console.error(`Usuário, senha, nome, email, telefone e cargo são obrigatórios.`);
            return;
        }
        if(password.leght < 6){
            console.error(`A senha deve ter no mínimo 6 dígitos`);
            return;
        }
        const userExists = dataUsers.find((user) => user.email === email);
        if(userExists) {
            console.error(`Já existe um usuário com o email informado.`);
            return;
        }
        const usernameExists = dataUsers.find((user) => user.username === username);
        if(usernameExists) {
            console.error(`O nome de usuário não está disponível.`);
            return;
        }

        // criptografando a senha
        const cryptPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: ++idUser,
            fullname,
            username,
            password: cryptPassword,
            email,
            phone,
            notes
        };

        dataUsers.push(newUser);
        console.log(`Usuário cadastrato com sucesso.`);

        return newUser;

    } catch (error) {
        console.error(`Erro ao cadastrar o usuário.`);
    }
}

const login = async (username, password) => {
    try {
        if(!username || !password){
            console.error(`Usuário e senha são obrigatórios.`);
            return;
        }

        const user = dataUsers.find((user) => user.username === username);
        if(!user) {
            console.error(`Usuário não encontrado!`);
            return;
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            console.error(`Senha inválida!`);
            return;
        }

        return user;

    } catch (error) {
        console.error(`Erro ao fazer login da aplicação!`);
    }
}

module.exports = {
    getAllUsers,
    login,
    registerUser
}