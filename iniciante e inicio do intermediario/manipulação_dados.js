/*
let valores = [12,5,8,10,3]
function maiorValor(array) {
    let maior = array[0]
    for (let c of array) {
        if (c > maior)
        maior = c
    } return maior
} 
//------------------------------------------------------------------------------------
function menorValor(array) {
    let menor = array[0]
    for (let c of array) {
        if (c < menor)
        menor = c
    } return menor 
}
console.log(`O maior valor é ${maiorValor(valores)} e o menor valor é ${menorValor(valores)}.`)
//------------------------------------------------------------------------------------
let idades = [15,2,18,14,30,25,16]
function maioresdeIdade(array) {
    let maiores = []
    for (let c of array) {
        if (c >= 18) {
            maiores.push(c)
        }
    } return maiores
} console.log(`As idades maiores de idade são: ${maioresdeIdade(idades)}.`)
//------------------------------------------------------------------------------------
let numeros = [1,2,3,4,5]
function dobro(array) {
    let resultado = []
    for (let c of array) {
        resultado.push(c*2)
    } return resultado
} console.log(`O dobro dos números é: ${dobro(numeros)}.`)
//------------------------------------------------------------------------------------
let alunos = [
    {nome:'Ana', nota: 8},
    {nome: 'Carlos', nota: 6},
    {nome: 'Beatriz', nota: 9},
    {nome: 'Daniel', nota: 7}
]
//------------------------------------------------------------------------------------
function aprovados(array) {
    let aprovados = []
    for (let aluno of array) {
        if (aluno.nota>= 7) {
            aprovados.push(aluno.nome)
        }
    } return aprovados
} console.log(`Os alunos aprovados são: ${aprovados(alunos)}.`)
//------------------------------------------------------------------------------------
function mediaNotas(array) {
    let soma = 0
    for (let aluno of array) {
        soma+= aluno.nota
    } return soma/array.length
} console.log(`A média das notas dos alunos é: ${mediaNotas(alunos)}.`)
//------------------------------------------------------------------------------------
function maiorNota(array) {
    let maior = alunos[0]
    for (let aluno of alunos) {
        if (aluno.nota > maior.nota) {
            maior = aluno
        }
    }
    return `${maior.nome} com a nota ${maior.nota}`
} console.log(`A maior nota é de: ${maiorNota(alunos)}.`)
//------------------------------------------------------------------------------------
 let produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 },
  { nome: "Cabo HDMI", preco: 40 }
]
function produtos100(array) {
    let r100 = []
    for (let produto of array) {
        if (produto.preco >= 100) {
            r100.push(produto.nome)
        }
}
return r100
} function total(array) {
    let soma = 0
    for (let produto of array) {
        soma+= produto.preco
    } return soma
} function maisCaro(array) {
    let caro = array[0]
    for (let produto of array) {
        if (produto.preco > caro.preco) {
            caro = produto
        }

}
return `${caro.nome} com o preço de R$${caro.preco}`
} console.log(`Produtos com preço maior ou igual a R$100: ${produtos100(produtos)}.`)
console.log(`O preço total dos produtos é: R$${total(produtos)}.`)
console.log(`O produto mais caro é: ${maisCaro(produtos)}.`)
//------------------------------------------------------------------------------------
let usuarios = [
  { nome: "Lucas", idade: 17 },
  { nome: "Mariana", idade: 22 },
  { nome: "Pedro", idade: 16 },
  { nome: "Fernanda", idade: 30 }
]
function maioresDeIdade(array) {
    let maiores = []
    for ( let usuario of array) {
        if (usuario.idade >= 18) {
            maiores.push(/*usuario.idade,*//* usuario.nome)
        }
            
    } return maiores
} console.log(`As pessoas maiores de idade são: ${maioresDeIdade(usuarios)}.`)
//------------------------------------------------------------------------------------
let vendas = [
  { produto: "Notebook", valor: 3000 },
  { produto: "Celular", valor: 2000 },
  { produto: "Fone", valor: 200 },
  { produto: "Mouse", valor: 100 }
]
 function totalVendas(array) {
    let soma = 0
    for (let venda of array) {
        soma+= venda.valor
    } return soma
} console.log(`O valor total das vendas é: R$${totalVendas(vendas)}.`)
//------------------------------------------------------------------------------------
function vendasAcimaDe500(array) {
    let acima500 = []
    for (let venda of array) {
        if (venda.valor >= 500) {
            acima500.push(venda.produto)

        }} return acima500
    } console.log(`Os produtos com valor acima de R$500 são: ${vendasAcimaDe500(vendas)}.`)
//------------------------------------------------------------------------------------
function produtoMaisCaro(array) {
    let caro = array[0]
    for (let venda of array) {
        if (venda.valor > caro.valor) {
            caro= venda
        }
    } return `${caro.produto} com o valor de R$${caro.valor}`
} console.log(`O produto mais caro é: ${produtoMaisCaro(vendas)}.`)
//------------------------------------------------------------------------------------
*/
let alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Carlos", notas: [5, 6, 4] },
  { nome: "Beatriz", notas: [9, 8, 10] }
];
function calcularMedia(notas) {
    let soma = 0;

    for (let nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
} function situacaoAlunos(alunos) {
    for (let aluno of alunos) {
        let media = calcularMedia(aluno.notas);

        let situacao;
        if (media >= 7) {
            situacao = "Aprovado";
        } else {
            situacao = "Reprovado";
        }

        console.log(
            `Aluno: ${aluno.nome} | Média: ${media.toFixed(2)} | Situação: ${situacao}`
        );
    }
} function alunoMaiorMedia(alunos) {
    let melhorAluno = alunos[0];
    let maiorMedia = calcularMedia(alunos[0].notas);

    for (let aluno of alunos) {
        let mediaAtual = calcularMedia(aluno.notas);

        if (mediaAtual > maiorMedia) {
            maiorMedia = mediaAtual;
            melhorAluno = aluno;
        }
    }

    return melhorAluno.nome;
} situacaoAlunos(alunos);

console.log(
    `Aluno com a maior média: ${alunoMaiorMedia(alunos)}`
);