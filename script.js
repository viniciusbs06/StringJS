function primeiraUltimaLetra() {
    let palavra = document.getElementById("palavra").value;

    document.getElementById("res1").innerHTML =
        "Primeira letra: " + palavra.charAt(0) +
        "<br>Última letra: " + palavra.at(-1);
}

function contarCaracteres() {
    let frase = document.getElementById("frase1").value;

    document.getElementById("res2").innerHTML =
        "Quantidade de caracteres: " + frase.length;
}

function maiusculas() {
    let frase = document.getElementById("frase2").value;

    document.getElementById("res3").innerHTML =
        frase.toUpperCase();
}

function minusculas() {
    let frase = document.getElementById("frase3").value;

    document.getElementById("res4").innerHTML =
        frase.toLowerCase();
}

function verificarJava() {
    let frase = document.getElementById("frase4").value;

    document.getElementById("res5").innerHTML =
        frase.includes("Java");
}

function substituirPalavra() {
    let frase = document.getElementById("frase5").value;
    let antiga = document.getElementById("palavraAntiga").value;
    let nova = document.getElementById("palavraNova").value;

    document.getElementById("res6").innerHTML =
        frase.replace(antiga, nova);
}

function separarNomes() {
    let nomes = document.getElementById("nomes").value;

    document.getElementById("res7").innerHTML =
        nomes.split(",").join(" | ");
}

function removerEspacos() {
    let texto = document.getElementById("textoEspacos").value;

    document.getElementById("res8").innerHTML =
        "'" + texto.trim() + "'";
}

function cincoPrimeiros() {
    let frase = document.getElementById("frase6").value;

    document.getElementById("res9").innerHTML =
        frase.slice(0, 5);
}

function buscarPosicao() {
    let frase = document.getElementById("frase7").value;
    let palavra = document.getElementById("palavraBusca").value;

    document.getElementById("res10").innerHTML =
        "Posição: " + frase.indexOf(palavra);
}