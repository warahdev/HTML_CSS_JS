"use scrict"
//Manipulando Objetos Complexos

const empresa = {
    departamentos: [
        {
            nome: "Contabilidade Geral",
            funcionarios: ["Roberta", "Rodrigo", "Eduardo"]
        }, {
            nome: "Reporting",
            funcionarios: ["Caio", "Fabiola", "Carlos"]
        }, {
            nome: "FP&A",
            funcionarios: ["João", "Ana", "Amanda"]
        }
        
    ]
};

for (let i in empresa.departamentos) {
    const departamento = empresa.departamentos[i];
    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionario: ${funcionario}. Departamento: ${departamento.nome}.`);
    }
}