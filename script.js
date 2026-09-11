```javascript
// =========================================
// ELEMENTOS
// =========================================

const inicio = document.getElementById("inicio");
const envelopeTela = document.getElementById("envelopeTela");
const cartaTela = document.getElementById("cartaTela");
const pegadinhaTela = document.getElementById("pegadinhaTela");
const pokemonTela = document.getElementById("pokemonTela");

const botaoAbrir = document.getElementById("botaoAbrir");
const envelope = document.getElementById("envelope");
const botaoTerminar = document.getElementById("botaoTerminar");
const botaoPegadinha = document.getElementById("botaoPegadinha");

const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botaoMusica");


// =========================================
// FUNÇÃO PARA TROCAR DE TELA
// =========================================

function mostrarTela(telaAtual) {

    inicio.classList.add("escondido");
    envelopeTela.classList.add("escondido");
    cartaTela.classList.add("escondido");
    pegadinhaTela.classList.add("escondido");
    pokemonTela.classList.add("escondido");

    telaAtual.classList.remove("escondido");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================================
// 1. ABRIR A CARTA
// =========================================

botaoAbrir.addEventListener("click", () => {

    mostrarTela(envelopeTela);

    // Começa a música quando ele interage com o site
    musica.play().catch(() => {
        console.log("O navegador bloqueou o autoplay.");
    });

});


// =========================================
// 2. ABRIR O ENVELOPE
// =========================================

envelope.addEventListener("click", () => {

    // Evita clicar várias vezes
    if (envelope.classList.contains("aberto")) {
        return;
    }

    envelope.classList.add("aberto");

    // Espera a animação do envelope terminar
    setTimeout(() => {

        mostrarTela(cartaTela);

        // Começa a mostrar o botão depois de um tempo
        setTimeout(() => {
            botaoTerminar.classList.remove("escondido");
        }, 5000);

    }, 1300);

});


// =========================================
// 3. TERMINOU DE LER A CARTA
// =========================================

botaoTerminar.addEventListener("click", () => {

    mostrarTela(pegadinhaTela);

});


// =========================================
// 4. PEGADINHA
// =========================================

botaoPegadinha.addEventListener("click", () => {

    mostrarTela(pokemonTela);

});


// =========================================
// 5. CONTROLE DA MÚSICA
// =========================================

botaoMusica.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();

        botaoMusica.textContent = "♫";

    } else {

        musica.pause();

        botaoMusica.textContent = "🔇";

    }

});


// =========================================
// 6. ATUALIZA O ÍCONE SE A MÚSICA TERMINAR
// =========================================

musica.addEventListener("play", () => {
    botaoMusica.textContent = "♫";
});

musica.addEventListener("pause", () => {
    botaoMusica.textContent = "🔇";
});
```
