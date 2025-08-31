const userServices = require('./user.services');

const registerUserController = async (req, res) => {
    try {
        const { fullname, username, password, email, phone, role, notes } = req.body;

        if(!username || !password || !fullname || !email || !phone || !role) {
            return res.status(400).json({
                error: 'campos obrigatórios incompletos'
            });
        }

        const newUser = await userServices.registerUser(fullname, username, password, email, phone, role, notes);
        if(newUser) {
            res.status(200).json({
                message: 'Usauário registrado com sucesso!',
                user: newUser
            });
        } else {
            res.status(400).json({
                error: 'O usuário já existe'
            })
        }

    } catch (error) {
        console.error(`Erro ao tentar registrar um usuário`);
        res.status(500).json(`Erro interno do servidor`);
    }
}

const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password) {
            return res.status(400).json({
                error: 'campos obrigatórios incompletos'
            });
        }

        const result = await userServices.login(username, password);

        res.status(200).json({
            message: 'Login realizado com sucesso!',
            user: result.user
        })

    } catch (error) {
        console.error(`Erro ao tentar logar na aplicação`);
        res.status(500).json(`Erro interno do servidor`);
    }
}

const getAllUsersController = async (req, res) => {
    try {
        const users =  userServices.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(`Erro ao acessar os usuários`);
        res.status(500).json(`Erro interno do servidor`);
    }
}

module.exports = {
    getAllUsersController,
    loginController,
    registerUserController
}