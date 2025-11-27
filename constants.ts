import { QuestionBlock, ProfileType } from './types';

// Helper to create options easily
const createOption = (id: string, profile: ProfileType, text: string) => ({ id, profile, text });

// Generating 32 blocks of questions mapped to PARF
// P = Performance, A = Agradador, R = Racional, F = Fugitivo
export const QUESTIONS: QuestionBlock[] = [
  {
    id: 1,
    options: [
      createOption('1-P', 'P', 'Sinto que preciso ser o melhor em tudo que faço.'),
      createOption('1-A', 'A', 'Tenho dificuldade em dizer "não" para as pessoas.'),
      createOption('1-R', 'R', 'Prefiro analisar os fatos a lidar com emoções.'),
      createOption('1-F', 'F', 'Costumo deixar tarefas difíceis para a última hora.')
    ]
  },
  {
    id: 2,
    options: [
      createOption('2-R', 'R', 'Acredito que a lógica sempre supera o sentimento.'),
      createOption('2-F', 'F', 'Evito conflitos a qualquer custo, mesmo que me prejudique.'),
      createOption('2-P', 'P', 'Meu valor está diretamente ligado às minhas conquistas.'),
      createOption('2-A', 'A', 'Sinto-me culpado quando não ajudo alguém.')
    ]
  },
  {
    id: 3,
    options: [
      createOption('3-A', 'A', 'Preciso que as pessoas gostem de mim para me sentir bem.'),
      createOption('3-P', 'P', 'Descansar parece perda de tempo quando há trabalho a fazer.'),
      createOption('3-F', 'F', 'Frequentemente me perco em distrações para não focar no problema.'),
      createOption('3-R', 'R', 'Mantenho-me calmo e distante em situações de crise.')
    ]
  },
  {
    id: 4,
    options: [
      createOption('4-F', 'F', 'Quando fico estressado, tendo a me isolar ou fugir.'),
      createOption('4-R', 'R', 'Gosto de ter controle intelectual sobre as situações.'),
      createOption('4-A', 'A', 'Faço sacrifícios pessoais para garantir a harmonia do grupo.'),
      createOption('4-P', 'P', 'Sinto uma necessidade constante de provar minha competência.')
    ]
  },
  {
    id: 5,
    options: [
      createOption('5-P', 'P', 'Sou extremamente autocrítico quando erro.'),
      createOption('5-R', 'R', 'Demonstrações intensas de afeto me deixam desconfortável.'),
      createOption('5-A', 'A', 'Adapto minha personalidade para agradar quem está comigo.'),
      createOption('5-F', 'F', 'Prefiro adiar uma decisão difícil a tomá-la agora.')
    ]
  },
  {
    id: 6,
    options: [
      createOption('6-R', 'R', 'Valorizo a inteligência e a competência acima da simpatia.'),
      createOption('6-P', 'P', 'Estou sempre correndo contra o tempo para produzir mais.'),
      createOption('6-F', 'F', 'Uso o humor ou o silêncio para desviar de assuntos sérios.'),
      createOption('6-A', 'A', 'Sinto que sou responsável pelos sentimentos dos outros.')
    ]
  },
  {
    id: 7,
    options: [
      createOption('7-A', 'A', 'Tenho medo de ser rejeitado ou abandonado.'),
      createOption('7-F', 'F', 'Tenho dificuldade em manter o foco em uma única tarefa chata.'),
      createOption('7-R', 'R', 'Analiso excessivamente os prós e contras antes de agir.'),
      createOption('7-P', 'P', 'Sinto inveja de quem tem mais sucesso que eu.')
    ]
  },
  {
    id: 8,
    options: [
      createOption('8-P', 'P', 'Minha agenda está sempre cheia e não tenho tempo para lazer.'),
      createOption('8-A', 'A', 'Evito expressar minhas opiniões se elas forem controversas.'),
      createOption('8-R', 'R', 'Confio mais em dados do que na intuição das pessoas.'),
      createOption('8-F', 'F', 'Sonho acordado para escapar da realidade entediante.')
    ]
  },
  {
    id: 9,
    options: [
      createOption('9-F', 'F', 'Desisto facilmente quando as coisas ficam complicadas.'),
      createOption('9-R', 'R', 'Gosto de entender como as coisas funcionam detalhadamente.'),
      createOption('9-P', 'P', 'Irrito-me com pessoas lentas ou incompetentes.'),
      createOption('9-A', 'A', 'Busco validação externa constantemente.')
    ]
  },
  {
    id: 10,
    options: [
      createOption('10-R', 'R', 'Acredito que chorar é sinal de fraqueza ou descontrole.'),
      createOption('10-A', 'A', 'Coloco-me em segundo plano para atender aos outros.'),
      createOption('10-F', 'F', 'Sinto-me paralisado sob muita pressão.'),
      createOption('10-P', 'P', 'O fracasso é meu maior medo.')
    ]
  },
  {
    id: 11,
    options: [
      createOption('11-P', 'P', 'Estou sempre planejando o próximo grande objetivo.'),
      createOption('11-F', 'F', 'Procrastino até o último minuto possível.'),
      createOption('11-A', 'A', 'Sou o mediador oficial em conflitos familiares ou de trabalho.'),
      createOption('11-R', 'R', 'Prefiro trabalhar sozinho para garantir a qualidade técnica.')
    ]
  },
  {
    id: 12,
    options: [
      createOption('12-A', 'A', 'Sinto-me egoísta quando faço algo só para mim.'),
      createOption('12-R', 'R', 'Questiono a lógica de tudo, até de sentimentos.'),
      createOption('12-P', 'P', 'Comparo-me constantemente com os outros.'),
      createOption('12-F', 'F', 'Evito conversas que exigem profundidade emocional.')
    ]
  },
  {
    id: 13,
    options: [
      createOption('13-F', 'F', 'Esqueço compromissos importantes por distração.'),
      createOption('13-P', 'P', 'Trabalho até a exaustão para garantir resultados.'),
      createOption('13-R', 'R', 'Tenho dificuldade em entender "indiretas" sociais.'),
      createOption('13-A', 'A', 'Elogio os outros mesmo quando não concordo totalmente.')
    ]
  },
  {
    id: 14,
    options: [
      createOption('14-R', 'R', 'Busco a verdade objetiva, doa a quem doer.'),
      createOption('14-A', 'A', 'Sinto imensa gratidão quando alguém me dá atenção.'),
      createOption('14-P', 'P', 'Gosto de estar no comando e liderar.'),
      createOption('14-F', 'F', 'Mudo de planos constantemente para evitar tédio.')
    ]
  },
  {
    id: 15,
    options: [
      createOption('15-P', 'P', 'Impressionar os outros é importante para mim.'),
      createOption('15-F', 'F', 'Digo que "está tudo bem" mesmo quando não está.'),
      createOption('15-R', 'R', 'Irrito-me com dramas emocionais desnecessários.'),
      createOption('15-A', 'A', 'Tenho dificuldade em impor limites nos relacionamentos.')
    ]
  },
  {
    id: 16,
    options: [
      createOption('16-A', 'A', 'Faço favores que não quero fazer para ser aceito.'),
      createOption('16-R', 'R', 'Sinto orgulho da minha capacidade intelectual.'),
      createOption('16-F', 'F', 'Deixo a vida me levar, sem planejar muito o futuro.'),
      createOption('16-P', 'P', 'Sinto que nunca fiz o suficiente.')
    ]
  },
  {
    id: 17,
    options: [
      createOption('17-R', 'R', 'Prefiro livros e ideias a festas barulhentas.'),
      createOption('17-P', 'P', 'Fico ansioso se não estou sendo produtivo.'),
      createOption('17-A', 'A', 'Peço desculpas mesmo quando a culpa não é minha.'),
      createOption('17-F', 'F', 'Ignoro problemas financeiros ou de saúde esperando que sumam.')
    ]
  },
  {
    id: 18,
    options: [
      createOption('18-F', 'F', 'Sinto sono ou cansaço súbito diante de tarefas chatas.'),
      createOption('18-A', 'A', 'Minha felicidade depende da felicidade dos outros.'),
      createOption('18-P', 'P', 'Sou workaholic assumido.'),
      createOption('18-R', 'R', 'Tenho dificuldade em expressar afeto fisicamente.')
    ]
  },
  {
    id: 19,
    options: [
      createOption('19-P', 'P', 'Busco status e reconhecimento social.'),
      createOption('19-R', 'R', 'Gosto de categorizar e organizar informações.'),
      createOption('19-F', 'F', 'Evito olhar meus extratos bancários se estiverem ruins.'),
      createOption('19-A', 'A', 'Sinto que dou muito mais do que recebo nas relações.')
    ]
  },
  {
    id: 20,
    options: [
      createOption('20-A', 'A', 'Tenho medo de magoar as pessoas com minhas palavras.'),
      createOption('20-F', 'F', 'Prometo coisas que não consigo cumprir para sair da pressão.'),
      createOption('20-R', 'R', 'Acho difícil confiar na intuição sem provas.'),
      createOption('20-P', 'P', 'Sou impaciente com processos lentos.')
    ]
  },
  {
    id: 21,
    options: [
      createOption('21-R', 'R', 'Observo as situações de fora, sem me envolver.'),
      createOption('21-P', 'P', 'Quero ser reconhecido como o melhor na minha área.'),
      createOption('21-A', 'A', 'Sinto necessidade de cuidar de quem está sofrendo.'),
      createOption('21-F', 'F', 'Tenho dificuldade em terminar o que começo.')
    ]
  },
  {
    id: 22,
    options: [
      createOption('22-F', 'F', 'Uso o celular ou TV para anestesiar minha mente.'),
      createOption('22-A', 'A', 'Mudo de opinião para concordar com a maioria.'),
      createOption('22-P', 'P', 'Acredito que o fim justifica os meios se o resultado for bom.'),
      createOption('22-R', 'R', 'Sinto-me superior quando uso a lógica contra a emoção alheia.')
    ]
  },
  {
    id: 23,
    options: [
      createOption('23-P', 'P', 'Sinto um vazio interior quando paro de trabalhar.'),
      createOption('23-R', 'R', 'Planejo meticulosamente para evitar surpresas.'),
      createOption('23-F', 'F', 'Adio conversas difíceis indefinidamente.'),
      createOption('23-A', 'A', 'Sinto que preciso "comprar" o amor sendo útil.')
    ]
  },
  {
    id: 24,
    options: [
      createOption('24-A', 'A', 'Fico muito abalado com críticas, mesmo as construtivas.'),
      createOption('24-F', 'F', 'Prefiro não saber das más notícias.'),
      createOption('24-R', 'R', 'Corrijo as pessoas quando elas falam algo impreciso.'),
      createOption('24-P', 'P', 'Foco na meta e ignoro o cansaço do corpo.')
    ]
  },
  {
    id: 25,
    options: [
      createOption('25-R', 'R', 'Acredito que a maioria das pessoas é irracional.'),
      createOption('25-P', 'P', 'Sinto raiva de mim mesmo quando não atinjo a perfeição.'),
      createOption('25-A', 'A', 'Tenho dificuldade em cobrar dinheiro ou favores de volta.'),
      createOption('25-F', 'F', 'Busco atalhos para evitar o esforço prolongado.')
    ]
  },
  {
    id: 26,
    options: [
      createOption('26-F', 'F', 'Sinto que a vida deveria ser mais leve e fácil.'),
      createOption('26-A', 'A', 'Sinto-me responsável por "salvar" as pessoas.'),
      createOption('26-P', 'P', 'Minha autoestima flutua conforme meu desempenho.'),
      createOption('26-R', 'R', 'Desconecto-me quando a conversa fica muito sentimental.')
    ]
  },
  {
    id: 27,
    options: [
      createOption('27-P', 'P', 'Estou sempre buscando a próxima promoção ou prêmio.'),
      createOption('27-R', 'R', 'Gosto de dissecar problemas complexos sozinho.'),
      createOption('27-A', 'A', 'Aceito abusos para não ficar sozinho.'),
      createOption('27-F', 'F', 'Finjo que não ouvi para não ter que responder.')
    ]
  },
  {
    id: 28,
    options: [
      createOption('28-A', 'A', 'Minha maior satisfação é ver os outros felizes por minha causa.'),
      createOption('28-F', 'F', 'Evito olhar nos olhos quando estou mentindo ou fugindo.'),
      createOption('28-R', 'R', 'Prefiro a solidão a companhias superficiais.'),
      createOption('28-P', 'P', 'Acelero o carro ou o passo porque estou sempre com pressa.')
    ]
  },
  {
    id: 29,
    options: [
      createOption('29-R', 'R', 'Tenho uma explicação lógica para tudo.'),
      createOption('29-P', 'P', 'Adoro competições e odeio perder.'),
      createOption('29-F', 'F', 'Escondo-me atrás de piadas.'),
      createOption('29-A', 'A', 'Sinto-me esgotado de tanto cuidar dos outros.')
    ]
  },
  {
    id: 30,
    options: [
      createOption('30-F', 'F', 'Sinto vontade de fugir quando a responsabilidade aumenta.'),
      createOption('30-R', 'R', 'Não gosto de compartilhar meus sentimentos íntimos.'),
      createOption('30-P', 'P', 'Trato a vida como uma maratona a ser vencida.'),
      createOption('30-A', 'A', 'Sinto que ninguém cuida de mim como cuido dos outros.')
    ]
  },
  {
    id: 31,
    options: [
      createOption('31-P', 'P', 'Sacrifico minha saúde pelo sucesso.'),
      createOption('31-A', 'A', 'Tenho dificuldade em identificar o que eu realmente quero.'),
      createOption('31-R', 'R', 'Valorizo a eficiência acima da empatia.'),
      createOption('31-F', 'F', 'Deixo oportunidades passarem por medo do esforço.')
    ]
  },
  {
    id: 32,
    options: [
      createOption('32-A', 'A', 'Meu maior defeito é ser bonzinho demais.'),
      createOption('32-R', 'R', 'As pessoas me acham frio, mas sou apenas sensato.'),
      createOption('32-F', 'F', 'Adio o início das coisas por medo de não conseguir.'),
      createOption('32-P', 'P', 'Só descanso quando morro (ou desmaio).')
    ]
  }
];