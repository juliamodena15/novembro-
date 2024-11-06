//////////// exc 1

const usuario = {
    nome: 'Júlia',
    idade: 16,
    curso: 'Desenvolvimento de Sistemas'
}


switch (usuario.curso) {
  case 'Desenvolvimento de Sistemas':
    console.log('Bem vindo, Desenvolvedor.\n Duração: 9 horas \n Carga Horária: Das 8h ás 17h ')
    break
  case 'Logistica':
    console.log('Bem vindo, Operador.\n Duração: 5 horas \n Carga Horária: Das 13h ás 17h')
    break
  case 'Administração':
    console.log('Bem vindo, Admnistrador.\n Duração: 5 horas \n Carga Horária: Das 7h ás 12h')
    break
  default:
    console.log('Você não tem cadastro')
}

////////// exc 2

let numero = 2;
let numero1 = 9;
let operação = '*'

switch (operação) {
    case '+':
        console.log(numero + numero1);
        break;
    case '-':
        console.log(numero - numero1);
        break;
    case '/':
        console.log(numero / numero1);
        break;
    case '*':
        console.log(numero * numero1);
        break;
    default:
        console.log('Dados Inválidos');
        break;
}

/////// exc 3 

switch (true) {
    case usuario.idade <= 10:
        console.log('Infantil');
        break;
    case usuario.idade >= 11 && usuario.idade <= 17:
        console.log('Adolecente');
        break;
    case usuario.idade > 17 && usuario.idade <= 65:
        console.log('Adulto');
        break;
    case usuario.idade > 65 && usuario.idade <= 100:
        console.log('Idoso');
        break;
    default:
        console.log('TA PRA MORRER');
        break;
}

//////// exc 4 

let nota = 10 

switch (true) {
    case nota === 10:
        console.log('Exelente');
        break;
    case nota === 9:
        console.log('Muito Bom');
        break;
    case nota === 8:
        console.log('Bom');
        break;
    case nota === 7 || nota === 6:
        console.log('Regular');
        break;
    case nota < 6:
        console.log('Insuficiente')
    default:
        console.log('Numero inválido')
}

///// exc 5

let diaDaSemana = 4

switch (diaDaSemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
         break;
     case 5:
        console.log('Quinta');
         break;
     case 6:
        console.log('Sexta');
         break;
     case 7:
        console.log('Sábado');
         break;    
    default:
        console.log('Dia inválido')

}

///////////// exc 6

let evento = 'Festa Junina'

switch (evento) {
    case 'Festa Junina':
        console.log('Festa Junina \n Dia do Evento: 30 de junho');
        break;
    case 'Feira Profissões':
        console.log('Feira Profissões \n Dia do Evento: 15 de novembro');
        break;
    case 'Semana de Tecnologia':
        console.log('Semana de Tecnologia \n Dia do Evento: 14 a 29 de outubro');
        break;
    default: 
        console.log('Esse evento não está no calendário')
}

////////// exc 7 

let mesesDoAno = 12

switch (mesesDoAno) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
         break;
    case 5:
        console.log('Maio');
         break;
    case 6:
        console.log('Junho');
         break;
    case 7:
        console.log('Julho');
         break;   
    case 8:
         console.log('Agosto');
         break;  
    case 9:
        console.log('Setembro');
         break;  
    case 10:
        console.log('Outubro');
         break;  
    case 11:
        console.log('Novembro');
         break;  
    case 12:
        console.log('Dezembro');
         break;  
    default:
        console.log('Dia inválido')
}

//////// exc 8

let estaçoesDoAno = 'Verão'

switch (estaçoesDoAno) {
   case 1:
        console.log('Verão');
        break;
   case 2:
        console.log('Outono');
        break;
   case 3:
        console.log('Primavera');
        break;
   case 4:
        console.log('Inverno');
        break;
    default:
        console.log('Estação do ano inválida')
}

////// exc 9

let unidade = 15
let unidadeMedida = 'km'

switch (unidadeMedida) {
    case 'm':
        console.log(`${unidade} metros`);
        break;
    case 'cm':
        console.log(unidade / 100 );
        break;
    case 'km':
        console.log(unidade * 1000);
        break;
    default:
        console.log('Unidade de medida inválido')
    
}

/////// exc 10

let Nota = 'A+'

switch (Nota) {
    case 'A+':
        console.log('Nota 10');
        break;
    case 'A':
        console.log('Nota 9');
        break;
    case 'B+':
        console.log('Nota 8');
        break; 
    case 'B':
        console.log('Nota 7');
        break;
    case 'C+':
        console.log('Nota 6');
        break;
    case 'C':
        console.log('Nota 5');
        break;
    case 'D+':
        console.log('Nota 4');
        break;   
    case 'D':
        console.log('Nota 3');
        break;
    case 'F+':
        console.log('Nota 2');
        break;
    case 'F':
        console.log('Nota 1');
        break;
    default:
        console.log('Nota Inválida')

}

////////////// exc 11 

let moedaEstrangeiro = 'BRL'
let valor = 15

switch (moedaEstrangeiro) {
    case 'BRL':
        console.log(valor);
        break;
    case 'USD':
        console.log(valor / 6.19);
        break;
    case 'EUR':
        console.log(valor / 6.13);
        break;
    case 'GBP':
        console.log(valor / 7.97);
        break; 
    case 'JPY':
        console.log(valor / 0.040 );
        break;  
    case 'CAD':
        console.log( valor / 4.44);
        break;  
    default:
        console.log('Dados Inválidos')
    
}

/////////// exc 12 

let curso ='Técnico'

switch (curso) {
    case 'Técnico':
      console.log('O ensino técnico prepara para o mercado de trabalho com cursos práticos e rápidos.')
      break
    case 'Superior':
      console.log('O ensino superior oferece formação acadêmica aprofundada para profissionais em diversas áreas.')
      break
    case 'Extensão':
      console.log('A extensão promove atividades complementares para atualizar e aprofundar conhecimentos.')
      break
    default:
      console.log('Você não tem cadastro')
  }


/////// exc 13
let tarefas = 3

switch (tarefas) {

    case 1:
         console.log('Alta prioridade: \n *Estudar para a prova*');
         break;
    case 2:
         console.log('Média prioridade: \n *Fazer trabalho para essa semana*');
         break;
    case 3:
         console.log('Baixa prioridade \n *Lição de casa*');
         break;
    default:
        console.log('Valor invávido')
 }

 ////// exc 14

 let altura = 1.80;
 let alturaM = altura * altura;
 let peso = 80;
 let Imc = peso / alturaM ;

 switch (true) {
    case Imc < 18.5:
        console.log(`Você está abaixo do peso, com um IMC de ${Imc}`);
        break;
    case Imc > 18.5 && Imc <= 24.9:
        console.log(`Peso normal, com um IMC de ${Imc}`);
        break;
    case Imc >= 25 && Imc <= 29.9:
        console.log(`Sobrepeso, com um IMC de ${Imc}`)
        break
    case Imc > 30:
        console.log(`Obesidade, com um IMC de ${Imc}`)

 }

 //////// exc 15

 let dcmnt = "RG"
switch (dcmnt) {

    case "RG":
    console.log("RG: 12 345 678-9")
    break;
    case "CPF":
    console.log("CPF: 123.456.789.99")
    break;
    case "Passaporte":
    console.log("Passaporte: AA 000001")
    break;
}

//////// exc 16

let bus = "Estudante"
switch (dcmnt) {

    case "Estudante":
    console.log("Tarifa - 2,20 ")
    break;
    case "Trabalhador":
    console.log("Tarifa - 4,40")
    break;
    case "Idoso":
    console.log("Tarifa - Gratuito")
    break;
};

///////// exc 17

let tempo = 5;

switch (tempo) {

    case tempo < 1:
        console.log("Rápido");
        break;

    case tempo > 0 && tempo < 3:
        console.log("Moderado");
        break;

    case (tempo > 3 && tempo < 5):
        console.log("Lento");
        break;

    default:
        console.log("Muito Lento");
        break;
};

///////// exc 18


let defi = "Autismo"
switch (dcmnt) {

    case "Autismo":
    console.log("O Acompanhante Terapêutico (AT) é um profissional que atua com pessoas com Transtorno do Espectro Autista (TEA) e outros transtornos, oferecendo apoio e orientação para o desenvolvimento e aprendizagem")
    break;

    case "TDAH":
    console.log("O Focus TDAH é um aplicativo gratuito que ajuda pacientes, familiares e profissionais de saúde no tratamento de pessoas com TDAH")
    break;

    case "Esquizofrenia":
    console.log("O Programa de Esquizofrenia (PROESQ) da Universidade Federal de São Paulo (UNIFESP) é um serviço de assistência para pessoas com esquizofrenia e outros quadros psicóticos")
    break;
};


//////// exc 19 


let not = 90;

switch (true) {

    case not > 89 && not <= 100:
    console.log("A");
    break;

    case (not > 79 && not < 90):
    console.log("B");
    break;

    case (not > 69 && not < 80):
    console.log("C");
    break;

    case (not > 59 && not < 70):
    console.log("D");
    break;

    case (not > 0 && not < 60):
    console.log("Conceito: F");
    break;

    default:
    console.log("Nota inválida, insira uma nota entre 0 e 100.");
    break;
};


///////// exc 20 


let Clima = "Sol"
switch (dcmnt) {

    case "Sol":
    console.log("proteja-se com protetor solar de alto fator, óculos de sol com lentes polarizadas e chapéu ou boné. Use roupas leves e claras e não se esqueça de levar água para manter-se hidratado")
    break;

    case "Chuva":
    console.log("leve um guarda-chuva ou capa de chuva, use calçados impermeáveis e roupas que sequem rapidamente. Evite acessórios que possam danificar com água e tenha um plano para abrigar-se")
    break;

    case "Nublado":
    console.log("use roupas em camadas para ajustar à temperatura, leve um casaco ou jaqueta e use calçados confortáveis. Aproveite o clima para atividades ao ar livre, mas esteja preparado para chuva")
    break;
};

 