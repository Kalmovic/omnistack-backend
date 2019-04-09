const Box = require('../models/Box');  // Importa o model de Box

class BoxController {
    // Permitir que o user crie novas Boxes/pastas dentro da aplicação
    async store(req, res) {
        const box = await Box.create({ title: req.body.title });

        return res.json(box);
    }

    async show(req, res) {
        //retorna a box e todos os métodos nessa box
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {
                sort: {
                    createdAt: -1   // Decrescente
                }
            }
        });

        return res.json(box);
    }
}

module.exports = new BoxController();   // Usamos o new para retornar a instância da classe, e não a classe
                                        // Asism podemos acessar os métodos da classe