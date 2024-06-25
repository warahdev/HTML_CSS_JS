const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

const valorImposto = calcularImposto(valorSalario); //calcular o imposto através da função
const saida = valorSalario - valorImposto + valorBeneficios; //calcula
print(saida.toFixed(2)); //imprime com 2 casa decimais

function calcularImposto(salario){
    let aliquota; //variavel que irá mudar o valor
    if (salario >= 0 && salario <1100){
        aliquota = 0.05;
    } else if (salario >= 1100.01 && salario <=2500){
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}