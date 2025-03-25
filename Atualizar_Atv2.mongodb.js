const database = 'BD3-NoSQL-AtlasMongoDB'; 

use (database)

db['bd3-nosql-atv2'].updateOne(
    { "cod_aluno": 1 },  // Critério de busca pelo código do aluno
    {
        $set: {  // Operador $set para atualizar todos os campos
            "cod_turma": 201,
            "nome": "Novo Nome do Aluno",
            "cpf": "999.999.999-99",
            "rg": "99.999.999-9",
            "telefone_aluno": "(99) 99999-9999",
            "telefone_responsavel": "(99) 98888-8888",
            "email": "novo.email@escola.com",
            "data_nascimento": "2006-01-01"
        }
    }
);