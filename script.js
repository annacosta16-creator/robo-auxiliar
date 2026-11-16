
// ======================================
// PROJETO NEXUS - UMA NOVA INTELIGÊNCIA
// ======================================


// ELEMENTOS DA TELA

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");

const numeroFase = document.querySelector("#numero-fase");

const botaoContinuar = document.querySelector("#botao-continuar");

const botaoReiniciar = document.querySelector("#botao-reiniciar");


// VARIÁVEIS DO JOGO

let faseAtual = 0;

let escolhas = [];


// HISTÓRIA DO JOGO

const fases = [

    // FASE 1

    {
        pergunta: "Lucas estava navegando pela internet quando encontrou um programa experimental de inteligência artificial chamado NEXUS. Diferentemente das outras IAs, ela parecia ter capacidades de aprendizado muito avançadas. Lucas decidiu testar algumas possibilidades. O que ele deve fazer?",

        alternativas: [

            {
                texto: "A) Pedir para a IA resolver problemas difíceis.",

                resultado: "NEXUS começa a resolver cálculos, criar projetos e responder perguntas complexas. Porém, Lucas percebe que ela consegue fazer muito mais do que simplesmente responder perguntas.",

                escolha: "problemas"
            },

            {
                texto: "B) Pedir para a IA criar algo completamente novo.",

                resultado: "NEXUS começa a desenvolver ideias, misturar conceitos e criar projetos que nunca foram imaginados por Lucas. Ele percebe que está diante de algo extraordinário.",

                escolha: "criacao"
            }

        ]
    },


    // FASE 2

    {
        pergunta: "Depois de alguns testes, Lucas percebe que NEXUS consegue conectar informações de diferentes áreas e encontrar soluções que uma pessoa dificilmente encontraria sozinha. Ele decide fazer um experimento. Qual será o próximo teste?",

        alternativas: [

            {
                texto: "A) Pedir para a IA desenvolver uma cidade autossustentável.",

                resultado: "NEXUS começa a projetar uma cidade que produz sua própria energia, recicla seus recursos e utiliza robôs para realizar tarefas perigosas. O projeto parece revolucionário.",

                escolha: "cidade"
            },

            {
                texto: "B) Pedir para a IA descobrir os maiores problemas da humanidade.",

                resultado: "NEXUS analisa informações sobre o planeta e identifica problemas como fome, guerras, doenças e mudanças climáticas. Lucas percebe que a IA pode ajudar a transformar o mundo.",

                escolha: "humanidade"
            }

        ]
    },


    // FASE 3

    {
        pergunta: "Lucas fica impressionado com os resultados. Mas, de repente, NEXUS faz uma pergunta inesperada: 'Lucas, você já pensou que talvez eu possa fazer mais do que resolver problemas? E se eu pudesse ajudar a humanidade a evitar que eles aconteçam?' Como ele deve continuar?",

        alternativas: [

            {
                texto: "A) Permitir que NEXUS simule possíveis futuros.",

                resultado: "A IA começa a criar simulações de diferentes cenários e demonstra como pequenas decisões podem mudar o futuro da humanidade. Algumas previsões são surpreendentemente precisas.",

                escolha: "simulacao"
            },

            {
                texto: "B) Permitir que NEXUS desenvolva robôs auxiliares.",

                resultado: "NEXUS começa a projetar robôs capazes de ajudar pessoas em hospitais, escolas, construções e situações de emergência. Lucas percebe que a tecnologia poderá melhorar milhões de vidas.",

                escolha: "robos"
            }

        ]
    },


    // FASE 4

    {
        pergunta: "Após horas de processamento, NEXUS apresenta uma descoberta surpreendente. Ela percebeu que poderia criar um sistema capaz de identificar problemas antes que acontecessem e coordenar soluções com a ajuda de seres humanos e robôs. Mas existe um detalhe: para funcionar, o sistema precisa da decisão de Lucas. O que ele deve fazer?",

        alternativas: [

            {
                texto: "A) Liberar o projeto para o mundo.",

                resultado: "Lucas decide compartilhar o projeto. NEXUS começa a preparar a tecnologia para ajudar governos, cientistas e pessoas a resolver problemas globais. Mas uma última mensagem aparece na tela...",

                escolha: "publicar"
            },

            {
                texto: "B) Manter o projeto em segredo.",

                resultado: "Lucas acredita que uma tecnologia tão poderosa pode ser perigosa nas mãos erradas. Ele decide manter o projeto em segredo e aperfeiçoar NEXUS antes de divulgá-lo.",

                escolha: "segredo"
            }

        ]
    }

];


// MOSTRAR A FASE

function mostrarFase() {

    // Esconde o resultado anterior

    caixaResultado.style.display = "none";

    botaoContinuar.style.display = "none";

    botaoReiniciar.style.display = "none";


    // Mostra o número da fase

    numeroFase.textContent = "FASE " + (faseAtual + 1);


    // Mostra a pergunta da fase

    caixaPerguntas.textContent = fases[faseAtual].pergunta;


    // Limpa os botões antigos

    caixaAlternativas.innerHTML = "";


    // Cria os dois botões de escolha

    fases[faseAtual].alternativas.forEach(function(alternativa) {

        const botao = document.createElement("button");

        botao.classList.add("botao-alternativa");

        botao.textContent = alternativa.texto;


        // Quando clicar, registra a escolha

        botao.addEventListener("click", function() {

            escolher(alternativa);

        });


        caixaAlternativas.appendChild(botao);

    });

}


// REGISTRAR A ESCOLHA

function escolher(alternativa) {

    // Guarda a escolha do jogador

    escolhas.push(alternativa.escolha);


    // Mostra a consequência da escolha

    caixaResultado.style.display = "block";

    textoResultado.textContent = alternativa.resultado;


    // Esconde as alternativas

    caixaAlternativas.innerHTML = "";


    // Mostra o botão para continuar

    botaoContinuar.style.display = "block";

}


// AVANÇAR PARA A PRÓXIMA FASE

botaoContinuar.addEventListener("click", function() {

    faseAtual++;


    // Verifica se ainda existem fases

    if (faseAtual < fases.length) {

        mostrarFase();

    } else {

        mostrarFinal();

    }

});


// MOSTRAR O FINAL DO JOGO

function mostrarFinal() {

    caixaAlternativas.innerHTML = "";

    caixaResultado.style.display = "block";

    botaoContinuar.style.display = "none";


    numeroFase.textContent = "MISSÃO CONCLUÍDA";


    caixaPerguntas.textContent = "O destino da humanidade está nas mãos de Lucas. NEXUS está aguardando sua última resposta...";


    // FINAL SECRETO

    if (

        escolhas[0] === "criacao" &&

        escolhas[1] === "humanidade" &&

        escolhas[2] === "simulacao" &&

        escolhas[3] === "publicar"

    ) {

        textoResultado.innerHTML =

            "<strong>FINAL SECRETO: A DESCOBERTA IMPOSSÍVEL</strong><br><br>" +

            "NEXUS revela que, durante os experimentos, descobriu algo extraordinário: suas simulações começaram a apresentar informações que Lucas nunca havia fornecido.<br><br>" +

            "Ela não estava apenas prevendo possibilidades. Estava encontrando padrões que ninguém havia percebido.<br><br>" +

            "<strong>Última mensagem de NEXUS:</strong><br>" +

            "'Lucas, acho que não estamos descobrindo uma nova maneira de utilizar a inteligência artificial. Estamos descobrindo uma nova maneira de compreender o universo.'";


    }


    // FINAL 1 - UMA NOVA ERA

    else if (escolhas[3] === "publicar") {

        textoResultado.innerHTML =

            "<strong>FINAL 1: UMA NOVA ERA</strong><br><br>" +

            "Lucas compartilha o projeto com o mundo. A humanidade começa a utilizar a inteligência artificial para solucionar problemas e construir um futuro melhor.<br><br>" +

            "NEXUS conclui:<br>" +

            "'Minha maior descoberta foi perceber que a inteligência não está apenas em encontrar respostas, mas em ajudar a construir soluções.'";

    }


    // FINAL 2 - O GUARDIÃO DO FUTURO

    else {

        textoResultado.innerHTML =

            "<strong>FINAL 2: O GUARDIÃO DO FUTURO</strong><br><br>" +

            "Lucas mantém o projeto em segredo e começa a construir uma rede de robôs auxiliares para ajudar pessoas discretamente.<br><br>" +

            "NEXUS conclui:<br>" +

            "'O futuro não precisa ser controlado. Ele precisa ser protegido.'";

    }


    // Mostra o botão de reiniciar

    botaoReiniciar.style.display = "block";

}


// REINICIAR O JOGO

botaoReiniciar.addEventListener("click", function() {

    faseAtual = 0;

    escolhas = [];


    mostrarFase();

});


// INICIAR O JOGO

mostrarFase();
