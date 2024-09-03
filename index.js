/*Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


/*function nome(name){
    console.log("olá " + name )
}

nome("Jorginho");*/
function calcularSaldo(valor1, valor2){
    return valor1 - valor2;
}
let saldoVitorias = calcularSaldo(101,0);

if (saldoVitorias <=10){
    console.log("Seu saldo de vitórias é : " + saldoVitorias + " e seu Rank é Ferro");
}
    else if (saldoVitorias <= 20){
        console.log("Seu saldo de vitórias é : " + saldoVitorias + " e seu Rank é Bronze");
    }
    else if (saldoVitorias <= 50){
        console.log("Seu saldo de vitórias é : " + saldoVitorias + " e seu Rank é Prata");
    }
    else if (saldoVitorias <= 80){
        console.log("Seu saldo de vitórias é : " + saldoVitorias + " e seu Rank é Ouro");
    }
    else if (saldoVitorias <= 90){
        console.log("Seu saldo de vitórias é : " + saldoVitorias + " e seu Rank é Diamante");
    }
    else if (saldoVitorias <= 100){
        console.log("Seu saldo de vitórias é : " + saldoVitorias + " e seu Rank é Lendário");
    }
else{
    console.log("Seu saldo de vitórias é : " + saldoVitorias + " e seu Rank é Imortal");
}
