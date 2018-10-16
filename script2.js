let numeros = [];
let impares = [];
let pares = [];
let maior;
let menor;
let mediaImpares;
let somaImpares = 0;
let difMaiorMenor;
let maiorPar;

for(let i = 0; i<=3; i++){
	numeros[i] = Number(prompt("Digite um número inteiro"));
}
console.log(numeros.length)
console.log(pares.length)

maior = numeros[0];
menor = numeros[0];

for(let numero of numeros){


	//Maior e menor numero de todos
	if(numero >= maior ){

		maior = numero;
	}

	if(numero <= menor){

		menor = numero;
	}



	//Separa pares e impares
	if(numero % 2 == 0){

		pares.push(numero);

	}else{

		impares.push(numero);

	}
}


//Calculo diferença maior e menor
difMaiorMenor = maior - menor;



//Calcula média dos impares
for(let impar of impares){
	somaImpares = somaImpares + impar; 
}

mediaImpares = somaImpares / impares.length;

//Maior número par
maiorPar = pares[0];
for(let par of pares){

	if(par >= maiorPar){

		maiorPar = par;

	}
}

alert(`A média dos valores ímpares: ${mediaImpares}
	O maior número par: ${maiorPar}
	A diferença entre o número maior e menor: ${difMaiorMenor}`);