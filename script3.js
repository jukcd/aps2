let nomes = [];
let idades = [];
let maiorIdade;
let menorIdade;
let maisNovo;

let somaIdades = 0;
let mediaIdades;

for(let i = 0; i <= 2; i++){
	nomes.push(prompt("Digite um nome:"));
	idades.push(Number(prompt("Digite uma idade:")));
}

maiorIdade = idades[0];
menorIdade = idades[0];

//Define mais novo e mais velho
for(let idade of idades){

	if(idade >= maiorIdade){
		maiorIdade = idade;
	}
	if(idade <= menorIdade){
		menorIdade = idade;
	}

	somaIdades = somaIdades + idade;
}


//Média das Idades
mediaIdades = somaIdades / 3;

for(let j = 0; j<= 2; j++ ){
	if (idades[j] == menorIdade) {
		maisNovo = nomes[j];
	}
}

alert(`-- A maior idade é ${maiorIdade} anos. 
		-- ${maisNovo} é a pessoa mais nova com ${menorIdade} anos. 
		-- A média de todas as idades: ${mediaIdades}.`);