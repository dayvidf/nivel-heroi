const nomeHeroi = "Shiro";
const xpHeroi = Math.random() * 11000;
const nivelHeroi = classificadorNivel(xpHeroi);

function classificadorNivel(xpHeroi) {
    if (isNaN(xpHeroi)) {
        return "Sem nível"
    }
    if (xpHeroi <= 1000) {
        return "Ferro";
    }
    else if (xpHeroi <= 2000) {
        return "Bronze";
    }
    else if (xpHeroi <= 5000) {
        return "Prata";
    }
    else if (xpHeroi <= 7000) {
        return "Ouro";
    }
    else if (xpHeroi <= 8000) {
        return "Platina";
    }
    else if (xpHeroi <= 9000) {
        return "Ascendente";
    }
    else if (xpHeroi <= 10000) {
        return "Imortal";
    }
    else if (xpHeroi >= 10001) {
        return "Radiante";
    }
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + "!");
