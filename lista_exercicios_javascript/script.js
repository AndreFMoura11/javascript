// Questão 1
function enviar_1q(){
let num1 = window.document.getElementById("numero1_1q").value
let num2 = window.document.getElementById("numero2_2q").value
let resposta_1q = 0

console.log(num1 , num2)
if (num1 > num2){
    let resposta_1q = num1  // Sempre lembrar de colocar = pra usar o innerHTML
    document.getElementById("resposta_1q").innerHTML=(`<br>O Numero maior é :${resposta_1q}`)
}else{
    let resposta_1q = num2
    document.getElementById("resposta_1q").innerHTML=(`<br>O Numero maior é :${resposta_1q}`)
}
}

//Questão 2
function enviar_2q(){
    let num2_2q = window.document.getElementById("numero_2q").value
    let resposta_2q = 0
    console.log(num2_2q)

    if (num2_2q >=0){
        document.getElementById("resposta_2q").innerHTML=(`<br>Seu numero:${num2_2q} é Positivo`)
    
    }else{
        document.getElementById("resposta_2q").innerHTML=(`<br> Seu numero:${num2_2q} é Negativo`)
    }
}

//Questão 3
function enviar_3q(){
    let letra_3q = document.getElementById("letra_3q").value.toUpperCase();

    if (letra_3q === "M" ){
        document.getElementById("resposta_3q").innerHTML=(`Escolheu Masculino`)
    }else if(letra_3q === "F"){
        document.getElementById("resposta_3q").innerHTML=(`Escolheu Feminino`)
    }
}

//Questão ex
function enviar_eq(){
    let letra_eq = document.getElementById("letra_eq").value

    if (letra_eq === letra_eq.toUpperCase()){
        document.getElementById("resposta_eq").innerHTML=(`Você escreveu em Maisculo:${letra_eq.toUpperCase()}`)
    }else{
        document.getElementById("resposta_eq").innerHTML=(`Você escreveu em minusculo:${letra_eq}`)
    }
}

//Questões 4
function enviar_4q(){
    let letra_4q = document.getElementById("letra_4q").value.toUpperCase()

    if (letra_4q === "A" || letra_4q === 'E' || letra_4q === "I" || letra_4q === 'O' || letra_4q === 'U' ){
        document.getElementById("resposta_4q").innerHTML=(`Sua letra ${letra_4q} é vogal !`)

    }else{
        document.getElementById("resposta_4q").innerHTML=(`Sua letra ${letra_4q} é Consoante !`)
    }
}

//Questão 5
function enviar_5q(){  // Lembrar de colcoar parseFloat que transforma para Float se nao o calcuco ficara alterado
    let prova_1 = parseFloat(document.getElementById("prova_1").value) // verificar a questao de colocar numero inteiro no input
    let prova_2 = parseFloat(document.getElementById("prova_2").value)

    console.log(prova_1+prova_2)
    let media = (prova_1 + prova_2) / 2;

    if (media >= 7){                                                    // ToFixed() para formatar numeros floats
        document.getElementById("resposta_5q").innerHTML=(`Sua media foi ${media.toFixed(1)} você passou !`)

    }else{
        document.getElementById("resposta_5q").innerHTML=(`Sua media foi ${media.toFixed(1)} você Não passou !`)
    }

}

//Questão 6
// IMPORTANTE  OLHAR DE NOVO
function enviar_6q() {
    let lista = [];
    let maior = null;
    let menor = null;

    for (let i = 1; i <= 3; i++) {
        // lembrar de usar o parseFloat para converter pois vem do HTML como string
        let numero = parseFloat(document.getElementById(`numero_${i}_6q`).value);
        lista.push(numero);

        // colcoar null é melhor do que colocar 0 por causa da condiçao de inicio do FOR
        
        if (maior === null || menor === null) {
            maior = menor = numero;
        } else {
            if (numero > maior) {
                maior = numero;
            }
            if (numero < menor) {
                menor = numero;
            }
        }
    }

    
    document.getElementById("resposta_6q").innerHTML = `Seu Maior Número: ${maior}<br>Seu Menor Número: ${menor}`;
    document.getElementById("reparo").innerHTML = `Lista: ${lista}`;
}

//Questão 8
function enviar_8q(){
    let maior = null
    let menor = null

    //O QUE É ESSE INCREMENTO EXATAMENTE ???
    for (let i = 1 ; i <=3;i++){
        let produtos = parseFloat(window.document.getElementById(`letra_${i}_8q`).value);

        if(maior === null || menor === null ){
            maior = menor = produtos;
        }
        else{
            if (produtos>maior){
                maior = produtos;
            }
            if(produtos < menor){
                menor = produtos
            }
        }
        document.getElementById("resposta_8q").innerHTML =(`O Produto mais barato é o :R$${menor}`)
    }
}

//Questão 9
function enviar_9() {
    
    let numeros = [];

    
    for (let i = 1; i <= 3; i++) {
        let numero = Number(document.getElementById(`numero_${i}_9q`).value);

        // Preciso entender melhor esse isNan
        if (isNaN(numero)) {
            document.getElementById("resposta_9").innerHTML = "insira números válidos.";
            return;
        }

        numeros.push(numero); 
    }

    // Mesma coisa do python sobre mostrar ordenação da lista
    numeros.sort((a, b) => b - a);

    
    document.getElementById("resposta_9").innerHTML = `Ordem: ${numeros.join(" > ")}`;
}

//Questão 10
function enviar_10(){
    let periodo = (document.getElementById("periodo")).value.toUpperCase()

    switch (periodo) {
        case "M":   
            document.getElementById("resposta_10").innerHTML = (`Você escolheu ${periodo}: Bom Dia!`);
            break;
        case "V":    
            document.getElementById("resposta_10").innerHTML = (`Você escolheu ${periodo}: Boa Tarde!`);
            break;
        case "N":   
            document.getElementById("resposta_10").innerHTML = (`Você escolheu ${periodo}: Boa Noite!`);
            break;
        default:
            document.getElementById("resposta_10").innerHTML = (`Resposta Inválida`);
            break;
    }

    
}