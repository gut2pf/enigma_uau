const eyfL = 'Para preparar uma boa argamassa caseira, comece separando os ingredientes: cimento, areia e água. A proporção mais usada é 1 parte de cimento para 4 partes de areia. Em um recipiente limpo, misture primeiro a areia e o cimento até obter uma cor homogênea, garantindo que não haja grumos. Depois, adicione a água aos poucos, mexendo constantemente, até conseguir uma massa firme e plástica, que não escorra, mas também não fique seca demais. A argamassa está pronta quando, ao pegar uma porção com a colher de pedreiro, ela grudar sem cair facilmente. Utilize-a imediatamente para assentar tijolos, blocos ou para reboco, evitando deixá-la endurecer.'
function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    if (passwordInput === eyfL) {
        alert("Senha correta!");
        location.href = "https://web.archive.org/web/20101112085357/http://br.hotwheels.com/"
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}
