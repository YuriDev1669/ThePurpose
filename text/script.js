const frases = [
  "🙏 'O Senhor é meu pastor; nada me faltará.' - Salmos 23:1 🐑",
  "❤️ 'Confie no Senhor de todo o seu coração e não se apoie no seu próprio entendimento.' - Provérbios 3:5 🙌",
  "🌟 'Deus é amor.' - 1 João 4:8 ❤️",
  "🙏 'O Senhor te abençoe e te guarde.' - Números 6:24 🙌",
  "💪 'Tudo posso naquele que me fortalece.' - Filipenses 4:13 🙌",
  "💖 'Amarás o teu próximo como a ti mesmo.' - Mateus 22:39 🤗",
  "🏞️ 'Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.' - Salmos 46:1 🌄",
  "🙏 'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.' - 1 Tessalonicenses 5:18 🌼",
  "🕯️ 'O Senhor é a minha luz e a minha salvação; de quem terei medo?' - Salmos 27:1 🌅",
  "🤗 'O Senhor é bom, um refúgio em tempos de angústia. Ele cuida dos que nele confiam.' - Naum 1:7 🙌",
  "🙏 'Regozijai-vos na esperança, sede pacientes na tribulação, na oração, perseverantes.' - Romanos 12:12 🌈",
  "❤️ 'O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.' - 1 Coríntios 13:4 💖",
  "🌈 'Bem-aventurados os mansos, porque eles herdarão a terra.' - Mateus 5:5 🏞️",
  "📖 'Toda escritura é inspirada por Deus e útil para o ensino.' - 2 Timóteo 3:16 🙏",
  "🙌 'Mas buscai primeiro o Reino de Deus, e a sua justiça, e todas essas coisas vos serão acrescentadas.' - Mateus 6:33 🌟",
  "🚪 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.' - João 14:6 🙌",
  "🗻 'O Senhor é o meu rochedo, a minha fortaleza e o meu libertador; o meu Deus, o meu rochedo em quem me refugio.' - Salmos 18:2 🌄",
  "🌍 'Portanto, ide, fazei discípulos de todas as nações.' - Mateus 28:19 🙏",
  "🙏 'Tudo o que fizerdes, fazei-o de todo o coração, como para o Senhor.' - Colossenses 3:23 ❤️",
  "🌠 'Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.' - Hebreus 11:1 🙌",
  "🌻 'Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo.' - Salmos 23:4 🌄",
  "✨ 'Se Deus é por nós, quem será contra nós?' - Romanos 8:31 🙌",
  "🙏 'Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.' - Salmos 4:8 🌙",
  "👑 'Bem-aventurados os pacificadores, porque serão chamados filhos de Deus.' - Mateus 5:9 🕊️",
  "🌈 'Não te deixarei, nem te desampararei.' - Josué 1:5 🌟",
  "🌱 'Aquele que semeia com lágrimas, com jubiloso clamor colherá.' - Salmos 126:5 🌧️",
  "❤️ 'Nós o amamos porque ele nos amou primeiro.' - 1 João 4:19 🤗",
  "🗝️ 'E conhecereis a verdade, e a verdade vos libertará.' - João 8:32 📖",
  "🌅 'A esperança é a âncora da alma.' - Hebreus 6:19 ⚓",
  "🙏 João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
  "🕊️ Salmos 55:22 - Confia os teus cuidados ao Senhor, e ele te susterá; nunca permitirá que o justo seja abalado.",
  "🐏 Salmos 23:1 - O Senhor é o meu pastor; nada me faltará.",
  "💪 Filipenses 4:13 - Tudo posso naquele que me fortalece.",
  "🌍 Gênesis 1:1 - No princípio, criou Deus os céus e a terra.",
  "🛡️ Salmos 18:2 - O Senhor é o meu rochedo, e o meu lugar forte, e o meu libertador; o meu Deus, a minha fortaleza, em quem confio; o meu escudo, a força da minha salvação, e o meu alto refúgio.",
  "🙌 Mateus 11:28 - Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
  "🌟 Mateus 5:5 - Bem-aventurados os mansos, porque herdarão a terra.",
  "🙏 Mateus 18:20 - Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.",
  "🙌 Naum 1:7 - O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.",
  "🔥 Tiago 2:17 - Assim também a fé, se não tiver as obras, é morta em si mesma.",
  "📖 João 8:32 - E conhecereis a verdade, e a verdade vos libertará.",
  "🚪 João 14:6 - Eu sou o caminho, a verdade e a vida; ninguém vem ao Pai, senão por mim.",
  "😢 Mateus 5:4 - Bem-aventurados os que choram, porque eles serão consolados.",
  "❤️ 1 Coríntios 13:4 - O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece.",
  "🎶 Salmos 150:6 - Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor.",
  "🙏 Efésios 2:8 - Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.",
  "📚 Provérbios 2:6 - Porque o Senhor dá a sabedoria, e da sua boca vem o conhecimento e o entendimento.",
  "🙏 Isaías 55:6 - Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.",
  "🙏 Mateus 6:33 - Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
  "📖 Salmos 119:105 - Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
  "✨ 1 Coríntios 2:9 - Mas, como está escrito: As coisas que o olho não viu, e o ouvido não ouviu, e não subiram ao coração do homem são as que Deus preparou para os que o amam.",
  "🙏 Números 6:24-26 - O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti; o Senhor sobre ti levante o seu rosto e te dê a paz.",
  "🙏 Jeremias 29:11 - Porque sou eu que conheço os planos que tenho para vós, diz o Senhor, planos de paz, e não de mal, para vos dar um futuro e uma esperança.",
  "💪 2 Coríntios 12:9 - A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.",
  "📚 Salmos 111:10 - O temor do Senhor é o princípio da sabedoria; bom entendimento têm todos os que cumprem os seus preceitos.",
  "🙏 Salmos 145:18 - Perto está o Senhor de todos os que o invocam, de todos os que o invocam de verdade.",
  "🛐 Salmos 28:7 - O Senhor é o meu escudo e a minha fortaleza; o meu coração confia nele, e fui socorrido; pelo que o meu coração salta de prazer, e com o meu canto o louvarei.",
  "💪 'Tudo posso naquele que me fortalece.' - Filipenses 4:13",
  "🐏 'O Senhor é o meu pastor; nada me faltará.' - Salmos 23:1",
  "🌟 'Esforçai-vos, e Ele fortalecerá o vosso coração.' - Salmos 31:24",
  "🙏 'Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.' - Isaías 41:10",
  "🕊️ 'O Senhor é a minha luz e a minha salvação; de quem terei medo?' - Salmos 27:1",
  "🛡️ 'Deus é o nosso refúgio e fortaleza, socorro bem presente nas tribulações.' - Salmos 46:1",
  "📖 'Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.' - Salmos 119:105",
  "🙌 'Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.' - Jó 19:25",
  "🙏 'Espera pelo Senhor, tem bom ânimo, e fortifique-se o teu coração; espera, pois, pelo Senhor.' - Salmos 27:14",
  "🛐 'Não temas, porque eu te remi; chamei-te pelo teu nome, tu és meu.' - Isaías 43:1",
  "🙏 'Confia os teus cuidados ao Senhor, e ele te susterá.' - Salmos 55:22",
  "❤️ 'Deus é amor, e quem permanece no amor permanece em Deus, e Deus nele.' - 1 João 4:16",
  "🌍 'Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.' - Mateus 6:33",
  "🙌 'O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.' - Naum 1:7",
  "🌿 'Porque Deus não nos deu o espírito de covardia, mas de poder, de amor e de moderação.' - 2 Timóteo 1:7"
]
function envolverPalavrasComSpan(frases) {
  const palavrasComSpan = arrayDePalavras.map(palavra => `<span>${palavra}</span>`);
  return palavrasComSpan.join(' ');
}


// Sorteie uma frase aleatoriamente
const fraseSorteada = frases[Math.floor(Math.random() * frases.length)];
//const fraseSorteada = "🛡️ Salmos 18:2 - O Senhor é o meu rochedo, e o meu lugar forte, e o meu libertador; o meu Deus, a minha fortaleza, em quem confio; o meu escudo, a força da minha salvação, e o meu alto refúgio."

const arrayDePalavras = fraseSorteada.split(' ');
const fraseComSpan = envolverPalavrasComSpan(arrayDePalavras);

const textoPrincipal = document.getElementById("textPrincipal");
textoPrincipal.innerHTML = fraseComSpan;




// Adicione o código JavaScript abaixo ao seu arquivo script.js

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    document.querySelector(".snowflakes").appendChild(snowflake);
  
    setTimeout(() => {
        snowflake.remove();
    }, 7000); // Tempo de vida de cada floco de neve
  }
  
  function createSnowflakes() {
    setInterval(createSnowflake, 400); // Intervalo para criar novos flocos de neve
  }
  
  createSnowflakes(); // Iniciar a criação de flocos de neve



  
