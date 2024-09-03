function calcularSaldoVitorias(vitorias, derrotas){
    return vitorias - derrotas;
}
let saldoVitorias = calcularSaldoVitorias(101,0);

if (saldoVitorias <=10){
    console.log("O Herói tem de saldo de : " + saldoVitorias + " está no nível de Ferro");
}
    else if (saldoVitorias <= 20){
        console.log("O Herói tem de saldo de : " + saldoVitorias + " está no nível de Bronze");
    }
    else if (saldoVitorias <= 50){
        console.log("O Herói tem de saldo de : " + saldoVitorias + " está no nível de Prata");
    }
    else if (saldoVitorias <= 80){
        console.log("O Herói tem de saldo de : " + saldoVitorias + " está no nível de Ouro");
    }
    else if (saldoVitorias <= 90){
        console.log("O Herói tem de saldo de : " + saldoVitorias + " está no nível de Diamante");
    }
    else if (saldoVitorias <= 100){
        console.log("O Herói tem de saldo de : " + saldoVitorias + " está no nível de Lendário");
    }
else{
    console.log("O Herói tem de saldo de : " + saldoVitorias + " está no nível de Imortal");
}
