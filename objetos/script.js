const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

console.log(filme.elenco[0])
    // letra A1: Será impresso o valor da propriedade elenco que é "Matheus Nachtergaele" do objeto filme.

console.log(filme.elenco[filme.elenco.length - 1])
    /* Letra A2: Utilizando o metodo length menos um foi possível recuperar a última posição da array 
    contido na propriedade elenco, e foi usado esse valor para imprimir a posição onde esta contido 
    o nome da atriz "Virginia Cavendish". */

console.log(filme.transmissoesHoje[2])
    /* Letra A3: A propriedade "transmissoesHoje" possui um array com 3 eletementos do tipo objeto, 
    quando foi determinado o valor dois será exibo  "{canal: "Globo", horario: "14h"}". */