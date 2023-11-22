// Desafio de Projeto

// Recebe a Qtde de Vitórias e Derrotas e Retorna o Saldo
let wins = gameHero(2000,1900);

// Verifica o Rank Atual
let nivelHero = nivel(wins)

// Altera texto do saldo
if (wins <= 0){
     // Saída
     console.log("O Herói não possui saldo de vitórias e está no nível " + nivelHero + "!");
     
} else{
	// Saída
    console.log("O Herói tem saldo de " + wins + " vitórias e está no nível " + nivelHero + "!");
    
}

// Função para verificar saldo de vitórias
function gameHero (winHero, losHero){
    let rank = winHero - losHero;
    return rank;
}

// Função para verificar o Rank
function nivel (wins){
	let nivel;
    if (wins <= 10){
    	nivel = "Ferro";
    } else if (wins > 10 && wins <= 20 ){
    	nivel = "Bronze";
    } else if (wins > 20 && wins <= 50 ){
    	nivel = "Prata";
    } else if (wins > 50 && wins <= 80 ){
    	nivel = "Ouro";
    } else if (wins > 80 && wins <= 90 ){
    	nivel = "Diamante";
    } else if (wins > 90 && wins <= 100 ){
    	nivel = "Lendário";
    } else if (wins >= 101 ){
    	nivel = "Imortal";
    } else{
    	nivel = "Não Encontrado"
    }
    
    return nivel;
} 