const database = "BD3-NoSQL-AtlasMongoDB";

use(database);

const collection = 'bd3-nosql-atv2';

db.createCollection(collection);


 db["bd3-nosql-atv2"].insertMany([
     {
         "cod_aluno": 1,
         "cod_turma": 101,
         "nome": "João Silva",
         "cpf": "123.456.789-01",
         "rg": "12.345.678-9",
         "telefone_aluno": "(11) 98765-4321",
         "telefone_responsável": "(11) 91234-5678",
         "email": "joao.silva@hotmail.com",
         "data_nascimento": "2005-03-15"
     },
     {
         "cod_aluno": 2,
         "cod_turma": 101,
         "nome": "Maria Oliveira",
         "cpf": "234.567.890-12",
         "rg": "23.456.789-0",
         "telefone_aluno": "(11) 97654-3210",
         "telefone_responsável": "(11) 92345-6789",
         "email": "maria.oliveira@hotmail.com",
         "data_nascimento": "2006-05-22"
     },
     {
         "cod_aluno": 3,
         "cod_turma": 102,
         "nome": "Carlos Souza",
         "cpf": "345.678.901-23",
         "rg": "34.567.890-1",
         "telefone_aluno": "(11) 96543-2109",
         "telefone_responsável": "(11) 93456-7890",
         "email": "carlos.souza@hotmail.com",
         "data_nascimento": "2005-11-30"
     },
     {
         "cod_aluno": 4,
         "cod_turma": 102,
         "nome": "Ana Costa",
         "cpf": "456.789.012-34",
         "rg": "45.678.901-2",
         "telefone_aluno": "(11) 95432-1098",
         "telefone_responsável": "(11) 94567-8901",
         "email": "ana.costa@email.com",
         "data_nascimento": "2006-07-18"
     },
     {
         "cod_aluno": 5,
         "cod_turma": 103,
         "nome": "Pedro Santos",
         "cpf": "567.890.123-45",
         "rg": "56.789.012-3",
         "telefone_aluno": "(11) 94321-0987",
         "telefone_responsável": "(11) 95678-9012",
         "email": "pedro.santos@email.com",
         "data_nascimento": "2005-09-25"
     },
     {
         "cod_aluno": 6,
         "cod_turma": 103,
         "nome": "Juliana Lima",
         "cpf": "678.901.234-56",
         "rg": "67.890.123-4",
         "telefone_aluno": "(11) 93210-9876",
         "telefone_responsável": "(11) 96789-0123",
         "email": "juliana.lima@email.com",
         "data_nascimento": "2006-02-14"
     },
     {
         "cod_aluno": 7,
         "cod_turma": 104,
         "nome": "Lucas Pereira",
         "cpf": "789.012.345-67",
         "rg": "78.901.234-5",
         "telefone_aluno": "(11) 92109-8765",
         "telefone_responsável": "(11) 97890-1234",
         "email": "lucas.pereira@email.com",
         "data_nascimento": "2005-08-11"
     },
     {
         "cod_aluno": 8,
         "cod_turma": 104,
         "nome": "Fernanda Alves",
         "cpf": "890.123.456-78",
         "rg": "89.012.345-6",
         "telefone_aluno": "(11) 91098-7654",
         "telefone_responsável": "(11) 98901-2345",
         "email": "fernanda.alves@email.com",
         "data_nascimento": "2006-04-03"
     },
     {
         "cod_aluno": 9,
         "cod_turma": 105,
         "nome": "Rafael Gomes",
         "cpf": "901.234.567-89",
         "rg": "90.123.456-7",
         "telefone_aluno": "(11) 90987-6543",
         "telefone_responsável": "(11) 99012-3456",
         "email": "rafael.gomes@email.com",
         "data_nascimento": "2005-12-19"
     },
     {
         "cod_aluno": 10,
         "cod_turma": 105,
         "nome": "Patrícia Martins",
         "cpf": "012.345.678-90",
         "rg": "01.234.567-8",
         "telefone_aluno": "(11) 89876-5432",
         "telefone_responsável": "(11) 90123-4567",
         "email": "patricia.martins@email.com",
         "data_nascimento": "2006-01-27"
     },
     {
         "cod_aluno": 11,
         "cod_turma": 201,
         "nome": "Marcos Ribeiro",
         "cpf": "123.456.789-02",
         "rg": "12.345.679-0",
         "telefone_aluno": "(11) 88765-4321",
         "telefone_responsável": "(11) 91234-5679",
         "email": "marcos.ribeiro@email.com",
         "data_nascimento": "2005-06-08"
     },
     {
         "cod_aluno": 12,
         "cod_turma": 201,
         "nome": "Aline Ferreira",
         "cpf": "234.567.890-13",
         "rg": "23.456.780-1",
         "telefone_aluno": "(11) 87654-3210",
         "telefone_responsável": "(11) 92345-6790",
         "email": "aline.ferreira@email.com",
         "data_nascimento": "2006-03-12"
     },
     {
         "cod_aluno": 13,
         "cod_turma": 202,
         "nome": "Gustavo Henrique",
         "cpf": "345.678.901-24",
         "rg": "34.567.891-2",
         "telefone_aluno": "(11) 86543-2109",
         "telefone_responsável": "(11) 93456-7901",
         "email": "gustavo.henrique@email.com",
         "data_nascimento": "2005-10-05"
     },
     {
         "cod_aluno": 14,
         "cod_turma": 202,
         "nome": "Camila Duarte",
         "cpf": "456.789.012-35",
         "rg": "45.678.912-3",
         "telefone_aluno": "(11) 85432-1098",
         "telefone_responsável": "(11) 94567-9012",
         "email": "camila.duarte@email.com",
         "data_nascimento": "2006-09-17"
     },
     {
         "cod_aluno": 15,
         "cod_turma": 203,
         "nome": "Diego Ramos",
         "cpf": "567.890.123-46",
         "rg": "56.789.023-4",
         "telefone_aluno": "(11) 84321-0987",
         "telefone_responsável": "(11) 95678-0123",
         "email": "diego.ramos@email.com",
         "data_nascimento": "2005-04-29"
     },
     {
         "cod_aluno": 16,
         "cod_turma": 203,
         "nome": "Tatiane Castro",
         "cpf": "678.901.234-57",
         "rg": "67.890.134-5",
         "telefone_aluno": "(11) 83210-9876",
         "telefone_responsável": "(11) 96789-1234",
         "email": "tatiane.castro@email.com",
         "data_nascimento": "2006-08-22"
     },
     {
         "cod_aluno": 17,
         "cod_turma": 204,
         "nome": "Rodrigo Mendes",
         "cpf": "789.012.345-68",
         "rg": "78.901.245-6",
         "telefone_aluno": "(11) 82109-8765",
         "telefone_responsável": "(11) 97890-2345",
         "email": "rodrigo.mendes@email.com",
         "data_nascimento": "2005-01-14"
     },
     {
         "cod_aluno": 18,
         "cod_turma": 204,
         "nome": "Vanessa Oliveira",
         "cpf": "890.123.456-79",
         "rg": "89.012.356-7",
         "telefone_aluno": "(11) 81098-7654",
         "telefone_responsável": "(11) 98901-3456",
         "email": "vanessa.oliveira@email.com",
         "data_nascimento": "2006-07-07"
     },
     {
         "cod_aluno": 19,
         "cod_turma": 205,
         "nome": "Felipe Costa",
         "cpf": "901.234.567-80",
         "rg": "90.123.467-8",
         "telefone_aluno": "(11) 80987-6543",
         "telefone_responsável": "(11) 99012-4567",
         "email": "felipe.costa@email.com",
         "data_nascimento": "2005-11-30"
     },
     {
         "cod_aluno": 20,
         "cod_turma": 205,
         "nome": "Larissa Santos",
         "cpf": "012.345.678-91",
         "rg": "01.234.578-9",
         "telefone_aluno": "(11) 79876-5432",
         "telefone_responsável": "(11) 90123-5678",
         "email": "larissa.santos@email.com",
         "data_nascimento": "2006-05-19"
     },
     {
         "cod_aluno": 21,
         "cod_turma": 301,
         "nome": "Bruno Carvalho",
         "cpf": "123.456.789-03",
         "rg": "12.345.689-1",
         "telefone_aluno": "(11) 78765-4321",
         "telefone_responsável": "(11) 91234-5689",
         "email": "bruno.carvalho@email.com",
         "data_nascimento": "2005-02-11"
     },
     {
         "cod_aluno": 22,
         "cod_turma": 301,
         "nome": "Daniela Rocha",
         "cpf": "234.567.890-14",
         "rg": "23.456.790-2",
         "telefone_aluno": "(11) 77654-3210",
         "telefone_responsável": "(11) 92345-6801",
         "email": "daniela.rocha@email.com",
         "data_nascimento": "2006-10-24"
     },
     {
         "cod_aluno": 23,
         "cod_turma": 302,
         "nome": "Eduardo Nunes",
         "cpf": "345.678.901-25",
         "rg": "34.567.802-3",
         "telefone_aluno": "(11) 76543-2109",
         "telefone_responsável": "(11) 93456-8012",
         "email": "eduardo.nunes@email.com",
         "data_nascimento": "2005-07-16"
     },
     {
         "cod_aluno": 24,
         "cod_turma": 302,
         "nome": "Isabela Gonçalves",
         "cpf": "456.789.012-36",
         "rg": "45.678.923-4",
         "telefone_aluno": "(11) 75432-1098",
         "telefone_responsável": "(11) 94567-8123",
         "email": "isabela.goncalves@email.com",
         "data_nascimento": "2006-12-05"
     },
     {
         "cod_aluno": 25,
         "cod_turma": 303,
         "nome": "Leonardo Dias",
         "cpf": "567.890.123-47",
         "rg": "56.789.034-5",
         "telefone_aluno": "(11) 74321-0987",
         "telefone_responsável": "(11) 95678-1234",
         "email": "leonardo.dias@email.com",
         "data_nascimento": "2005-09-28"
     },
     {
         "cod_aluno": 26,
         "cod_turma": 303,
         "nome": "Mariana Andrade",
         "cpf": "678.901.234-58",
         "rg": "67.890.145-6",
         "telefone_aluno": "(11) 73210-9876",
         "telefone_responsável": "(11) 96789-2345",
         "email": "mariana.andrade@email.com",
         "data_nascimento": "2006-04-15"
     },
     {
         "cod_aluno": 27,
         "cod_turma": 304,
         "nome": "Thiago Barbosa",
         "cpf": "789.012.345-69",
         "rg": "78.901.256-7",
         "telefone_aluno": "(11) 72109-8765",
         "telefone_responsável": "(11) 97890-3456",
         "email": "thiago.barbosa@email.com",
         "data_nascimento": "2005-03-10"
     },
     {
         "cod_aluno": 28,
         "cod_turma": 304,
         "nome": "Natália Freitas",
         "cpf": "890.123.456-70",
         "rg": "89.012.367-8",
         "telefone_aluno": "(11) 71098-7654",
         "telefone_responsável": "(11) 98901-4567",
         "email": "natalia.freitas@email.com",
         "data_nascimento": "2006-11-21"
     },
     {
         "cod_aluno": 29,
         "cod_turma": 305,
         "nome": "Vinícius Lima",
         "cpf": "901.234.567-81",
         "rg": "90.123.478-9",
         "telefone_aluno": "(11) 70987-6543",
         "telefone_responsável": "(11) 99012-5678",
         "email": "vinicius.lima@email.com",
         "data_nascimento": "2005-08-07"
    },
    {
         "cod_aluno": 30,
         "cod_turma": 305,
         "nome": "Priscila Souza",
         "cpf": "012.345.678-92",
         "rg": "01.234.589-0",
         "telefone_aluno": "(11) 69876-5432",
         "telefone_responsável": "(11) 90123-6789",
         "email": "priscila.souza@email.com",
         "data_nascimento": "2006-01-30"
     },
     {
         "cod_aluno": 31,
         "cod_turma": 401,
         "nome": "Roberto Almeida",
         "cpf": "123.456.789-04",
         "rg": "12.345.790-2",
         "telefone_aluno": "(11) 68765-4321",
         "telefone_responsável": "(11) 91234-5790",
         "email": "roberto.almeida@email.com",
         "data_nascimento": "2005-05-12"
     },
     {
         "cod_aluno": 32,
         "cod_turma": 401,
         "nome": "Bianca Costa",
         "cpf": "234.567.890-15",
         "rg": "23.456.801-3",
         "telefone_aluno": "(11) 67654-3210",
         "telefone_responsável": "(11) 92345-7901",
         "email": "bianca.costa@email.com",
         "data_nascimento": "2006-02-23"
     },
     {
         "cod_aluno": 33,
         "cod_turma": 402,
         "nome": "André Santos",
         "cpf": "345.678.901-26",
         "rg": "34.567.913-4",
         "telefone_aluno": "(11) 66543-2109",
         "telefone_responsável": "(11) 93456-9023",
         "email": "andre.santos@email.com",
         "data_nascimento": "2005-10-16"
     },
     {
         "cod_aluno": 34,
         "cod_turma": 402,
         "nome": "Laura Mendonça",
         "cpf": "456.789.012-37",
         "rg": "45.678.924-5",
         "telefone_aluno": "(11) 65432-1098",
         "telefone_responsável": "(11) 94567-9234",
         "email": "laura.mendonca@hotmail.com",
         "data_nascimento": "2006-07-09"
     },
     {
         "cod_aluno": 35,
         "cod_turma": 403,
         "nome": "Hugo Pereira",
         "cpf": "567.890.123-48",
         "rg": "56.789.045-6",
         "telefone_aluno": "(11) 64321-0987",
         "telefone_responsável": "(11) 95678-2345",
         "email": "hugo.pereira@hotmail.com",
         "data_nascimento": "2005-04-02"
     },
     {
         "cod_aluno": 36,
         "cod_turma": 403,
         "nome": "Gabriela Rocha",
         "cpf": "678.901.234-59",
         "rg": "67.890.156-7",
         "telefone_aluno": "(11) 63210-9876",
         "telefone_responsável": "(11) 96789-3456",
         "email": "gabriela.rocha@hotmail.com",
         "data_nascimento": "2006-09-25"
     },
     {
         "cod_aluno": 37,
         "cod_turma": 404,
         "nome": "Alexandre Gomes",
         "cpf": "789.012.345-70",
         "rg": "78.901.267-8",
         "telefone_aluno": "(11) 62109-8765",
         "telefone_responsável": "(11) 97890-4567",
         "email": "alexandre.gomes@hotmail.com",
         "data_nascimento": "2005-01-18"
     },
     {
         "cod_aluno": 38,
         "cod_turma": 404,
         "nome": "Renata Ferreira",
         "cpf": "890.123.456-81",
         "rg": "89.012.378-9",
         "telefone_aluno": "(11) 61098-7654",
         "telefone_responsável": "(11) 98901-5678",
         "email": "renata.ferreira@hotmail.com",
         "data_nascimento": "2006-08-11"
     },
     {
         "cod_aluno": 39,
         "cod_turma": 405,
         "nome": "Paulo Henrique",
         "cpf": "901.234.567-92",
         "rg": "90.123.489-0",
         "telefone_aluno": "(11) 60987-6543",
         "telefone_responsável": "(11) 99012-6789",
         "email": "paulo.henrique@hotmail.com",
         "data_nascimento": "2005-12-24"
     },
     {
         "cod_aluno": 40,
         "cod_turma": 405,
         "nome": "Aline Silva",
         "cpf": "012.345.678-03",
         "rg": "01.234.590-1",
         "telefone_aluno": "(11) 59876-5432",
         "telefone_responsável": "(11) 90123-7890",
         "email": "aline.silva@hotmail.com",
         "data_nascimento": "2006-03-17"
     },
     {
         "cod_aluno": 41,
         "cod_turma": 501,
         "nome": "Ricardo Oliveira",
         "cpf": "123.456.789-05",
         "rg": "12.345.801-3",
         "telefone_aluno": "(11) 58765-4321",
         "telefone_responsável": "(11) 91234-6801",
         "email": "ricardo.oliveira@email.com",
         "data_nascimento": "2005-06-20"
     },
     {
         "cod_aluno": 42,
         "cod_turma": 501,
         "nome": "Cristina Santos",
         "cpf": "234.567.890-16",
         "rg": "23.456.912-4",
         "telefone_aluno": "(11) 57654-3210",
         "telefone_responsável": "(11) 92345-8012",
         "email": "cristina.santos@email.com",
         "data_nascimento": "2006-04-13"
     },
     {
         "cod_aluno": 43,
         "cod_turma": 502,
         "nome": "Marcelo Costa",
         "cpf": "345.678.901-27",
         "rg": "34.567.024-5",
         "telefone_aluno": "(11) 56543-2109",
         "telefone_responsável": "(11) 93456-0134",
         "email": "marcelo.costa@email.com",
         "data_nascimento": "2005-11-06"
     },
     {
         "cod_aluno": 44,
         "cod_turma": 502,
         "nome": "Beatriz Alves",
         "cpf": "456.789.012-38",
         "rg": "45.678.135-6",
         "telefone_aluno": "(11) 55432-1098",
         "telefone_responsável": "(11) 94567-1345",
         "email": "beatriz.alves@gmail.com",
         "data_nascimento": "2006-10-29"
     },
     {
         "cod_aluno": 45,
         "cod_turma": 503,
         "nome": "Fábio Lima",
         "cpf": "567.890.123-49",
         "rg": "56.789.156-7",
         "telefone_aluno": "(11) 54321-0987",
         "telefone_responsável": "(11) 95678-3456",
         "email": "fabio.lima@gmail.com",
         "data_nascimento": "2005-07-22"
     },
     {
         "cod_aluno": 46,
         "cod_turma": 503,
         "nome": "Simone Ribeiro",
         "cpf": "678.901.234-60",
         "rg": "67.890.267-8",
         "telefone_aluno": "(11) 53210-9876",
         "telefone_responsável": "(11) 96789-4567",
         "email": "simone.ribeiro@gmail.com",
         "data_nascimento": "2006-05-15"
     },
     {
         "cod_aluno": 47,
         "cod_turma": 504,
         "nome": "Márcio Gonçalves",
         "cpf": "789.012.345-71",
         "rg": "78.901.378-9",
         "telefone_aluno": "(11) 52109-8765",
         "telefone_responsável": "(11) 97890-5678",
         "email": "marcio.goncalves@gmail.com",
         "data_nascimento": "2005-02-08"
     },
     {
         "cod_aluno": 48,
         "cod_turma": 504,
         "nome": "Luciana Martins",
         "cpf": "890.123.456-82",
         "rg": "89.012.489-0",
         "telefone_aluno": "(11) 51098-7654",
         "telefone_responsável": "(11) 98901-6789",
         "email": "luciana.martins@gmail.com",
         "data_nascimento": "2006-12-01"
     },
     {
         "cod_aluno": 49,
         "cod_turma": 505,
         "nome": "José Carlos",
         "cpf": "901.234.567-03",
         "rg": "90.123.590-1",
         "telefone_aluno": "(11) 50987-6543",
         "telefone_responsável": "(11) 99012-7890",
         "email": "jose.carlos@gmail.com",
         "data_nascimento": "2005-09-14"
     },
     {
         "cod_aluno": 50,
         "cod_turma": 505,
         "nome": "Amanda Nunes",
         "cpf": "012.345.678-14",
         "rg": "01.234.601-2",
         "telefone_aluno": "(11) 49876-5432",
         "telefone_responsável": "(11) 90123-8901",
         "email": "amanda.nunes@gmail.com",
         "data_nascimento": "2006-06-07"
    }
 ])



 /* db["bd3-nosql-atv2"].updateOne(
     { "cod_aluno": 1 },
     {
       $set: {
         "cod_turma": 121,
         "nome": "Pedro Silva  2.v",
         "cpf": "123.129.129-98",
         "rg": "12.967.987-8",
         "telefone_aluno": "(11) 99823-0933",
         "telefone_responsável": "(99) 21932-9213",
         "email": "pedro.silvaatualizado@email.com",
         "data_nascimento": "2003-01-01"
       }
     }
   ); */

/*    db["bd3-nosql-atv2"].deleteOne({
     "cod_aluno": 2
   }); */

 /* db['bd3-nosql-atv2'].find({'email':/@gmail.com/i}) */