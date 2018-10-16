let salario = Number(prompt("Qual o seu salário?"));
let novoSalario;
let desconto;


if(salario < 500){

	novoSalario = salario - 50;
	desconto = 50;

} else if(salario <= 1000){

	novoSalario =  salario - 100;
	desconto = 100;


} else {

	novoSalario = salario - 200;
	desconto = 200;

}

alert(`Seu antigo salário era R$${salario} e seu novo salário é de R$${novoSalario} pois houve um desconto de R$${desconto}`);