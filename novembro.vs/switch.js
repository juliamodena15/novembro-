const usuario = {nome: "Daniel", idade: 29, time: "Fluminense"};
const mensagemDeBoasVindas1 = "Bem vindo, tricolor";
const mensagemDeBoasVindas2 = "Bem vindo, rubro-negro";
const mensagemDeBoasVindas3 = "Bem vindo, Vascaino";
const mensagemDeBoasVindas4 = "Bem vindo, torcedor do Naútico";
const mensagemDeBoasVindas5 = "Bem vindo, torcedor do galo";
const mensagemDeBoasVindas6 = "Bem vindo, torcedor do cruizeiro";
const mensagemDeBoasVindas7 = "Bem vindo, torcedor do MELHOR TIME DO BRASIL!!!";
const mensagemGeral = "Bem vindo, amante do esporte!"
const mensagemDeEscolha = 'blablabla'
const mensagemFinal = 'blublublu'

let numeroDeRepetiçoes = 0; 

do {
  usuario.time === 'Fluminense' && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas1)
  : usuario.time === 'Flamengo' && usuario.idade >= 18
  ? console.log(mensagemDeBoasVindas2)
  : usuario.idade >= 18
  ? console.log(mensagemGeral)
  : console.log('Não vendemos ingresso para torcedores meores de 18 anos')

  console.log(mensagemDeEscolha);
  console.log(mensagemFinal);

  numeroDeRepetiçoes ++
} while(numeroDeRepetiçoes < 5)


    